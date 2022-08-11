import React from 'react'
import FormWrapper from './formWrapper';
import { FormContext } from '../../context/accContext';
import { useContext } from 'react';

const Card =({title, cardWidth, mandateInput})=> {
    
    return (
        <div className="mandateCard">
            <div className="mandateName">{title}</div>
            <div className="mandate-input">{cardWidth}</div>
        </div>
    );
}

const MandateCard =()=> {
    const {setStep} = useContext(FormContext);
    return (

        <div>
            <FormWrapper 
                details={
                    <div className="mandate">
                        <h3>Mandate card</h3>
                        <div className="mandate-sub">
                            <div className="mandate-div">
                                <Card title="Account number" cardWidth={<input type="text" style={{width: "191px"}} />}/>
                                <Card title="Account name" cardWidth={<input type="text" style={{width: "191px"}} />}/>
                            </div>
                            <div className="mandate-div">
                                <Card title="Mobile phone no." cardWidth={<input type="text" style={{width: "191px"}} />} />
                                <Card title="Other phone no." cardWidth={<input type="text" style={{width: "191px"}} />}/>
                            </div>
                            <div className="mandate-div"><Card title="Contact Address" cardWidth={<input type="text" style={{width: "569px"}} />}/></div>
                            <div className="mandate-div">
                                <Card title="Title" cardWidth={<input type="text" style={{width: "35px"}} />}/>
                                <Card title="Name" cardWidth={<input type="text" style={{width: "191"}} />} />
                            </div>
                            <div className="uploadCard">
                                <div className="p">Upload mANDATE cARD</div>
                                <div className="broken-lines">
                                    <div>
                                        <button>Choose photo</button>
                                        <h5>or drag photo here</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-but">
                            <button onClick={()=> setStep(5)} className="nextBut">Next</button>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default MandateCard;