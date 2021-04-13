import React from 'react';
import AppointmentsList from '../AppointmentsList/AppointmentsList';

const AppointmentsByDate = ({appointments}) => {
    // console.log(appointments);
    return (
        <div>
            <h2 className="text-center text-brand">Appointments</h2>
            {
                appointments.length ?
                //  appointments.map(app => <li key={app._id}>{app.name}</li>)
                 <AppointmentsList appointments={appointments} />
                 :
                 <div className="p-5">
                     <h4 className="lend text-center"> No Appointments for this Date</h4>
                 </div>
            }
        </div>
    );
};

export default AppointmentsByDate;