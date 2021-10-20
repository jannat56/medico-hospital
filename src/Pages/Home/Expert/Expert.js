import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
         <div className="expert-card">
         <img style={{
              height:'300px',
              width:'300px'
          }}src={img}></img>
          <h3 className="bg-light text-primary p-3 ml-4 mr-4">{name}</h3>
          <h5 className="bg-primary text-white p-2 ">{expertize}</h5>
         </div>
        </div>
    );
};

export default Expert;