import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import "../style/adminDashboard.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {

   


  return (
    <div className='adminDasboard'>
        <Navbar />
        <div className='notificationCards'>
            <Link to="/infs" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='loginbox cardAlign'>
                    <h2 className='cardHeading'>INFs</h2>
                </div>
            </Link>
            <Link to="/jnfs" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='loginbox cardAlign'>
                    <h2 className='cardHeading'>JNFs</h2>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default AdminDashboard