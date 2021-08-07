const express =require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors')
dotenv.config();
//connect to mongodb
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser:true},()=>console.log("connected to Mongo Db")
)
//import routes
const productRoutes=require("./routes/Product");
app.use(cors());
//middleware
app.use(express.json());
app.use("/api/products",productRoutes);
//middleware
app.use(express.json())  
app.listen(4000,()=>console.log("server is running on port number 4000"));


