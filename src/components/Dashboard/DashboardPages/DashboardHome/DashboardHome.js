import React, { useEffect } from 'react';
import './DashboardHome.css'
import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import UpdatingForm from '../UpdatingForm/UpdatingForm';
import Appointments from '../Appointments/Appointments';
const DashboardHome = () => {
    const [viewUpdated, setViewUpdated] = useState([])
    // const [viewUpdatedData, setViewUpdatedData] =useState([])
    const [updated, setUpdated] = useState(false)
    const [updateData, setUpdateData] = useState([]);
    const [appointment, setAppointment] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    console.log(updateData)
    useEffect(() => {
        fetch(`https://serene-castle-61847.herokuapp.com/updateAppointment`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateData)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data+'updated')
                setUpdated(data)
            })
    }, [updateData])

    useEffect(() => {
        fetch(`https://serene-castle-61847.herokuapp.com/prescriptionUpdating`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(viewUpdated)
        })
            .then(res => res.json())
            .then(data => {
                setViewUpdated(data)
            })
    }, [viewUpdated])
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/gettingBookAppointment')
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
                console.log(data)
            })

    }, [updated, updateData, viewUpdated])
    // console.log(appointment)
    return (
        <div className="  dashboard-bg">
            <div className="  container">
                <section >
                    <div className="section-title py-5">
                        <h1 >Admin Board</h1>
                    </div>
                     
                </section>
                <section className="  dashboard-table">
                    <div style={{ color: '#1CC7C1' }}>
                        <h5>Recent Appointments</h5>
                    </div>
                    <div className="text-center  ">

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Prescription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="data">
                                {
                                    appointment.map((appointment, index) =>

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{(new Date(appointment.date)).toDateString("MM/dd/yyyy")}</td>
                                            <td>{appointment.schedule}</td>
                                            <td>{appointment.name}</td>
                                            <td>{appointment.phone}</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class={`dropdown-toggle btn ${appointment.prescription === "view" ? "btn-primary" : ""} ${appointment.prescription === "Not Added" ? "btn-danger" : ""}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {appointment.prescription}
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><span onClick={() => setViewUpdated({ prescription: "view", id: appointment._id })} class="dropdown-item text-info">view</span></li>
                                                        <li><span onClick={() => setViewUpdated({ prescription: "Not Added", id: appointment._id })} class="dropdown-item text-success">Not Added</span></li>
                                                    </ul>
                                                </div>

                                                {/* <UpdatingForm  id={appointment} modalIsOpen={modalIsOpen}  closeModal={closeModal} ></UpdatingForm> */}
                                            </td>
                                            <td className="d-flex">
                                                <button class={`btn ${appointment.status === "pending" ? "btn-info" : ""} ${appointment.status === "approve" ? "btn-success" : ""} ${appointment.status === "cancel" ? "btn-danger" : ""} me-2`}>{appointment.status}</button>
                                                {/* <button onClick={openModal} class="btn btn-warning">
                                                <FaPen className="text-light">
                                                </FaPen>
                                            </button> */}
                                                <div class="dropdown">
                                                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <FaPen className="text-light">
                                                        </FaPen>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><span onClick={() => setUpdateData({ status: "pending", id: appointment._id })} class="dropdown-item text-info">Pending</span></li>
                                                        <li><span onClick={() => setUpdateData({ status: "approve", id: appointment._id })} class="dropdown-item text-success">Approve</span></li>
                                                        <li><span onClick={() => setUpdateData({ status: "cancel", id: appointment._id })} class="dropdown-item text-danger">Cancel</span></li>
                                                    </ul>
                                                </div>
                                            </td>

                                        </tr>

                                    )
                                }

                            </tbody>
                        </Table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DashboardHome;