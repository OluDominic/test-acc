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
                                            <div>Individual Account</div>
                                            <div>For a single user</div>
                                        </div>
                                        <div>Pic</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h4>Kindly provide the customers BVN below to proceed with the account opening</h4>
                    <h4>Enter Customer’s BVN</h4>
                    <div className="formInput"><input /></div>
                    <div className="but"><button>Submit</button></div>
                </div>
            </div>
        </div>
    );
}

export default Home;