require('dotenv').config();
const mysql = require('mysql2')
const urlDB = `mysql://root:26L5wOo5efVizm4dMNuF@containers-us-west-181.railway.app:7221/railway`

const db = mysql.createPool(
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  
)

module.exports=db;


// https://api.render.com/deploy/srv-cileek5gkuvinfkcu4tg?key=yID3lrQDumk
