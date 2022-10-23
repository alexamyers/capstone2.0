import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

 
function Cart() {
 
   const [inventory, setInventory] = useState([])
   
 
   useEffect(() => {
       axios.get('/showCart')
       .then((res) => {
           setInventory(res.data);
       })
       .catch((err) => console.log(err));
   }, []);


   function removeFromCart(id) {
    axios.delete(`/showCart/${ id }`, { id })
    .then((res) => {
        console.log(res.data)
        setInventory(res.data);
    })
    .catch((err) => console.log(err));
   };

   function increaseQuantity(id, quantity) {
    axios.put(`/showCartIncrease/${ id }/${quantity}`, { id, quantity })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
   };

   function decreaseQuantity(id, quantity) {
    axios.put(`/showCartDecrease/${ id }/${quantity}`, { id, quantity })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
   };

    const displayRecords = inventory.map((inventoryInfo) => {
       const { vinyl_id, album_name, artist_name, price, image, quantity} = inventoryInfo;

       return(
        <div className='display-cart'>
            <div className='display-cart-info'>
            <img className='cart-image' key={ vinyl_id } src={image} alt='album cover' />
            <p key={ album_name }>{ album_name }</p>
            <p key={ artist_name }>{ artist_name }</p>
            <p key={ price }>{ price }</p>
            </div>
            <div className='quantity-container'>
                <button className='checkout-buttons' onClick={() => increaseQuantity(vinyl_id, quantity)}>+</button>
                <span>{  quantity }</span>
                <button className='checkout-buttons' onClick={() => decreaseQuantity(vinyl_id, quantity)}>-</button>
            </div>
            <br/>
            <button className='delete-button' onClick={() => removeFromCart(vinyl_id)}>REMOVE</button>
        </div>
       )
   });


   return (
        <div className='shopping-cart'>
            <Header />
            <form className='info-form'>
                <label>FIRST NAME</label>
                <input/>
                <label>LAST NAME</label>
                <input/>
                <label>ADDRESS</label>
                <input/>
                <label>CITY</label>
                <input/>
                <label>STATE</label>
                <input/>
                <label>ZIP-CODE</label>
                <input/>
                <label>CREDIT CARD NUMBER</label>
                <input/>
                <label>SECURITY NUMBER</label>
                <input/>
                <button>SUBMIT ORDER</button>
            </form>
            <div className='cart-items-container'>
                { displayRecords && displayRecords }
            </div>
            <Footer />
       </div>
   )

}
 
export default Cart;
