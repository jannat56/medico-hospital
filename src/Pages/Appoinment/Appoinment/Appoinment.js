import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Appoinment = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));

    },[]);
    const matchedId = services.find(
        (services)=>services.id === parseInt(serviceId)
    );
    console.log(matchedId);
    return (
      <div>
            <h2 className="p-4 text-danger">You've Done Your appoinment</h2>
            <div className="service pb-4">
               
                    <img style=
            {{height:'300px',
            width:'300px', padding:'20px'}} 
            src={matchedId?.img}/>
            <h2>Service: {matchedId?.name}</h2>
            <h5>Amount: {matchedId?.Amount}</h5>
            <h6 className="text-primary">Time: {matchedId?.time}</h6>
            <p>description: {matchedId?.description}</p>
            <Link to="/"><button className="btn btn-danger">Go Back</button></Link>

            </div>
            
        </div>
    );
};


export default Appoinment;