import React from 'react';
import './AppointmentHeader.css';
import chair from '../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <section className="appointment-containerBg">
            <div className="container">
                <main style={{ height: '600px' }} className="row d-flex align-items-center">
                    <h3 style={{color: 'black'}}>Our Dental Services</h3>
                    <div className="col-md-4 offset-md-1 " >

                        <Calendar
                            className="appointment-calender w"
                            onChange={handleDateChange}
                            value={new Date()}
                        />

                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={chair} alt="" />
                    </div>
                </main>
            </div>
        </section>
    );
};

export default AppointmentHeader;