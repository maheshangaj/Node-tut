import React, { useEffect ,useState} from 'react'
import{useNavigate}from "react-router-dom"

const Login = () => {
const [email,setemail]=useState('')
const [password,setpassword]=useState('')

const navigate=useNavigate()

useEffect(()=>{
 const auth=localStorage.getItem('user')
 if(auth){
  navigate('/')
 }
},[navigate])


const handlelogin=async()=>{
    console.log(email,password)

    //after login check data back end side and go to direct 
    let result=await fetch("http://localhost:5100/login",{
method:"post",
body:JSON.stringify({email,password}),
headers:{ "Content-Type": "application/json",}

})
result=await result.json()
console.log(result)
if(result.auth){
  localStorage.setItem("user",JSON.stringify(result.user)) 
  localStorage.setItem("token",JSON.stringify(result.auth))// use for jwt token login
  navigate('/')
}else{
  alert("plz enter write email & password")
}
    }
     

  return (
    <div className='login'>
      <input className="inputBox" type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
      <input className="inputBox" type="text" placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      
      <button className="appButton" onClick={handlelogin}  type="Button">  Login </button>
    </div>
  )
}

export default Login
