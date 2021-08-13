import React from 'react';
import './HeaderMain.css'
import chair from '../../images/chair.png'
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                 <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h1>
                 <small className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae soluta modi excepturi esse impedit possimus voluptatum quidem doloribus veritatis.</small><br/><br/>
                 
                 <Link to="/dental"> <button className=" common-btn">GET SERVICES</button></Link>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;