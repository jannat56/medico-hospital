import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const {id, name, Amount, time, description, img} = service;
    return (
        <div className="service pb-4">
            <img style=
            {{height:'300px',
            width:'300px', padding:'20px'}} 
            src={img}/>
           <div className="pt-4">
           <h5 className="text-primary">Service Title: {name}</h5>
            <h5>Amount: {Amount}</h5>
            <h6 className="text-primary">Time: {time}</h6>
            <p>description: {description}</p>
           </div>
           <Link to={`/appoinment/${id}`}>
           <button className="btn btn-danger">book {name.toLowerCase()}</button>
           </Link>
        </div>
    );
};

export default Service;
