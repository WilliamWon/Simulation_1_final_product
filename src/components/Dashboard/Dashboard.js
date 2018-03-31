import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{
    render(){
        const {list} = this.props;
        let invList = list.map((e,i)=> {
            return <Product 
                   key={i}
                   url = {e.image_url}
                   name = {e.name}
                   price = {e.price} 
                   />
        })
        return(
            <div>
                <h1>Dashboard</h1>
                {invList}
            </div>
        )
    }
}

export default Dashboard;