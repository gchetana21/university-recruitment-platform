import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js';
import HrContent from './HrContent.js';
import '../style/Home.css';
import axios from 'axios';



function Home() {

  const [user,setUser]=useState({username:"", 
  userId:""});

useEffect(()=>{
  axios.get("http://localhost:4000/getuser",{withCredentials:"true"}).then(res=>{
    console.log(res);
    setUser({
      username:res.data.username,
      userId:res.data._id
    })
    
    


    

  })

},[])

console.log(user);
  return (
      <>
      <div className='home'>
           <Navbar/>
           <div className='mainhome' >
             <h1>{user.username}</h1>
             <HrContent/></div>
      </div>
    </>
  )
}

export default Home




// import React from 'react'
// import Navbar from './Navbar.js';
// import HrContent from './HrContent.js';
// import '../style/Home.css';

// function Home() {
//   return (
//       <>
//       <div className='home'>
//            <Navbar/>
//            <div className='mainhome' ><HrContent/></div>
//       </div>
//     </>
//   )
// }

// export default Home