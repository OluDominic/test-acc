import React from 'react'
import FormWrapper from './formWrapper';

import { FormContext } from '../../context/accContext';
import { useContext } from 'react';

const ContractDetails =()=> {

    const {setStep} = useContext(FormContext)
    return (

        <div>
            <FormWrapper 
            details={
                <div  className="contractDetails">
                    <h3>BVN DETAILS</h3>
                    <div className="div">
                        <div className="div-sub1">
                            <div>
                                <p>First Name</p>
                                <h4>Tomiwa</h4>
                            </div>
                            <div>
                                <p>Email Address</p>
                                <h4>Ogunremi</h4>
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
                                <p>State of Origin</p>
                                <h4>2015/20/08</h4>
                            </div>
                            <div>
                                <p>Occupation sector</p>
                                <h4>Agriculture</h4>
                            </div>
                        </div>
                        <div className="div-sub2">
                            <div>
                                <p>Last Name</p>
                                <h4>Ogunremi</h4>
                            </div>
                            <div>
                                <p>Mailing Address</p>
                                <h4>Ogunremi</h4>
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
                    <div className="form-but">
                        <button className="genAcc">Generate acc No.</button>
                        <button onClick={()=> setStep(2)} className="nextBut">Next</button>
                    </div>
                </div>
            }
            />
        </div>
    );
}

export default ContractDetails;