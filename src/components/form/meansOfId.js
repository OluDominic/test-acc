import React from 'react'
import FormWrapper from './formWrapper';

import Img1 from './../../assets/003-name 1.png'
import Img2 from './../../assets/Group (2).png'
import Img3 from './../../assets/Group (3).png'
import Img4 from './../../assets/Group (4).png'

import Profile from './../../assets/Mask group (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FormContext } from '../../context/accContext';
import { useContext, useState } from 'react';

const IdCard =({icon, title})=> {

    const [background, setBackground] = useState('white')
    const [color, setColor] = useState('#616161')

    const onChange =()=> {
        setBackground('#2B2B2B');
        setColor('#F4BB15');
    }
    return (
        <div onClick={onChange} style={{background: background, color: color}} className="idcard">
            <div className="card-sub">
                <div className="idIcon">{icon}</div>
                <div className="Idtitle">{title}</div>
            </div>
        </div>
    );
}

const MeansOfId =()=> {
    const {setStep} = useContext(FormContext)

    return (

        <div>
            <FormWrapper 
                details={
                    <div className="meansOfId">
                        <h3>BVN DETAILS</h3>
                        <div className="meansOfId-div">
                            <div className="div1">
                                <div className="proofOfId">
                                    <h3>Proof of Identity</h3>
                                    <div className="id">
                                        <IdCard icon={<img src={Img1} alt="image1" />} title="ID Card" />
                                        <IdCard icon={<img src={Img2} alt="image2" />} title="Voter Card" />
                                        <IdCard icon={<img src={Img3} alt="image3" />} title="ID Card" />
                                        <IdCard icon={<img src={Img4} alt="image4" />} title="ID Card" />
                                    </div>
                                    <h3>Identity number</h3>
                                    <div className="cardInput"><input type="text" placeholder="Enter the number on the card"/></div>
                                    <button>Verify</button>
                                </div>
                            </div>
                            <div className="div2">
                                <div className="div-check">
                                    <div className="identity-check"> <FontAwesomeIcon icon={faCircleCheck} /> </div>
                                    <div className="identity-verify">Identity Verified</div>
                                    <div className="verify-box">
                                        <div className="verify">
                                            <div className="verify-img"><img src={Profile} alt="profile" /></div>
                                            <div className="verify-div">
                                                <span>Name: {'\u00A0'} <h4> Tomiwa Ogunremi</h4></span>
                                                <span>Issued Date: {'\u00A0'} <h4> 04-03-21</h4></span>
                                            </div>
                                            <div className="verify-div">
                                                <span>Card No: {'\u00A0'} <h4> 47584743837848</h4></span>
                                                <span>Expiry Date: {'\u00A0'} <h4> 05-03-21</h4></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        <div style={{marginBottom: "-100px"}} className="form-but">
                            <button onClick={()=> setStep(4)} className="nextBut">Next</button>
                        </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default MeansOfId;