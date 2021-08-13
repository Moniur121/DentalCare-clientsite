import {useState,useEffect} from 'react';
import './UserDashboard.css'
import { Button } from 'react-bootstrap';
const UserDashboard = () => {
  const [userAppointment, setUserAppointment] = useState([])
  useEffect(() => {
    fetch('https://serene-castle-61847.herokuapp.com/gettingBookAppointment')
    .then(res => res.json())
    .then(data => {
        setUserAppointment(data)
        console.log(data)
    })
  }, [])
    return (
        <section>
            <div className="container">
                <div className="appointment-area py-5">
                    <h2 className="text-center">Appointment</h2>
                </div>
                <table class="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">SL.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Schedule</th>
                            <th scope="col">Service</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userAppointment.map((item, index)=>
                            
                            <tr className="table-light">
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.schedule}</td>
                                <td>{item.service}</td>
                                <td>{(new Date(item.date)).toDateString("MM/dd/yyyy")}</td>
                                <td>
                                    <button className={`btn ${item.status === "pending" ? "btn-info" : ""}${item.status === "approve" ? "btn-success" : ""}${item.status === "cancel" ? "btn-danger" : ""}`}>{item.status}</button>
                                </td>
                            </tr>
                            )
                        }
                         
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UserDashboard;