const mongo = require('mongoose');
const category = mongo.Schema({
  _id:mongo.Schema.Types.ObjectId,
  name:{type:String,required:true}
});
const productSchema = mongo.Schema({
  _id:mongo.Schema.Types.ObjectId,
  name:{type:String,required:true},
  price:{type:Number,required:true},
  image_name:{type:String,required:true},
  url:{type:String,required:true},
  categories:[category],
  description:String
});
const productModel = mongo.model('Product',productSchema);
export default productModel;
