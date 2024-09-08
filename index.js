require('dotenv').config()
const app =require('./app');
const connectDB =require('./config/db.js');
const port = process.env.SERVER_PORT || 5000;
app.listen(port, async()=>{
  console.log(`This is Server running http://localhost:${port}`);
await connectDB();
});