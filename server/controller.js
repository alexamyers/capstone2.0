require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const { Sequelize } = require("sequelize");
 
const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: "postgres",
   dialectOptions: {
       ssl: {
           rejectUnauthorized: false
       }
   }
});
 
module.exports = {
 
getInventory: (req, res) => {
   sequelize.query(`SELECT vinyl_id, album_name, artist_name, price FROM vinyl_records;`)
   .then((dbResult) => {
       console.log(dbResult[0])
       res.status(200).send(dbResult[0])
   })
   .catch((err) => console.log(err));
}, 

addToCart: (req, res) => {
    console.log('hit endpoint')
    const { id } = req.body;
    let quantity = 1;
    const cartQuantity = quantity++;

    sequelize.query(`
    INSERT INTO shopping_cart (fk_vinyl_id, quantity)
    VALUES (${id}, ${cartQuantity});
    `)
    .then((dbResult) => {
        return res.status(200).send(dbResult[0])
    })
    .catch((err) => console.log(err));
},

getCart: (req, res) => {
    sequelize.query(`
    SELECT vinyl_id, album_name, artist_name, price FROM vinyl_records vr 
    JOIN shopping_cart sc on vr.vinyl_id = sc.fk_vinyl_id;
                        `)
   .then((dbResult) => {
       console.log(dbResult[0])
       res.status(200).send(dbResult[0])
   })
   .catch((err) => console.log(err));
}
 
 
};
