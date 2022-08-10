import React from 'react'
import Header from '../../components/header';
import SideBar from '../../components/sidebar';


const MainLayer =({children})=> {

    return (
        <div className="homeLayout">
            <div className="lay-sidebar">
            <SideBar/>
            </div>

            <div className="lay-div">
                <div className="head">
                <Header />
                </div>
                <div className="content">
                {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayer;