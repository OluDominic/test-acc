import React from 'react'
import Header from '../../components/header';
import Home from '../../components/home';
import SideBar from '../../components/sidebar';


const HomeLayer =()=> {

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
                <Home />
                </div>
            </div>
        </div>
    );
}

export default HomeLayer;