import React from 'react'
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AccountService, Checklist, ContractDetails, MandateCard, MeansOfId, Review } from '.';
import { FormContext } from '../../context/accContext';
import { useContext } from 'react';

const muiTheme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                textTransform: 'uppercase',
                fontSize: '24px',
                color: '#616161', // or 'rgba(0, 0, 0, 1)'
                '&$active': {
                    color: '#F4BB15',
                },
                '&$completed': {
                    color: '#53C67A;',
                },
            },
        },
    }
});

const FormSteps =()=> {

    const {currentStep} = useContext(FormContext)

    const showStep =(step)=> {

        switch (step) {
            case 1:
                return <ContractDetails />
            case 2:
                return <AccountService />
            case 3:
                return <MeansOfId />
            case 4:
                return <MandateCard />
            case 5:
                return <Checklist />
            case 6:
                return <Review />

            default:  return;
        }
    }
    return (

        <div className="formSteps">
            <div className="sub1">
                <div className="accHead">
                    <h2>New Account(Individual)</h2>
                    <div className="draft">DRAFT</div>
                    <div className="restricted">RESTRICTED</div>
                </div>
                <div className="steps">
                    <div>
                    <MuiThemeProvider theme={muiTheme}> 
                        <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                            <Step>
                                <StepLabel>CONTACT DETAILS</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>ACCOUNT SERVICE REQUIRED</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>MEANS OF IDENTIFICATION</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>MANDATE CARD</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>CHECKLIST</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>REVIEW</StepLabel>
                            </Step>
                        </Stepper>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div>
                    {showStep(currentStep)}
                </div>
            </div>
        </div>
    );
}

export default FormSteps;