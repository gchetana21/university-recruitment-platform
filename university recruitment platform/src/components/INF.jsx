import React , { useEffect ,useState} from 'react';
import CompanyCard from './CompanyCard';
import Navbar from "./Navbar";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {img} from './image.js';
import axios from 'axios';
const infStyle = {
    backgroundImage : "linear-gradient(to right bottom, #6b7ed1, #6f86d6, #738eda, #7896de, #7e9ee2, #7a9ce6, #779beb, #7399ef, #688df4, #6081f8, #5d73fa, #5f64fb)",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
}

function INF(props) {

  const [infs,setInfs]=useState([]);

  useEffect(()=>{
      axios.get("http://localhost:4000/allinf",{withCredentials:"true"}).then(res=>{
      console.log(res.data)   
      setInfs(res.data);
      })

  },[]);


  return (
    <>
    <Navbar />
    <div style={infStyle}>
        <h1>{props.name}</h1>

        {
           infs.map((form,ind)=>(
            <CompanyCard key={ind} form={form} name={form.companyname} />
           ))
          
       }


        
        
    </div>
    </>
  )
}

export default INF;