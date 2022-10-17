import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
 
function Inventory() {
 
   const [inventory, setInventory] = useState([])
 
   useEffect(() => {
       axios.get('/inventory')
       .then((res) => {
           console.log(res.data)
           setInventory(res.data);
       })
       .catch((err) => console.log(err));
   }, []);
 
   const displayRecords = inventory.map((inventoryInfo) => {
       const { vinyl_id, album_name, artist_name, price } = inventoryInfo;
       return(
        <div className='display-album'>
            <p key={ vinyl_id }>{ album_name }</p>
            <p key={ vinyl_id }>{ artist_name }</p>
            <p key={ vinyl_id }>{ price }</p>
        </div>
       )
   })

 
   return (
       <div className='display-inventory'>
           {displayRecords}
       </div>
   )
 
}
 
export default Inventory;