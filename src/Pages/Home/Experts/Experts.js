import React from 'react';
import doctor1 from '../../../images/doctors/doctor1.jpg'
import doctor2  from '../../../images/doctors/doctor2.jpg'
import doctor3 from '../../../images/doctors/doctor3.jpg'
import doctor4 from '../../../images/doctors/doctor4.jpg'

import Expert from '../Expert/Expert';

const experts =[
    {
        img: doctor1,
        name: 'John Milka',
        expertize: 'Kidney Specialist'
    },
    {
        img: doctor2,
        name: 'Aryan Sin',
        expertize: 'Brain Specialist'
    },
    {
        img: doctor3,
        name: 'Ruby Akhter',
        expertize: 'Surgery Specialist'
    },
    {
        img: doctor4,
        name: 'praddy leon',
        expertize: 'Dentist'
    },
]

const Experts = () => {
    return (
        <div className="container" id="experts">
              <h2 className="mt-4 bg-light text-primary p-4">Our Expert Doctors </h2>
            <div className="row p-4">
                {
                  experts.map(expert => <Expert key={expert.name}
                   expert = {expert}></Expert>)
                }
          
        
        
        </div>
        </div>
    );
};

export default Experts;