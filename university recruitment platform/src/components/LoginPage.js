import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../style/LoginPage.css';
import axios from "axios";
import { Navigate } from 'react-router-dom';

function LoginPage(props) {

   const[logindata,setLogindata]=useState({
     username:"",
     password:""
   })

   const[redirect,setredirect]=useState(false);

   function handleDescriptionChange(event){
    const value = event.target.value
    const name=event.target.name
    setLogindata((prev)=>{
        return {
            ...prev,
            [name]: value
        }
    })
   }
  
   function formSubmit(event){
    event.preventDefault();

    if(logindata.username.trim() !== "" && logindata.password.trim() !=="" ){
    
      
      axios.post('http://localhost:4000/users/login', logindata,{withCredentials:"true"}).then(res => {

        console.log(res);
        if(res.status==200){
            setredirect(true);
        }

       }).catch(err=>{
         console.log(err);
       })

    }else{
      
      


    }

    
  
    
  }



  return (
      <div className='login'>
          <div className='container'>
              <div className='left'>
                 <img className='logoo' src='./images/logo.png' alt='nono' />
                 <div className='textarea'>
                 <h1>Hire from</h1>
                 <h1 className='clgnm'>IIT ISM Dhanbad</h1>
                 </div>
              </div>
              <div className='right'>
                  <div className='loginbox'>
                    <div className='signintext'>
                    <h1>Sign in</h1>
                    </div>
                    <div className='formdiv'>
                      <form onSubmit={formSubmit} >
                      <div className='formform'>
                      <Input
                       className='textfield1' 
                       placeholder="email id"
                       onChange = {handleDescriptionChange}
                      value={logindata.username}
                      name="username"
                       />
                    <Input className='textfield1'
                     placeholder="password"
                      type='password'
                      onChange = {handleDescriptionChange}
                      value={logindata.password}
                      name="password"

                      />

                      </div>
                      <div className='formform'>
                        <p className='notsigned'>Not yet registered? <a href='/register'>register!</a></p>
                      <Button  type='submit' className='textfield2' variant="contained">Sign in</Button>
                    </div>
                    </form>
                    </div>
                   

                  </div>
              </div>
          </div>

          {redirect && <Navigate
              to={{
                pathname: "/home",
                state: {
                  from: props.location
                }
              }}
            />}
    </div>
  )
}

export default LoginPage




// import React from 'react'
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// import '../style/LoginPage.css';

// function LoginPage() {
//   return (
//       <div className='login'>
//           <div className='container'>
//               <div className='left'>
//                  <img className='logoo' src='./images/logo.png' alt='nono' />
//                  <div className='textarea'>
//                  <h1>Hire from</h1>
//                  <h1 className='clgnm'>IIT ISM Dhanbad</h1>
//                  </div>
//               </div>
//               <div className='right'>
//                   <div className='loginbox'>
//                     <div className='signintext'>
//                     <h1>Sign in</h1>
//                     </div>
//                     <div className='formdiv'>
//                       <form >
//                       <div className='formform'>
//                       <Input className='textfield1' placeholder="email id"/>
//                     <Input className='textfield1' placeholder="password" type='password'/>

//                       </div>
//                       <div className='formform'>
//                         <p className='notsigned'>Not yet registered? <a href='/register'>register!</a></p>
//                       <Button href='/home' type='submit' className='textfield2' variant="contained">Sign in</Button>
//                     </div>
//                     </form>
//                     </div>
                   

//                   </div>
//               </div>
//           </div>
//     </div>
//   )
// }

// export default LoginPage