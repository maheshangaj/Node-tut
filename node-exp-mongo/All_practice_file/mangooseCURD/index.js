const mongoose= require('mongoose')


     mongoose.connect("mongodb://127.0.0.1:27017/E-comm")
    const productsSchema= new mongoose.Schema({
        name:"string",
        age:Number,
        gender: "string",
        address:"string"
    })
    const inserted =async ()=>{
    const product= mongoose.model('products',productsSchema)
    let data=new product({name:"rani",age:22,gender:"female",address:"poiser"})
    let result=await data.save()
    console.log(result) 
}
//inserted()

const updates= async()=>{
    const product=mongoose.model('products',productsSchema);
    let data=await product.updateOne({name:"manoj"},{$set:{name:"shrinivas",age:16,gender:"male"}})
    console.log(data)
}
//updates()

const deleted= async()=>{
    const product=mongoose.model('products',productsSchema)
    let data=await product.deleteOne({name:"shrinivas"})
    console.log(data)
}
//deleted()

const finded= async()=>{
    const product=mongoose.model('products',productsSchema)
    let data=await product.find()
    console.log(data)
}
finded()