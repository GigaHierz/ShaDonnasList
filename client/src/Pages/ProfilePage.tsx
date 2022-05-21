import React from 'react';
import { useState, useEffect} from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import logo from './logo.svg';

import ProfileCard from '../components/ProfileCard';
import ReviewCard from '../components/ReviewCard';

import '../styles/profilepage.css'



function ProfilePage() {

const [viewType, setViewType] = useState("view");
const profileProps = { // make sure all required component's inputs/Props keys&types match
    companyName: "Company A",
    description:" Udemy, Inc. is a for-profit massive open online course provider aimed at professional adults and students. It was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar."
}
  return (
    
    <div className='profile-page-container' >
        <div className="profile-page-panel profile-card-container">
        <ProfileCard {...profileProps}></ProfileCard>

        </div>

        <div className="profile-page-panel profile-comments-container">
            <div className="section-nav-bar">

                <ul>
                    <li className="page-tab" onClick={()=>setViewType("view")}>view comments</li>
                    <li className="page-tab" onClick={()=>setViewType("submit")}>send comments</li>
                </ul>
           
            </div>
            <div>
                {viewType == "view"?"":""}
                <ReviewCard></ReviewCard>

            </div>

        </div>
    </div>
  );
}

export default ProfilePage;