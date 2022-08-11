import { faChartSimple, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
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
                        <NavLink to="/"> <FontAwesomeIcon className="icon" icon={faHome} /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to=""> <FontAwesomeIcon className="icon" icon={faUserGroup} /> Account</NavLink>
                    </li>
                    <li>
                        <NavLink to="newaccount">New Account</NavLink>
                    </li>
                    <li>
                        <NavLink to="">Status</NavLink>
                    </li>
                    <li>
                        <NavLink to=""> <FontAwesomeIcon className="icon" icon={faChartSimple} /> Report</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default SideBar;