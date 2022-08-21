import React, { useEffect ,useState} from 'react'
import '../style/HrContent.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import axios from 'axios';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import IconButton from '@mui/material/IconButton';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {img} from './image.js';



function HrContent() {
  const [hrForms,setHrForms]=useState([]);
  const[hold,setHold]=useState(false);

  useEffect(()=>{
    axios.get("http://localhost:4000/inf",{withCredentials:"true"}).then(res=>{
      console.log(res.data);
      setHrForms(res.data);
    
  }).then(()=>{
    setHold(true);
  })
  },[]);



  function saveAsPDF(ind){
    console.log(ind);
    const doc = new jsPDF();
  
    //college Logo Header

    
    doc.addImage(img, 'JPEG', 0, 0, 225, 37);
    //console.log("hrForms[ind].companyname");
  
    doc.autoTable({
      
      //Header
      didDrawPage: function (data) {
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.text("Intern Notification", data.settings.margin.left, 50);
      },
      head: [['Company Overview' , '']],
      body: [
        ['Company Name', `${hrForms[ind].companyname}`],
        ['Website', `${hrForms[ind].website}`],
        ['Company Sector', `${hrForms[ind].industrySector}`],
      ],
      startY: 60,
    })
  
  
    doc.autoTable({
      head: [['Job Details', ' ']],
      body: [
        ['Designation', `${hrForms[ind].designation}`],
        ['Place of Posting', `${hrForms[ind].placeofPosting}`, 'Spain'],
        ['Job Description', `${hrForms[ind].jobDescription}`],
      ],
      startY: doc.lastAutoTable.finalY + 10,
    })

    doc.autoTable({
      head: [['Salary Details', ' ']],
      body: [
        ['CTC (in LPA)', `${hrForms[ind].ctc}`],
        ['CTC Breakup', `${hrForms[ind].ctcBreakup}`, 'Spain'],
        ['Bond Details (if any)', `${hrForms[ind].bondDetails}`],
      ],
      startY: doc.lastAutoTable.finalY + 10,
    })

    doc.autoTable({
      head: [['Other Details', ' ']],
      body : [
        ['Resume Shortlisting', `${hrForms[ind].resumeShortlisting}`],
        ['Type of Test', `${hrForms[ind].typeofTest}`],
        ['Total Number of Rounds' , `${hrForms[ind].totalNumberofRounds}`],
        ['Tota number of Offers', `${hrForms[ind].totalNumberofOffers}`],
        
      ]
    })
    doc.save('info.pdf');
  
  }





  return (

   <div className='HrContent'> 
        <div className='mainhome'>
        <Link to="/create/inf">
            <div type='submit' href='/h' className='card cardStyle'>
              <p   className='cardh'>Create Internship notification</p>
            </div>
            </Link>
        <Link to="/create/jnf">
            <div type='submit' href='/h' className='card cardStyle'>
              <p   className='cardh'>Create jobs notification</p>
            </div>
            </Link>
            
        </div>
        <div className='homeinfo'>
        <div className='table cardStyle'>
          <p className='tbhd'>Previously filled forms</p><hr className='hline'/>
         
         {
           
            hold && hrForms.map((form,ind) => ( <div className='listl'><h1>{form.companyname}</h1>
               <IconButton onClick={() => saveAsPDF(ind)}><SimCardDownloadIcon/></IconButton>
              </div>
              
              ))
        }

        </div>
        </div>
        </div> 
  )
}

export default HrContent;