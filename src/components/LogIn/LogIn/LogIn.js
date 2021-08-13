// import React from 'react';
import LoginImage from '../../images/login_img.png'
import { UserContext } from '../../../App';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react'
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
// import firebaseConfig from './firebase.config';
import firebaseConfig from './firebase.cofig'

import { useHistory, useLocation } from 'react-router-dom';
const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState([])
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <section className="logIn-section">
            <div className="container">
                <div className="login-area">
                    <button type="button" className="google-btn " onClick={handleGoogleSignIn}><span className="me-3 text-danger"><FaGoogle></FaGoogle></span>Google Sign</button>
                </div>
            </div>

        </section>
    );
};

export default LogIn;