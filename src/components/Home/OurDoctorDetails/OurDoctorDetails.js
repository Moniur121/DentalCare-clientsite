import React from 'react';
import './OurDoctorDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const OurDoctorDetails = ({ doctor }) => {
    console.log(doctor)
    return (
        <section>
            <div className="col text-center">
                <img className="img-fluid" src={doctor.imgUrl} alt="" width="150" height="100" />
                <div className="description mt-4">
                    <p style={{fontWeight: 'bold', fontSize:'20px'}}>{doctor.name}</p>
                    <p className="text-muted">{doctor.authorTitle}</p>
                    <p className="text-muted">{doctor.collegeName}</p>
                    <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}></FontAwesomeIcon> {doctor.phone}</p>
                </div>
            </div>
        </section>
    );
};

export default OurDoctorDetails;