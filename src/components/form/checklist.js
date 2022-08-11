import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import FormWrapper from './formWrapper';
import { FormContext } from '../../context/accContext';
import { useContext } from 'react';

const ChecklistCard =({icon, title})=> {

    return (
        <div className="checklistCard">
            <div className="checklist-icon">{icon}</div>
            <div className="words">{title}</div>
        </div>
    );
}

const Checklist =()=> {
    const {setStep} = useContext(FormContext)

    return (

        <div>
            <FormWrapper 
                details={
                    <div className="checklist">
                        <div className="check">
                            <h3>Document required</h3>
                            <div className="checklist-sub">
                                <div><ChecklistCard title={<div style={{color: "#F43131"}}>3 documents pending</div>} icon={<FontAwesomeIcon icon={faCircleExclamation} />} /></div>
                                <div><ChecklistCard title="Duly completed account opening form" icon={<FontAwesomeIcon style={{color: "#53C67A"}} icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Two (2) recent passport photographs" style={{color: "#53C67A"}} icon={<FontAwesomeIcon icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Resident permit (for non-Nigerians)" style={{color: "#53C67A"}} icon={<FontAwesomeIcon icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Proof of address" icon={<FontAwesomeIcon style={{color: "#53C67A"}} icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Letter from Employer/School/NYSC" icon={<FontAwesomeIcon icon={faCircleCheck} />} /></div>
                            </div>
                            <div className="checklist-sub1">
                                <div><ChecklistCard title="Specimen signature of card duly completed" icon={<FontAwesomeIcon style={{color: "#53C67A"}} icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Proof of Identity (Original must be sighted)" icon={<FontAwesomeIcon icon={faCircleExclamation} />} /></div>
                                <div><ChecklistCard title="Two (2) Independent and satisfactory refernces" icon={<FontAwesomeIcon icon={faCircleExclamation} />} /></div>
                                <div><ChecklistCard title="Letter from Employer" icon={<FontAwesomeIcon style={{color: "#53C67A"}} icon={faCircleCheck} />} /></div>
                                <div><ChecklistCard title="Other documents provided" icon={<FontAwesomeIcon style={{color: "#53C67A"}} icon={faCircleCheck} />} /></div>
                            </div>
                        </div>
                        <div className="form-but">
                            <button onClick={()=> setStep(6)} className="nextBut">Next</button>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default Checklist;