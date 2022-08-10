import React, { useState } from 'react'

export const FormContext = React.createContext();

const Context =({children})=> {

    const [currentStep, setStep] = useState(1);

    return(
        <div>
            <FormContext.Provider value={{currentStep, setStep }}>
                {children}
            </FormContext.Provider>
        </div>
    );
}

export default Context;