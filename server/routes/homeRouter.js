const express = require("express");
const template = require("../data/template.json");
const mainMenu = require("../data/menu.json");
const route = express.Router();
route.get("/",function(req,res){
  res.json(template);
});
route.get("/head",function(req,res){
  res.json(mainMenu);
});
export default route;
