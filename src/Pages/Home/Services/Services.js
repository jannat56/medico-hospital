import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));

    },[])
    return (
       <div>
           <h2 className="mt-4 p-4 m-4 facility-bg w-80 expert-card"id="services">Our Services</h2>
            <div className="service-container">
          {
              services.map(service => <Service  key = {service.id}
              service={service}>

              </Service>)
             
          }
        </div>
       </div>
    );
};

export default Services;
