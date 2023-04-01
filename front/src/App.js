import Nav from "./Component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import "./App.css"
import SignUp from "./Component/SignUp";
import PrivateComponent from "./Component/PrivateComponent";
import Login from "./Component/Login";
import AddProduct from "./Component/AddProduct";
import Productlist from './Component/Productlist'
import Updateproduct from "./Component/Updateproduct";
function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Nav/>
    <Routes>
    <Route element={<PrivateComponent/>}>
    <Route path="/" element={<Productlist/>}/>
    <Route path="/add" element={<AddProduct/>}/>
    <Route path="/update/:id" element={<Updateproduct/>}/>
    <Route path="/logout" element={<h1>Product listing component3</h1>}/>
    <Route path="/profile" element={<h1>Product listing component4</h1>}/>
    </Route>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>

    </Routes>
      
     
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
