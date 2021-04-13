import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   

    function closeModal(){
      setIsOpen(false);
    }
  const { subject, visitingHour, totalSpace } = booking;

  return (
    <section className="col-md-4">
      
        <div className="text-center shadow-sm p-4 mb-4">
          <h3 className="text-brand">{subject}</h3>
          <h4>{visitingHour}</h4>
          <p>{totalSpace}</p>
          <button onClick={openModal} className="btn btn-brand rounded">Book appointment</button>
          <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={booking.subject} closeModal={closeModal} />
        </div>
    </section>
  );
};

export default BookingCard;
