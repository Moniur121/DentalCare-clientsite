import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import React, { useContext } from 'react';
import dentalCare from '../../images/dental-care.png'
const Navbar = ({ bgColor }) => {
    const [admin, setAdmin] =  useState(false);
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
   
    useEffect(() => {
        fetch('https://serene-castle-61847.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [loggedInUser.email])
    console.log(admin )
    const handleLogout=() =>{
        firebase.auth().signOut().then(() => {
            setLoggedInUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div  >
            <nav class={`navbar navbar-expand-lg navbar-light navigation  ${bgColor ? 'bg-infoC' : 'bg-infoC '}`}>
                <div class="container">
                    <div  >
                        <span><img src={dentalCare}></img></span>
                        <a class="navbar-brand" href="#" style={{ fontSize: '30px', color: 'black',fontWeight: 'bold' }}>Dental Care</a>

                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto  ">
                            <li class="nav-item  ">
                                <Link to="/home" className="nav-link me-2  navbar-coustom   ">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dental" className="nav-link me-2 navbar-coustom">Services</Link>
                            </li>
                            <li class="nav-item">
                                <a href="#testimonial" className="nav-link me-2 navbar-coustom">Testimonial</a>
                            </li>
                            <li class="nav-item">
                                <a href="#blog" className="nav-link me-2 navbar-coustom">Blog's</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contact" className="nav-link me-2 navbar-coustom">Contact Us</a>
                            </li>
                            {
                                loggedInUser.email &&
                                <>
                                 {!admin && <li class="nav-item">
                                 <Link to="/userDashboard" className="nav-link me-2 navbar-coustom">Dashboard</Link>
                             </li>}
                             {admin && <li class="nav-item">
                                 <Link to="/admin" className="nav-link me-2 navbar-coustom">Admin</Link>
                             </li>}
                                
                                </>
                            }
                            {
                                loggedInUser?.email ?   
                            <li class="nav-item">
                                <Link to="/logIn" className="nav-link me-2  " onClick={handleLogout}><button className="btn-log">LogOut</button></Link>
                            </li> :
                                <li class="nav-item">
                                <Link to="/logIn" className="nav-link me-2  "><button className=" btn-log">LogIn</button></Link>
                            </li>
                            }
                             
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;