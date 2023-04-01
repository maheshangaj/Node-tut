const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    name:'string',
    age:Number,
    gender:'string',
    address:'string'
})
module.exports=mongoose.model('products',productSchema)