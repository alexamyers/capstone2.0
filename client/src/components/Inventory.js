import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

 
function Inventory() {
 
   const [inventory, setInventory] = useState([])
 
   useEffect(() => {
       axios.get('/inventory')
       .then((res) => {
           setInventory(res.data);
       })
       .catch((err) => console.log(err));
   }, []);


   function addToCart(id) {
    axios.post('/cart', { id })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
   };


   const displayRecords = inventory.map((inventoryInfo) => {
       const { vinyl_id, album_name, artist_name, price } = inventoryInfo;

       return(
        <div className='display-album'>
            <p key={ album_name }>{ album_name }</p>
            <p key={ artist_name }>{ artist_name }</p>
            <p key={ vinyl_id }>{ price }</p>
            <button className='inventory-button' onClick={() => addToCart(vinyl_id)}>ADD TO CART</button>
        </div>
       )
   })
 
   return (
        <div className='landing-page'>
            <Header />
            <div className='display-inventory'>
            {displayRecords}
            </div>
            <Footer />
       </div>
   )
 
}
 
export default Inventory;