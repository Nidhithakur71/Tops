import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';

export default function Header() {
    const navigate=useNavigate()
    const logoutfun=()=>{
     localStorage.removeItem("passdata")  
     navigate("/")
    }
      return (
        <div className='d-flex py-3 justify-content-around'>
         <div>
             <ul className='d-flex gap-5'>
                <li> <NavLink to={"/"}>Home</NavLink> </li>    
                <li> <NavLink to={"/superAdmin"}>SuperAdmin</NavLink> </li>    
                <li> <NavLink to={"/Admin"}>Admin</NavLink> </li>    
                <li> <NavLink to={"/Employee"}>Employee</NavLink> </li>    
                <li> <NavLink to={"/User"}>User</NavLink> </li>    
                <li> <NavLink to={"/Profile"}>Profile</NavLink> </li>    
                
            </ul>  
    
        </div>        
          <div className='d-flex  gap-5'>
            <Button  color="danger "onClick={logoutfun}>click here</Button>
          </div>
    
    
        </div>
      )
    }