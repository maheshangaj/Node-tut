import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Nav = () => {
  const navigate=useNavigate()
  const auth = localStorage.getItem("user");

const logout=()=>{
  localStorage.clear()
  navigate('/signup')
}

  return (
    <div>
    <img alt="logo"
    className="logo"
      src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"/>
    {auth ?
      <ul className="nav-ul ">
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        
     <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li><Link onClick={logout} to="/signup">Logout
       ({JSON.parse(auth).name}) 
        </Link></li>
      </ul>

       /*  use for only after signup show logout page  */

        /*<li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">Sign Up</Link>}
      </li>
      <li>
          <Link to="/login">Login</Link>
  </li>*/


  /* comment use for only signup or logout page and below side after login signup and login button hide */

 /* { auth ?<li><Link onClick={logout} to="/signup">Logout</Link></li>:<>
   <li><Link to="/signup">Sign Up</Link></li>  
  <li><Link to="/login">Login</Link></li>
  </>
  }*/
:<ul className="nav-ul nav-right"> <li><Link to="/signup">Sign Up</Link></li>  
<li><Link to="/login">Login</Link></li>


      </ul>}
    </div>
  );
};

export default Nav;
