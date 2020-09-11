const express = require("express");
const route = express.Router();
import Collection from '../models/collection';
import Product from '../models/product';
route.get("/:url",async (req,res) =>{ 
  const url = req.params.url;
  const collection = await Collection.findOne({url:url});
  var items,response;
  (collection)?(
      items = await Product.find({"_id":{$in:collection.products}},'name price image_name url'),
    (items)?(response = [{"name":collection.name,"products":items}],
  res.json(response)):(response=[{"name":collection.name,"products":[]}])):(res.status(404).json([]));
});
export default route;
