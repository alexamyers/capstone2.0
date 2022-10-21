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
    axios.delete(`/showCart/${id}`, {id})
    .then((res) => {
        console.log(res.data);
        console.log('delete made')
    })
    .catch((err) => console.log(err));
   }



   const displayRecords = inventory.map((inventoryInfo) => {
       const { vinyl_id, album_name, artist_name, price } = inventoryInfo;

       return(
        <div className='display-album'>
            <p key={ album_name }>{ album_name }</p>
            <p key={ artist_name }>{ artist_name }</p>
            <p key={ vinyl_id }>{ price }</p>
            <button onClick={() => removeFromCart(vinyl_id)}>REMOVE</button>
        </div>
       )
   })

   return (
        <div className='shopping-cart'>
            <Header />
            {displayRecords}
            <Footer />
       </div>
   )
 
}
 
export default Cart;
