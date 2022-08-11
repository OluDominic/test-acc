import React from 'react'
import FormWrapper from './formWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import Passport from './../../assets/pASSPORT 1.png'
import Img1 from './../../assets/black-men-cafe-having-business_1157-32534-removebg-preview 1.png'

const AccountCard =({title})=> {

    return(
        <div className="accountCard">
            <input type="checkbox" />
            <h4>{title}</h4>
        </div>
    );
}

const Review =()=> {

    return (

        <div>
            <FormWrapper 
                details={
                    <div className="review">
                        <h3>BVN DETAILS</h3>
                        <div className="div">
                            <div className="div-sub1">
                                <div>
                                    <p>First Name</p>
                                    <h4>Tomiwa</h4>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <h4>tomiwaogunremi@gmail.com</h4>
                                </div>
                                <div>
                                    <p>Phone 1</p>
                                    <h4>081349458594</h4>
                                </div>
                                <div>
                                    <p>State</p>
                                    <h4>Lagos</h4>
                                </div>
                                <div>
                                    <p>LGA</p>
                                    <h4>Ikeja</h4>
                                </div>
                                <div>
                                    <p>Date of Birth</p>
                                    <h4>2015/20/08</h4>
                                </div>
                            </div>

                            <div className="div-sub2">
                                <div>
                                    <p>Last Name</p>
                                    <h4>Ogunremi</h4>
                                </div>
                                <div>
                                    <p>Mailing Address</p>
                                    <h4>tomiwaogunremi@gmail.com</h4>
                                </div>
                                <div>
                                    <p>Phone 2</p>
                                    <h4>081349458594</h4>
                                </div>
                                <div>
                                    <p>City/Town</p>
                                    <h4>Ikeja</h4>
                                </div>
                                <div>
                                    <p>Landmark</p>
                                    <h4>Eti-Osa</h4>
                                </div>
                                <div>
                                    <p>Date of Birth</p>
                                    <h4>2015/20/08</h4>
                                </div>
                            </div>
                        </div>
                        <div className="line1"></div>

                        <div className="reviewMeansOfId">
                            <h3>MEANS OF IDENTICATION</h3>
                            <div className="reviewMeansOfId-sub">
                                <p>CARD TYPE</p>
                                <div className="nmic">NIMC</div>
                                <p>CARD STATUS:</p>
                                <div className="identity-check"> <FontAwesomeIcon icon={faCircleCheck} /> </div>
                                <div className="identity-verify">Identity Verified</div>
                            </div>
                            <div className="passport"><img src={Passport} alt="meansOfId" /></div>
                        </div>
                        <div className="line1"></div>

                        <div className="cardPreference">
                            <h3>CARD PREFERENCE</h3>
                            <div className="cardPref-sub1">
                            <label>Debit Card</label>
                            <AccountCard title="Mastercard"/>
                            <label>Credit Card</label>
                            <AccountCard title="Visa Card"/>
                            <label>Online banking</label>
                            <AccountCard title="Internet Banking"/>
                            </div>
                            <div className="cardPref-sub1">
                            <label>Transaction Notification</label>
                            <AccountCard title="SMS Alert"/>
                            <AccountCard title="Statement Preference"/>
                            <label>Statement Preference</label>
                            </div>
                        </div>
                        <div className="line1"></div>
                        <div className="employmentDetails">
                            <h3>EMPLOYMENT DETAILS</h3>
                            <div className="empDetails">
                                <label>status</label>
                                <AccountCard title="Self Employed"/>
                                <label>Annual salary/expected income</label>
                                <AccountCard title="N5 Million - Less than N10 Million"/>
                            </div>
                        </div>
                        <div className="line1"></div>
                        <div className="mandate-card">
                            <h3>MANDATE CARD</h3>
                            <div>
                                <label>account number </label>
                                <h4>0493004949494</h4>
                                <label>account Name </label>
                                <h4>Tomiwa ogunremi</h4>
                                <label>mobile no.</label>
                                <h4>0813984843</h4>
                            </div>
                            <div>
                                <label>contact address</label>
                                <h4>23, bakery road, eti-osa, lagos</h4>
                            </div>
                            <div>
                                <label>PASSPORT PHOTOGRAPH</label>
                                <label>SIGNATURE</label>
                            </div>
                            <div className="rec">
                                <div className="span1"><div className="rec1"> <img src={Img1} alt="img1" /> <FontAwesomeIcon icon={faEye} className="eagle" /></div></div>
                                <div className="span1"><div  className="rec2"> <FontAwesomeIcon icon={faEye} className="eagle" /> </div></div>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default Review;