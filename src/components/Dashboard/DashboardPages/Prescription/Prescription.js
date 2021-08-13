import React, { useState, useEffect } from 'react';
import './Prescription.css'
import { Table } from 'react-bootstrap';
const Prescription = () => {
    const [prescription, setPrescription] = useState([]);
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/gettingBookAppointment')
            .then(res => res.json())
            .then(data => {
                setPrescription(data)
                
            })
    }, [])
    return (
        <section className="container-bg">
            <div className="container">
                <div className="py-3">
                    <h3>Prescription</h3>
                </div>
                <div className="patient-details ">
                <h3 className="text-info">All Prescription</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Prescription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prescription.map((item, index) =>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{(new Date(item.date)).toDateString("MM/dd/yyyy")}</td> 
                                        <td>{item.name}</td> 
                                        <td>{item.phone}</td> 
                                        <td><button className="btn btn-info text-light">view</button></td> 
                                    </tr>

                                )
                            }


                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default Prescription;