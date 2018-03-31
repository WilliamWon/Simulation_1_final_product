import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: []
    }
  }
  componentDidMount(){
    axios.get("/api/inventory").then(res=>{
      this.setState({inventoryList: res.data})
    })
  }
  newProduct(name, price, image_url){
    axios.post("/api/inventory", {name, price, image_url})
    .then(res => {
        this.setState({inventory: res.data})
    })
  }

  render() {
    const {inventoryList} = this.state;
    return (
      <div className="App">
          <Header />
          <Dashboard 
          list={inventoryList}
          />
          <Form newProduct={this.newProduct}/>
      </div>
    );
  }
}

export default App
