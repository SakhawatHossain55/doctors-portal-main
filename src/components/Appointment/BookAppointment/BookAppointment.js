import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 am – 11:30 am',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 pm – 6:30 pm',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 am – 8:30 am',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center mb-5 text-brand">Available Appointments on {date.toDateString()}</h2>
            <div className="container">
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date}></BookingCard>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookAppointment;