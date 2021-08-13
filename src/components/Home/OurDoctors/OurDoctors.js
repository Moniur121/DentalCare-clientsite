import React from 'react';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import OurDoctorDetails from '../OurDoctorDetails/OurDoctorDetails';
import Doctor from '../../images/doctor.png';


const OurDoctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/getOurDoctor')
        .then(res => res.json())
        .then(data => {
            setDoctor(data)
            console.log(data)
        })
    }, [])
    return (
        <section className="homeSection-containerBg">
            <div className="container py-5">
                <div className="doctors-header text-center py-5">
                    <h3 style={{ color: '#1CC7C1' }}>OUR DOCTOR'S</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctor.map(doctor => <OurDoctorDetails doctor={doctor}></OurDoctorDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;