import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css'
const bookingData = [
    {
        id: '1',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: '2',
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: '3',
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        id: '4',
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id: '5',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: '6',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]
const BookAppointment = ({date}) => {

    return (
        <section>
            <div className="container">
                <div className="text-center py-5 mb-4 mt-5">
                    <h3 style={{color: '#10D0E9'}}>Available Appointments On {date.toDateString()}</h3>
                </div> 
                <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            bookingData.map(bookData => <BookingCard date={date}  bookData={bookData} key={bookData.id}></BookingCard>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default BookAppointment;