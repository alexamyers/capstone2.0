import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
 
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
       const { album_name } = inventoryInfo;
   })

 
   return (
       <div>
           <p>work in progress</p>
       </div>
   )
 
}
 
export default App;