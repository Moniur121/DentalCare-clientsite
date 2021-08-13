import React from 'react';
import './Appointment.css';
import Doctor from '../../images/doctor.png';
const Appointment = () => {
    return (
        <section >
            <div className="make-appointment  ">
                <div className="row row-cols-1 row-cols-md-2 g-4 d-flex align-items-center  ">
                    <div class="col doctor">
                        <img src={Doctor} alt="" />
                    </div>
                    <div class="col text-white">
                        <h5 className="text-uppercase " style={{color: '#7FFFD4'}}>Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="common-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;