const dbconnect = require("./mongodb"); //comment single file run only
const store= require('./datainsert')
const Update=require('./update')
const delet= require('./delet')
const api= require('./Get_api')
//only use to one file run
// const {MongoClient}= require('mongodb');
// const url='mongodb://127.0.0.1:27017';
// const database='E-comm'
// const client= new MongoClient(url)

// async function dbconnect()
// {
//    let result= await client.connect()   
//    let db=result.db(database)
// return db.collection('products')
//}
//one method
// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

//second method

const main = async () => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
};
//main();
