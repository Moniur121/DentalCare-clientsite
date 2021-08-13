import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Patient.css'
const Patients = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/gettingBookAppointment')
            .then(res => res.json())
            .then(data => {
                setPatient(data)
                console.log(data)
            })
    }, [])
    return (
        <section className="container-bg">
            <div className="container">
                <div className="py-3">
                    <h3>Patients</h3>
                </div>
                <div className="patient-details ">
                <h3 className="text-info">All Patients</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Weight</th>
                                <th>Contact</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patient.map((item, index) =>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td> 
                                        <td>{item.gender}</td> 
                                        <td>{item.age}</td> 
                                        <td>{item.weight}</td>
                                        <td>{item.phone}</td>
                                        <td>Sylhet, Bangladesh</td>
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

export default Patients;