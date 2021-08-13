import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <section >
            <div class="col text-center">
                <img src={service.img} style={{ height: '50px' }} alt="" />
                <h3 className="mt-3  mb-3">{service.name}</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet fugiat ex non odit est delectus minus ab? Aliquam, labore.</p>
            </div>
        </section>
    );
};

export default ServiceDetails;