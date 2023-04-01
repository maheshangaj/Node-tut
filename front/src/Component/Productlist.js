import React, { useEffect, useState } from 'react'
import {Link}from 'react-router-dom'
const Productlist = () => {
const[products,setproducts]= useState([])

useEffect(()=>{
    getproduct()
},[])
    
const getproduct=async()=>{
    let result= await fetch('http://localhost:5100/products',{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
        result=await result.json()
        setproducts(result)  
}
//console.log("products",products)

// delet product 
const deletproduct=async(id)=>{
  console.log(id)
  let result= await fetch(`http://localhost:5100/products/${id}`,{
    method:"delete",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    
  })
  result= await result.json()
  if(result){
    alert('recoded is deletd')
    getproduct()
  }
}

const searchproduct=async(e)=>{
let key=e.target.value;
if(key){
  let result= await fetch(`http://localhost:5100/search/${key}`,{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
  result= await result.json()
  if(result){
    setproducts(result)
  }else{
    getproduct()
  }
}

}

  return (
    <div className='product-list'>
    <h3>product List</h3>
    <input className='searchinput' type="text" placeholder='Search' onChange={searchproduct}/>
      <ul>
      <li>Sr.No</li>
      <li>Name</li>
      <li>Price</li>
      <li>Category</li>
      <li>Company</li>
      <li>Operation</li>
      </ul>
      
      {products.length>0?products.map((item,index)=>
        <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        <li><button onClick={()=>deletproduct(item._id)}>Delete</button>
        <Link to={"/update/"+item._id}> update</Link></li>
        
        </ul>
      )
    :<h1>No Result Found</h1>
    }
    </div>
  )
}

export default Productlist
