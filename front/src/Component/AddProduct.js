import React, { useState } from 'react'

const AddProduct = () => {

const [name,setname]= useState()
const [price,setprice]= useState()
const [category,setcategory]= useState()
const [company,setcompany]= useState()
const [Error,setError]= useState()
const addproduct= async()=>{
    
console.log(!name)
if(!name||!price||!category||!company){
  setError(true)
  return false;
}
  
console.log(name,price,category,category)

const userId=JSON.parse(localStorage.getItem("user"))._id 
//console.log(userId._id)
let result= await fetch("http://localhost:5100/add-product",{
    method:"post",
    body:JSON.stringify({name,price,category,company,userId}),
    headers: {
        "Content-Type": "application/json",
        
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          
        
      }, 
})
result=await result.json()
console.log(result)

}

  return (
    
    <div className='product'>
    <h2>product add</h2>
      <input className="inputBox" type="text" placeholder="Enter product name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
      { Error && !name &&<span className='invalid-input'>Plz Enter valid name </span>}
      <input className="inputBox" type="number" placeholder="Enter price"  value={price} onChange={(e)=>{setprice(e.target.value)}}/>
      {Error && !price && <span className='invalid-input'>Plz Enter valid price </span>}
      <input className="inputBox" type="text" placeholder="Enter product category"  value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
      {Error && !category &&<span className='invalid-input'>Plz Enter valid category </span>}
      <input className="inputBox" type="text" placeholder="Enter product company"  value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
     { Error && !company &&<span className='invalid-input'>Plz Enter valid company </span>}
      <button onClick={addproduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct
