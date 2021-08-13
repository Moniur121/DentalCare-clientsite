import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import ExpectionalDoctor from '../ExpectionalDoctor/ExpectionalDoctor';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
import Service from '../Service/Service'; 
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <ExpectionalDoctor></ExpectionalDoctor>
            
            <Appointment></Appointment>
             <Testimonial></Testimonial>
             <Blog></Blog>
             
             <OurDoctors></OurDoctors>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;