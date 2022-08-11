import { faChartSimple, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                        <Link to=""> <FontAwesomeIcon className="icon" icon={faHome} /> Home</Link>
                    </li>
                    <li>
                        <Link to=""> <FontAwesomeIcon className="icon" icon={faUserGroup} /> Account</Link>
                    </li>
                    <li>
                        <Link to="newaccount">New Account</Link>
                    </li>
                    <li>
                        <Link to="">Status</Link>
                    </li>
                    <li>
                        <Link to=""> <FontAwesomeIcon className="icon" icon={faChartSimple} /> Report</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default SideBar;