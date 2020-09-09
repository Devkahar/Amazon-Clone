import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product(props) {
    const [{basket},dispatch] = useStateValue();
    
    
    const addToBasket = ()=>{
        // dispatch item into data layer
        console.log('this is basket >>>>',basket);

        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        })
        
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{props.title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(props.rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={props.image} alt=''/>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
