import { faCalendar, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCog, faGripHorizontal, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SidBar.css'

const SidBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)

    useEffect(() => {
        fetch('https://shrouded-anchorage-03316.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsDoctor(data);
        })
    },[])
    return (
        <div className="SidBar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height: '100vh'}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                
               {isDoctor && <div>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
               <li>
                    <Link to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Doctor</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/doctor/setting" className="text-white">
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
               </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt}><span>LogOut</span></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default SidBar;