import HomeRouter from './routes/homeRouter';
import CollectionRouter from './routes/collectionRouter';
import ProductRouter from './routes/productRouter';
import Collection from './models/collection';
import Product from './models/product';
const express = require("express");
const cors =require("cors");
const path = require("path");
const mongo = require("mongoose");

mongo.connect('mongodb://localhost/triveni_mlm',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },(err) =>((err)?(console.log(err)):
  (console.log('Database Successfully connected')))
 );

/*\const collection = new Collection({
  _id:mongo.Schema.Types.ObjectId,
  name:"Gaming Computers",
  url:"gaming-computers"
});
collection.save((err)=> {if(err) throw err;console.log("Successfully saved")});
*/
const app = express();
app.use(express.static("./dist"));
app.use("/images",express.static(path.join(__dirname,"/../images")));
app.use("/api/home",HomeRouter);
app.use("/api/collections",CollectionRouter);
app.use("/api/products",ProductRouter);
app.get('*', function(request,response) {
	response.sendFile(path.join(__dirname,"/../dist/index.html"));
});
app.listen(4000,function(){
	console.log("the server is running on port 4000");
});
