import React, {Component} from 'react';

function Product(props){
    return(
         <div className="productCard">
             <img src={props.url} alt="image"/>
             <p>{props.name}</p>
             <p>{props.price}</p>
         </div>
    )
}

export default Product;