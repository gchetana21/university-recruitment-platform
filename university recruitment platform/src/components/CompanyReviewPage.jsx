import React, { useState ,useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../style/CompanyReviewPage.css';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import {img} from "./image.js";
import axios from "axios";


function CompanyReviewPage(props) {
  const { infid} = useParams();
  var inf=[];
  const [inff , setinff] = useState({});
 
   useEffect(()=>{
     axios.get(`http://localhost:4000/inf/${infid}`,{withCredentials:"true"}).then(res=>{
     console.log(res.data)    
     inf=res.data;
     setinff(inf[0]);
     }).then(()=>{
       //console.log(inff.companyname);
     })
   },[])

   //save as pdf
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
        ['Company Name', `${inff.companyname}`],
        ['Website', `${inff.website}`],
        ['Company Sector', `${inff.industrySector}`],
      ],
      startY: 60,
    })
  
  
    doc.autoTable({
      head: [['Job Details', ' ']],
      body: [
        ['Designation', `${inff.designation}`],
        ['Place of Posting', `${inff.placeofPosting}`, 'Spain'],
        ['Job Description', `${inff.jobDescription}`],
      ],
      startY: doc.lastAutoTable.finalY + 10,
    })

    doc.autoTable({
      head: [['Salary Details', ' ']],
      body: [
        ['CTC (in LPA)', `${inff.ctc}`],
        ['CTC Breakup', `${inff.ctcBreakup}`, 'Spain'],
        ['Bond Details (if any)', `${inff.bondDetails}`],
      ],
      startY: doc.lastAutoTable.finalY + 10,
    })

    doc.autoTable({
      head: [['Other Details', ' ']],
      body : [
        ['Resume Shortlisting', `${inff.resumeShortlisting}`],
        ['Type of Test', `${inff.typeofTest}`],
        ['Total Number of Rounds' , `${inff.totalNumberofRounds}`],
        ['Tota number of Offers', `${inff.totalNumberofOffers}`],
        
      ]
    })
    doc.save('info.pdf');
  
  }


  return (
    <div className='rp'>
      <div className="innercard">
        <h1 className='CompanyName'>Company Details Preview</h1>
        <div className='preview'>
          <div className='companyOverview'>
            <h2>Company Overview</h2>
            <div className='side'>
              <p>Company Name</p>
              <p>{inff.companyname}</p>
            </div>
            <div className='side'>
              <p>Website</p>
              <p>{inff.website}</p>
            </div>
            <div className='side'>
              <p>Company Sector</p>
              <p>{inf.industrySector}</p>
            </div>
          </div>

          <div className='jobDetails'>
            <h2>Job Details</h2>
            <div className='side'>
              <p>Designation</p>
              <p>{inff.designation}</p>
            </div>
            <div className='side'>
              <p>Place of Posting</p>
              <p>{inff.placeofPosting}</p>
            </div>
            <div className='side'>
              <p>Job Description</p>
              <p>{inff.jobDescription}</p>
            </div>
          </div>

          <div className='salaryDetails'>
            <h2>Salary Details</h2>
            <div className='side'>
              <p>CTC (in LPA)</p>
              <p>{inff.ctc}</p>
            </div>
            <div className='side'>
              <p>CTC Breakup</p>
              <p>{inff.ctcBreakup}</p>
            </div>
            <div className='side'>
              <p>Bond Details (if any)</p>
              <p>{inff.bondDetails}</p>
            </div>
          </div>


          <div className='otherDetails'>
            <h2>Other Details</h2>
            <div className='side'>
              <p>Resume Shortlisting</p>
              <p>{inff.resumeShortlisting}</p>
            </div>
            <div className='side'>
              <p>Type of Test</p>
              <p>{inff.typeofTest}</p>
            </div>
            <div className='side'>
              <p>Total Number of Rounds</p>
              <p>{inff.totalNumberofRounds}</p>
            </div>
            <div className='side'>
              <p>Tota number of Offers</p>
              <p>{inff.totalNumberofOffers}</p>
            </div>
          </div>
          <div className = "pdf-btn">
        <Button variant="outlined"  onClick={() => { saveAsPDF() }} >Download as PDF</Button>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default CompanyReviewPage;