require('dotenv').config();
const db_url=process.env.DB_URL || 'mongodb://127.0.0.1:27017/mynewsproject';
module.exports ={db_url}