const mongo = require("mongoose");
const collectionSchema = mongo.Schema({
  _id:mongo.Schema.Types.ObjectId,
  name:{type:String,required:true},
  url:{type:String,required:true},
  products:[mongo.Schema.Types.ObjectId]
});
const collectionModel = mongo.model('Collection',collectionSchema);
export default collectionModel;
