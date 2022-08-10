import React from 'react'
import './index.scss'
import ProfilePic from './../../../assets/Mask group (1).png'

const FormWrapper =({details})=> {

    return(
        <div className="formWrapper">
            <div className="wrapperHead">
                <div className="profileImg"><img src={ProfilePic} alt="img" /></div>
                <div className="profileName">
                    <h3>Tomiwa Ogunremi</h3>
                    <p>BVN:3939848490505</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="details">
                {details}
            </div>
        </div>
    );
}

export default FormWrapper