require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
 
const {PORT, CONNECTION_STRING } = process.env;
 
const { Sequelize } = require("sequelize");
 
const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: "postgres",
   dialectOptions: {
       ssl: {
           rejectUnauthorized: false
       }
   }
});

const app = express();
 
app.use(express.json());
app.use(cors());
 
const { seed } = require('./seed');
const { getInventory } = require('./controller');
 
app.post('/seed', seed);
app.get('/inventory', getInventory);
 
app.listen(PORT, () => console.log(`All good on port ${ PORT }`));
