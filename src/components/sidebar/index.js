import React from 'react'
import { Link } from 'react-router-dom'
import BankCard from './../../assets/home/Providus_Bank_logo_1-removebg-preview 1.png'
import './index.scss'


const SideBar =()=> {
    return (
    <div className="sidebar">
        <div className="sidebar-sub">
            <div className="bank-name">
                <div className="logo"><img src={BankCard} alt="img" /></div>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Account</Link>
                    </li>
                    <li>
                        <Link to="newaccount">New Account</Link>
                    </li>
                    <li>
                        <Link to="/">Status</Link>
                    </li>
                    <li>
                        <Link to="/">Report</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default SideBar;