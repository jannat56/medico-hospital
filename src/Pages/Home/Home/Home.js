import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';
import './Home.css'



const Home = () => {
    return (
        <div id="home">
             <Banner></Banner>
             <Services></Services>
             <Facilities></Facilities>
            <Experts></Experts>
            
           
        </div>
    );
};

export default Home;