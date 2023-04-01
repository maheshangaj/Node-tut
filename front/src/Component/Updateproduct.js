import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"
const Updateproduct = () => {

const [name,setname]= useState()
const [price,setprice]= useState()
const [category,setcategory]= useState()
const [company,setcompany]= useState()

const param=useParams()
const naviget=useNavigate()
useEffect(()=>{
   // console.log(param)
    getproductdetail()
},[])

//get update data 
const getproductdetail=async()=>{
    //console.log(param)
    let result=await fetch(`http://localhost:5100/product/${param.id }`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result= await result.json()
    //console.log(result)
    setname(result.name)
    setprice(result.price)
    setcategory(result.category)
    setcompany(result.company)
}


const updateproduct= async()=>{
    console.log(name,price,category,company)
    let result= await fetch(`http://localhost:5100/product/${param.id}`,{
       method:"put",
       
       body:JSON.stringify({name,price,category,company}),
       headers:{'Content-type':"application/json"}
       ,
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        
      

    })
    result=await result.json()
    console.log(result)
    naviget('/')
}


    


  return (
    
    <div className='product'>
    <h2>Update product</h2>
      <input className="inputBox" type="text" placeholder="Enter product name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
      
      <input className="inputBox" type="number" placeholder="Enter price"  value={price} onChange={(e)=>{setprice(e.target.value)}}/>
      
      <input className="inputBox" type="text" placeholder="Enter product category"  value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
      
      <input className="inputBox" type="text" placeholder="Enter product company"  value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
    
      <button onClick={updateproduct} className='appButton'>Update Product</button>
    </div>
  )
}

export default Updateproduct
