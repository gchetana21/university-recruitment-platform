import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/CompanyCard.css";
import PreviewIcon from '@mui/icons-material/Preview';
import IconButton from '@mui/material/IconButton';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {img} from './image.js';
import { useParams } from 'react-router';

function CompanyCard(props) {
   
    
    var hrForms = props.form;
    function saveAsPDF() {
        const doc = new jsPDF();
      
        //college Logo Header
        
        doc.addImage(img, 'JPEG', 0, 0, 225, 37);
      
        doc.autoTable({
          //Header
          didDrawPage: function (data) {
            doc.setFontSize(20);
            doc.setTextColor(40);
            doc.text("Intern Notification", data.settings.margin.left, 50);
          },
          head: [['Company Overview' , '']],
          body: [
            ['Company Name', `${hrForms.companyname}`],
            ['Website', `${hrForms.website}`],
            ['Company Sector', `${hrForms.industrySector}`],
          ],
          startY: 60,
        })
      
      
        doc.autoTable({
          head: [['Job Details', ' ']],
          body: [
            ['Designation', `${hrForms.designation}`],
            ['Place of Posting', `${hrForms.placeofPosting}`, 'Spain'],
            ['Job Description', `${hrForms.jobDescription}`],
          ],
          startY: doc.lastAutoTable.finalY + 10,
        })
    
        doc.autoTable({
          head: [['Salary Details', ' ']],
          body: [
            ['CTC (in LPA)', `${hrForms.ctc}`],
            ['CTC Breakup', `${hrForms.ctcBreakup}`, 'Spain'],
            ['Bond Details (if any)', `${hrForms.bondDetails}`],
          ],
          startY: doc.lastAutoTable.finalY + 10,
        })
    
        doc.autoTable({
            head: [['Other Details', ' ']],
            body : [
              ['Resume Shortlisting', `${hrForms.resumeShortlisting}`],
              ['Type of Test', `${hrForms.typeofTest}`],
              ['Total Number of Rounds' , `${hrForms.totalNumberofRounds}`],
              ['Tota number of Offers', `${hrForms.totalNumberofOffers}`],
              
            ]
          })

        doc.save('info.pdf');
      }
      
    return (
        <>
            
                <div className='cards'>
                    <h2>{props.name}</h2>
                    <div className="buttns">
                    <IconButton onClick={()=>{saveAsPDF()}}>
                       <SimCardDownloadIcon/>
                    </IconButton>
                    <Link to={`/infs/${props.form._id}`}>
                    <IconButton><PreviewIcon/></IconButton> </Link>
                    </div>
                    
                </div>
           
        </>
    )
}

export default CompanyCard;