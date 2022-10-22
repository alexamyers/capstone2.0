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
   seed: (req, res) => {
       sequelize.query(`
 
        drop table if exists users, shopping_cart, vinyl_records, shopping_cart_users CASCADE;

       create table users (
           user_id serial primary key,
           username varchar(100),
           password varchar(100),
           email varchar(200)
       );
 
       create table vinyl_records (
           vinyl_id serial primary key,
           album_name varchar(200) unique,
           artist_name varchar(200) unique,
           version varchar(200),
           genre varchar(200),
           description varchar(200),
           price varchar(100), 
           image varchar(500)  
       );

       create table shopping_cart (
        cart_id serial primary key,
        fk_vinyl_id integer,
        quantity integer,
        FOREIGN KEY (fk_vinyl_id) REFERENCES vinyl_records(vinyl_id)
    );
 
       create table shopping_cart_users (
           id serial primary key,
           user_id integer references users(user_id),
           cart_id integer references shopping_cart(cart_id)
       );
 
       insert into vinyl_records (vinyl_id, album_name, artist_name, version, genre, description, price, image)
       values (1, 'El Mal Querer', 'Rosalia', 'LP', 'Latin', 'Sophomore album by Rosalia', '$27.99', 'https://media.pitchfork.com/photos/5bd9dc13e909ce2d43d94246/1:1/w_600/Rosali%CC%81a_El%20Mal%20Querer.jpg'),
       (2, 'Carrion Crawler / The Dream', 'The Oh Sees', 'LP - Reissue - Magenta', 'Rock', 'Album from the Oh Sees', '$24.99', 'https://i.discogs.com/OQI7mAz3AqQKVOt3-LOD0etrdA_JGHZ-lfHN4Vqsn00/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMTcz/OTUtMTM3MTM4NzU2/NC0yNzkxLmpwZWc.jpeg'),
       (3, 'When Forever Comes Crashing', 'Converge', 'LP - Gold Clear', 'Metal', 'Converges first full length album', '$32.99', 'https://f4.bcbits.com/img/a2634510788_10.jpg'),
       (4, 'Houses of the Holy', 'Led Zeppelin', 'LP - Reissue - Gatefold', 'Rock', 'First released in 1973 by Led Zeppelin', '$19.99', 'https://townsquare.media/site/366/files/2019/06/led-zeppelin-facebook-ban.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89'),
       (5, 'Revolver', 'The Beatles', 'LP 180gm - Reissue', 'Rock', 'Album from the Beatles', '$25.99', 'https://townsquare.media/site/295/files/2022/08/attachment-Revolver.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89'),
       (6, 'Lets Stay Together', 'Al Green', 'LP - Reissue', 'Soul', 'Album from Al Green', '$19.99', 'https://i.scdn.co/image/ab67616d0000b273a1fc113a6858d0824d9aaf38'),
       (7, 'Yeti Season', 'El Michels Affair', 'LP - Blue Translucent', 'Soul', 'Newest album from El Michels Affair', '$21.99', 'https://f4.bcbits.com/img/0022878530_10.jpg'),
       (8, 'Good Kid, M.A.A.D City', 'Kendrick Lamar', 'LP - Gatefold', 'Rap', 'Standout album from Kendrick Lamar', '$29.99', 'https://thesoniccollective.com/wp-content/uploads/2019/03/goodkid.jpg');
 
       `)
   }
}
