import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/t0rlgz5c1uf31.png'

const NotFound = () => {
    return (
        <div>
            <h3>oppsssss page not found</h3>
            <img style={{width:"200px", height:"200px"}} src={notfound}/>
            
            <Link to="/"><button className="btn btn-danger">Go Back</button></Link>
        </div>
    );
};

export default NotFound;