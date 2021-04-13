import React, { useEffect, useState } from 'react';
import SidBar from '../../Sidebar/SidBar';
import AppointmentsDataTable from '../AppointmentsDataTable/AppointmentsDataTable';

const AllPatients = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data =>{
            setAppointments(data);
        })
    }, [])
    console.log(appointments);
    return (
        <div className="container-fluid row">
         
            <SidBar></SidBar>
           
            <div className="col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="p-4">Patients</h3>
                <div className="p-4 rounded" style={{background: "#fff", marginRight: "70px"}}>
                    <h3 className="text-brand py-4">All Applications</h3>
                    <AppointmentsDataTable appointments={appointments} />
                </div>
            </div>
        </div>
    );
};

export default AllPatients;