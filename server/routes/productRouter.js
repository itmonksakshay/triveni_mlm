const express = require('express');
const route = express.Router();
route.get("/",function(req,res){
 console.log("Hello Product Router");
});
export default route;
