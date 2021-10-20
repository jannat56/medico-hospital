import React from 'react';
import picture from '../../../src/images/about/cropped_doctor_nurse_healthcare___getty.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faServer, faCheck } from '@fortawesome/free-solid-svg-icons'



const About = () => {
  const element2 = <FontAwesomeIcon icon={faAmbulance} />
  const element3 = <FontAwesomeIcon icon={faServer} />
  const element4 = <FontAwesomeIcon icon={faCheck} />
    return (

        <div className="container row p-4 d-flex align-items-center">
        <div className="col-lg-10">
        <h3 className="bg-info p-4 text-white">About Us</h3>
      <h3>{element2} Ambulance services </h3>
                <p>The most common type of ambulance, which provides care to patients with an acute illness or injury. These can be road-going vans, boats, helicopters, fixed-wing aircraft (known as air ambulances), or even converted vehicles such as golf carts. </p>
                <h3>{element3} Emergency rooms </h3>
                <p>Let Us Be Your Health Navigator So You Can Navigate Your Business. Talk To An Expert Today. Higher Member Satisfaction and Award Winning Service. Let Us Be Your Health Navigator. HAP. Talk To Your Agent. Call To Talk To An Expert.</p>
                <h3>{element4} Free check-ups </h3>
                <p>A Free medical Camp can be considered as a life-saving program that aims to provide free medical and surgical services to poor communities living in rural or urban areas by a mobile team with varieties of medical specialized services.</p>
      </div>
        <div className="col-lg-2">
        <img src={picture} className=""alt=""/>
        </div>
        </div>

    );
};

export default About;