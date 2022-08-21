import React,{useState , useEffect} from 'react'
import Navbar from './Navbar.js';
import '../style/CreateForm.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Input from '@mui/material/Input';
import CreatableSelect from 'react-select/creatable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { CompressOutlined } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
function CreateForm(props) {


  const options = [
    { value: 'Analytics', label: 'Analytics' },
    { value: 'Consulting', label: 'Consulting' },
    { value: 'Core(Technical)', label: 'Core(Technical)' },
    { value: 'BFSI', label: 'BFSI' },
    { value: 'Ed Tech', label: 'Ed Tech' },
    { value: 'IT/ Software', label: 'IT/ Software' },
    { value: 'E-commerce', label: 'E-commerce' }
  ]

  const qroptions = [
    { value: 'GD', label: 'GD' },
    { value: 'case study', label: 'case study' },
    { value: 'Interview', label: 'Interview' },
    
  ]
  
  const [cstep , setcstep] = useState(1);
  
  const [infformdata , setinfformdata] = useState({
        companyname:"",
        industrySector:"",
        website:"",
        emailid:"",
        pocname:"",
        designation:"",
        mobileno:"",
        jpDesignation:"",
        jobDescription:"",
        placeofPosting:"",
        btech:false,
        selectedBtech:[],
        dualDegree:false,
        selectedDualDegree:[],
        skills:[],
        msc3:false,
        selectedMsc3:[],
        mtech:false,
        selectedMtech:[],
        mba:false,
        selectedMba:[],
        msc2:false,
        selectedMsc2:[],
        phd:false,
        selectedPhd:[],
        eligibiliTyCriteria:0.0,
        resumeShortlisting:false,
        typeoftest:[],
        otherQrounds:[],
        ttlrounds:0,
        ttloffers:0,
        ctc:0,
        ctcBreakup:"",
        bondDetails:""
  })
  const[redirect,setRedirect]=useState(false);
function handlechange(e){
      const value = e.target.value;
      const name = e.target.name;
      setinfformdata((prev)=>{
        return { ...prev , [name] : value}
      })
}const animatedComponents = makeAnimated();

function formsubmit(e){
  
  e.preventDefault();
  console.log("jiji");
  axios.post("http://localhost:4000/inf/add",infformdata,{withCredentials:"true"}).then(res=>{
    console.log(res.data);
  }).then(()=>{
    setRedirect(true);
  })

}


  return (
      <>
      <div className='create'>
      <div className='chead'>
      <IconButton>
      <CancelIcon/>
      </IconButton>
      <h1>Create [inf/jnf]</h1>
      </div>
      <div className='cbody '> 
      <form onSubmit={formsubmit}>
                <div   className={`step1 ${cstep!=1 && 'hide'}`} >
                    <div className='cleft loginbox'>
                      <div className='aform'>
                      <TextField onChange={handlechange} value={infformdata.companyname} name="companyname" className='tf' required id="outlined-required" label="company name" />
                      <CreatableSelect className='tff' placeholder='Industry Sector' isClearable c options={options}/>

                      <TextField onChange={handlechange} value={infformdata.website} name="website" className='tf' required id="outlined-required" label="Website" />
                      <TextField onChange={handlechange} value={infformdata.emailid} name="emailid" className='tf' required id="outlined-required" label="email id" />
                      <TextField onChange={handlechange} value={infformdata.pocname} name="pocname" className='tf' className='tf' required id="outlined-required" label="Name of POC" />
                      <TextField onChange={handlechange} value={infformdata.designation} name="designation" className='tf' required id="outlined-required" label="designation" />
                      <TextField onChange={handlechange} value={infformdata.mobileno} name="mobileno" className='tf' required id="outlined-required" label="mobile no" />
                      
                     
                      </div>
                      <div className='leftbtn tf'>      
                        <Button onClick={()=>{setcstep(2)}} className='' variant="contained">Next</Button>
                      </div>
                  </div>
                  <div className='formdesc'>
                        <h1>1. <br/>HR and <br/><p className='smalll'> Company Details.</p></h1>

                  </div>
                </div>
                <div className={`step2 ${cstep!=2 && 'hide'}`}>
                    <div className='cleft loginbox'>
                      <div className='aform'>
                      
                      
                      <TextField onChange={handlechange} value={infformdata.jpDesignation} name="jpDesignation" className='tf' required id="outlined-required" label="job profile designation" />
                      <TextField onChange={handlechange} value={infformdata.jobDescription} name="jobDescription" className='tf' required id="outlined-required" label="jobDescription" />
                      <TextField onChange={handlechange} value={infformdata.placeofPosting} name="placeofPosting" className='tf' required id="outlined-required" label="placeofPosting" />
                      <TextField onChange={handlechange} value={infformdata.ctc} name="ctc" className='tf' required id="outlined-required" label="ctc details" />
                      <TextField onChange={handlechange} value={infformdata.bondDetails} name="bondDetails" className='tf' required id="outlined-required" label="Bond Details (if any)" />
                      <FormControl fullWidth>
                        <InputLabel className='tf' >resumeShortlisting</InputLabel>
                          
                          <Select className='tf' onChange={handlechange} value={infformdata.resumeShortlisting} name="resumeShortlisting" label="resumeShortlisting" >
                              <MenuItem value={1} >true</MenuItem><MenuItem value={0}>false</MenuItem>
                          </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel className='tf' >Type of Test</InputLabel>
                          
                          <Select className='tf' onChange={handlechange} value={infformdata.typeoftest} name="typeoftest" label="typeoftest" >
                              <MenuItem value={"Technical"} >Technical</MenuItem>
                              <MenuItem value={"Aptitude"}>Aptitude</MenuItem>
                              <MenuItem value={"Both"}>Both</MenuItem>
                              <MenuItem value={"None"}>none</MenuItem>
                          </Select>
                      </FormControl>
                      <TextField onChange={handlechange} value={infformdata.ttlrounds} name="ttlrounds" className='tf' required id="outlined-required" label="Total Number of Rounds" />
                      <TextField onChange={handlechange} value={infformdata.ttloffers} name="ttloffers" className='tf' required id="outlined-required" label="Total Number of Offers (range)" />
                      
                      <CreatableSelect
                      className='tf'
                       isMulti
                       options={qroptions}
                       placeholder="other qualification rounds"
                      />
                      

                      </div>
                      <div className='leftbtn tf'>      
                        <Button type='submit'  variant="contained">Next</Button>
                      </div>
                  </div>
                  <div className='formdesc'>
                        <h1>2. <br/>Job offer <br/><p className='smalll'> Details.</p></h1>

                  </div>
                </div>
                <div className={`step3 ${cstep!=3 && 'hide'}`}>
                    <div className='cleft loginbox'>
                      <div className='aform'>
                      
                      <Input className='tf' placeholder="Designation"/>
                      <CreatableSelect className='tf' placeholder='Industry Sector' isClearable c options={options}/>
                      <Input className='tf' placeholder="Website"/>
                      <Input className='tf' placeholder="email id"/>
                      <Input className='tf' placeholder="company name"/>
                      <Input className='tf' placeholder="Name of POC"/>
                      <Input className='tf' placeholder="designation"/>
                      <Input className='tf' placeholder="mobile no"/>
                      </div>
                      <div className='leftbtn tf'>      
                        <Button onClick={()=>{console.log("submitred")}} variant="contained">Next</Button>
                      </div>
                  </div>
                  <div className='formdesc'>
                        <h1>3. <br/>HR and <br/><p className='smalll'> Company Details.</p></h1>

                  </div>
                </div>
      </form>
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
      </>
    
  )
}

export default CreateForm