import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
import { Table } from 'react-bootstrap';
const Appointments = () => {
    const [calenderDate, setCalenderDate] = useState(new Date());
    const handleChange = date => {
        setCalenderDate(date);
        // console.log(date)
    }
    console.log(calenderDate)

    const [updatingData, setUpdatingData] = useState(false);
    const [valueAbleData, setValueAbleData] = useState([])
    const [getAppointmentData, setGetAppointmentData] = useState([]);
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/gettingBookAppointment')
            .then(res => res.json())
            .then(data => {
                setGetAppointmentData(data)
            })
    }, [updatingData, valueAbleData])
    useEffect(() => {
        fetch(`https://serene-castle-61847.herokuapp.com/visitedUpdatingData`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(valueAbleData)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data+'updated')
                setValueAbleData(data)
            })
    }, [valueAbleData])
    return (
        <section className=" container-bg">
            <div className="container">
                <div className="section-title">
                    <h3>Appointment</h3>
                </div>
                <div className="pb-0 pb-md-5 my-5 ">
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <Calendar
                                className=" appointment-calender w"
                                onChange={handleChange}
                                value={new Date()}
                            />
                        </div>
                        <div className="col-md-7 common-card   py-4">
                            <div className="d-flex justify-content-between">
                                <h4 className="text-info">Appointment</h4>
                                   <p>{calenderDate.toDateString()}</p>
                                 
                            </div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>SL.No</th>
                                        <th>Name</th>
                                        <th>Schedule</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            <tbody >
                                {
                                    getAppointmentData.map((updateDataValue, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{updateDataValue.name}</td>
                                            <td>{updateDataValue.schedule}</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class={`dropdown-toggle btn ${updateDataValue.visited === "visited" ? "btn-primary" : ""} ${updateDataValue.visited === "Not Visited" ? "btn-danger" : ""}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {updateDataValue.visited}
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><span onClick={() => setValueAbleData({ visited: "visited", id: updateDataValue._id })} class="dropdown-item text-info">visited</span></li>
                                                        <li><span onClick={() => setValueAbleData({ visited: "Not Visited", id: updateDataValue._id })} class="dropdown-item text-success">Not Visited</span></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointments;