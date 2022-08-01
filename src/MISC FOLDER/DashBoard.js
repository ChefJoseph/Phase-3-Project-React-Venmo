import React from 'react';
import Feed from '../components/Feed.js';
import DashHeader from './DashHeader'
import Profile from './Profile'
import '../styles/dashboard.css';
import { useSelector } from 'react-redux'


function DashBoard() {
    const balance = user.balance
    const name = useSelector((state) => state.user.name)
    const profile_pic = useSelector((state) => state.user.profile_pic)
    const handle = useSelector((state) => state.user.handle)
    

    return (
        <>
            <DashHeader/>
            <div className="dashboard_container">
                <Feed />
                <Profile
                name={name}
                balance={balance}
                picture={profile_pic}
                handle={handle}
                />
            </div>
        </>
    );
}
export default DashBoard;
