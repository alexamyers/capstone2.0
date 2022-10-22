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
   sequelize.query(`
   SELECT vinyl_id, album_name, artist_name, price, image FROM vinyl_records;
   `)
   .then((dbResult) => {
       console.log(dbResult[0])
       return res.status(200).send(dbResult[0])
   })
   .catch((err) => console.log(err));
}, 

addToCart: (req, res) => {
    const { id } = req.body;
    let cartQuantity = 1;

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
    SELECT vr.vinyl_id, vr.album_name, vr.artist_name, vr.price, vr.image, sc.quantity 
    FROM vinyl_records vr 
    INNER JOIN shopping_cart sc ON vr.vinyl_id = sc.fk_vinyl_id
    ORDER BY vr.artist_name ASC;
                        `)
   .then((dbResult) => {
       return res.status(200).send(dbResult[0])
   })
   .catch((err) => console.log(err));
}, 

deleteFromCart: (req, res) => {
    const { id } = req.params

    sequelize.query(`
    DELETE FROM shopping_cart 
    WHERE fk_vinyl_id = ${ id };
    `)
    .then((dbResult) => {
        console.log(dbResult[0])
        return res.status(200).send(this.getCart)
    })
    .catch((err) => console.log(err));
},
 
increaseQuantity: (req, res) => {
    let { id, quantity } = req.params;
    sequelize.query(`
    UPDATE shopping_cart
    SET quantity = quantity + 1
    WHERE fk_vinyl_id = ${id} RETURNING *;
    `)
    .then((dbResult) => {
        console.log(dbResult[0])
        return res.status(200).send(dbResult[0])
    })
    .catch((err) => console.log(err));
},

decreaseQuantity: (req, res) => {
    let { id, quantity } = req.params;
    sequelize.query(`
    UPDATE shopping_cart
    SET quantity = quantity - 1
    WHERE fk_vinyl_id = ${id} RETURNING *;
    `)
    .then((dbResult) => {
        console.log(dbResult[0])
        return res.status(200).send(dbResult[0])
    })
    .catch((err) => console.log(err));
}
 
};
