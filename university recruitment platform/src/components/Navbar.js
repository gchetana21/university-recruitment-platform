import React,{useState} from 'react'
import '../style/Navbar.css';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function Navbar(props) {

  const [redirect,setRedirect]=useState(false);

function logout(){
  axios.get("http://localhost:4000/users/logout",{withCredentials:"true"}).then(res=>{
    if(res.status==200){
      setRedirect(true);
    }
})}



  return (
    <div className='navbar'>
        <div className='navbox'>
            <h1>IIT ISM</h1>
            <img className='logoimg' src='./images/logo.png' />
            <IconButton onClick={()=>{logout()}}>
      <ExitToAppIcon  />
      </IconButton>
        </div>
      
        {redirect && <Navigate
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />}


    </div>
  )
}

export default Navbar