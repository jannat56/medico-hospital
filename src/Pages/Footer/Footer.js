
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faAmbulance  } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faHospital} />
    const element2 = <FontAwesomeIcon icon={faAmbulance} />
    return (
        <section>
            <div className="mt-4 bg-primary text-white p-4">
           <h5>Best Health Care Center || MEDICO {element}</h5>
           <p>Home  | About | Services | Facilities | Experts | Review | Login</p>
           <p>copyright@2021 | MEDICO | HEALTH CARE {element2}</p>
           
           
        </div>
        </section>
    );
};

export default Footer;