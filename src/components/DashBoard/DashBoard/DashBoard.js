import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { UserContext } from "../../../App";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import SidBar from "../Sidebar/SidBar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data);
        setAppointments(data);
      });
  }, [selectedDate]);

  // console.log(appointments);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <SidBar />
        </div>

        <div className="col-md-10">
          <h4 className="p-4 text-brand">Application</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="px-5">
                <Calendar onChange={handleDateChange} value={new Date()} />
              </div>
            </div>
            <div className="col-md-6">
              <AppointmentsByDate appointments={appointments} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
