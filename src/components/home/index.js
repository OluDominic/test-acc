import { faGift, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'



const Home =()=> {

    return (
        <div className="home">
            <div className="hom">
                <div className="home-sub">
                    <div className="new-acc">New Account</div>
                    <div className="line"></div>
                    <div className="home-link">
                        <ul>
                            <li>
                                <Link to="newaccount">
                                    <div className="individualAccount">
                                        <div className="individual">
                                            <div className="circle"></div>
                                            <div className="ind-acc">Individual Account</div>
                                            <div className="sing-user">For a single user</div>
                                        </div>
                                        <div className="faUser"><FontAwesomeIcon icon={faUser} /> </div>
                                    </div>
                                    <div className="cooperateAccount">
                                        <div className="cooperate">
                                            <div className="coop">Coperate Account</div>
                                            <div className="for-bus">For business</div>
                                        </div>
                                        <div className="faUser"><FontAwesomeIcon icon={faGift} /> </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="words">
                        <h4>Kindly provide the customers BVN below to proceed with the account opening</h4>
                        <h4>Enter Customer’s BVN</h4>
                        <div className="formInput"><input /></div>
                        <div className="but"><button>Submit</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;