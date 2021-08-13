import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'
const BookingCard = ({bookData, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    return (
         <section>
            <div className="col text-center appointment-card py-4 px-3">
                <h4 style={{color: '#0FCFE9'}}>{bookData.subject}</h4>
                <h5 className="text-light">{bookData.visitingHour}</h5>
                <p className="text-muted">{bookData.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} className="btn appointment-btn">BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={bookData.subject} closeModal={closeModal} date={date}></AppointmentForm>
            </div>
         </section>
    );
};

export default BookingCard;