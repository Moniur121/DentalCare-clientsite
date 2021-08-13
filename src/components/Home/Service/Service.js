import React from 'react';
import './Service.css'
import flouride from '../../images/flouride.png';
import cavity from '../../images/cavity.png';
import whiteing from '../../images/whiteing.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Fillings',
        img: cavity
    },
    {
        name: 'Teeth Whiteing',
        img: whiteing
    },
]
const Service = () => {
    return (
        <section className=" homeSection-containerBg">
            <div className="container py-5">
                <div className="text-center   mt-4">
                    <h4 className="text-info">OUR SERVICE</h4>
                    <h2 style={{ color: '#3A4256' }}>Service We Provide</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                        {
                            serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;