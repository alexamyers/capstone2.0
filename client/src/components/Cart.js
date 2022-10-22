import React, { useState, useEffect } from 'react';
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
        setInventory(res.data);
    })
    .catch((err) => console.log(err));
   };

   function increaseQuantity(id, quantity) {
    axios.put(`/showCart/${ id }/${quantity}`, { id, quantity })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
   };

   function decreaseQuantity(id, quantity) {
    axios.put(`/showCart/${ id }/${quantity}`, { id, quantity })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
   };


   const displayRecords = inventory.map((inventoryInfo) => {
       const { vinyl_id, album_name, artist_name, price, image, quantity} = inventoryInfo;

       return(
        <div className='display-cart'>
            <img key={ vinyl_id } src={image} alt='album cover' />
            <p key={ album_name }>{ album_name }</p>
            <p key={ artist_name }>{ artist_name }</p>
            <p key={ vinyl_id }>{ price }</p>
            <div className='quantity-container'>
                <button onClick={() => increaseQuantity(vinyl_id, quantity)}>+</button>
                <p>{ quantity }</p>
                <button onClick={() => decreaseQuantity(vinyl_id, quantity)}>-</button>
            </div>
            <br/>
            <button onClick={() => removeFromCart(vinyl_id)}>REMOVE</button>
        </div>
       )
   })

   return (
        <div className='shopping-cart'>
            <Header />
            <form className='info-form'>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
            </form>
            {displayRecords}
            <Footer />
       </div>
   )
 
}
 
export default Cart;
