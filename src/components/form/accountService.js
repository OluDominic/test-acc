import React from 'react'
import FormWrapper from './formWrapper';
import { FormContext } from '../../context/accContext';
import { useContext } from 'react';


const AccountCard =({title})=> {

    return(
        <div className="accountCard">
            <input type="checkbox" />
            <h4>{title}</h4>
        </div>
    );
}

const AccountService =()=> {

    const {setStep} = useContext(FormContext)

    return (
        <div>
            <FormWrapper 
                details={
                    <div className="detail">
                        <h3>Card preferences</h3>
                        <div className="accDetails">
                            <div className="acc">
                                <div className="acc-div">
                                    <p>Debit Card</p>
                                    <AccountCard title="Mastercard"/>
                                    <AccountCard title="Verve Card"/>
                                    <AccountCard title="Visa Card"/>
                                    <AccountCard title="Union Pay"/>
                                    <AccountCard title="Prepaid Card"/>
                                </div>
                                <div className="acc-div">
                                    <p>Credit Card</p>
                                    <AccountCard title="Mastercard"/>
                                    <AccountCard title="Verve Card"/>
                                    <AccountCard title="Visa Card"/>
                                </div>
                                <div className="acc-div">
                                    <p>Online Banking</p>
                                    <AccountCard title="Mobile Banking"/>
                                    <AccountCard title="Internet Banking"/>
                                    <AccountCard title="USSD Banking"/>
                                    <AccountCard title="Biometric ATM"/>
                                    <AccountCard title="Soft Token"/>
                                </div>
                                <div className="acc-div">
                                    <p>Transaction Notification</p>
                                    <AccountCard title="SMS Alert"/>
                                    <AccountCard title="Email Alert"/>
                                    <AccountCard title="Transcation Notificaton"/>
                                </div>
                                <div className="acc-div">
                                    <p>Statement Preference</p>
                                    <AccountCard title="Email"/>
                                    <AccountCard title="Post"/>
                                    <AccountCard title="Branch"/>
                                </div>
                                <div className="acc-div">
                                    <p>Statement Frequency</p>
                                    <AccountCard title="Monthly"/>
                                    <AccountCard title="Quarterly"/>
                                    <AccountCard title="Semi--annually"/>
                                    <AccountCard title="Annually"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-but">
                            <button onClick={()=> setStep(3)} className="nextBut">Next</button>
                        </div>
                    </div>
                }
            />
            
        </div>
    );
}

export default AccountService;