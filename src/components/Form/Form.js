import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl: '',
            name: '',
            price: 0
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleProduct = this.handleProduct.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImage(url){
        this.setState({imageUrl: url})
    }
    handleProduct(pro){
        this.setState({productName: pro})
    }
    handlePrice(val){
        this.setState({price:val})
    }
    handleCancel(){
        const {imageUrl,productName,price} = this.state
        this.setState({imageUrl:'',productName:'',price:0})
    }
    handleAdded(props){
        const {newProduct} = this.props;
        const {name, price, imageUrl} = this.state;
        newProduct(name,price,imageUrl);
        this.setState({name: "",imageUrl:"",price:0})
    }

    render(){
        return(
            <div>
                <p>Form</p>
                <input onChange={(e) => this.handleImage(e.target.value)}/>
                <input onChange={(e) => this.handleProduct(e.target.value)}/>
                <input onChange={(e) => this.handlePrice(e.target.value)}/>
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleAdded}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;