import { faArrowDown, faBars, faBell, faCircleQuestion, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Avatar from './../../assets/avatar.png'
import './index.scss'


const Header =()=> {
    return(
    <div className="header">
        <header>
            <div className="icons"><FontAwesomeIcon icon={faBars} /> </div>
            <div className="left-icons">
                <div className="quest"> <FontAwesomeIcon icon={faCircleQuestion} /> </div>
                <div className="bell"> <FontAwesomeIcon icon={faBell} /> </div>
                <div className="pic"><img src={Avatar} alt="avatar" /></div>
                <div className="customer-name">
                    <div>David Tomiwa</div>
                    <div>CSO</div>
                </div>
                <div className="arroe"> <FontAwesomeIcon icon={faArrowDown} /> </div>
            </div>
        </header>
    </div>
    );
}

export default Header;