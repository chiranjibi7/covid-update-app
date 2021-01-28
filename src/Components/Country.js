import React from 'react';
import classes from './Country.module.css';

const Country=({country,cases,deaths,recovered,active,critical})=>{

    return(
        <div className={classes.Country}> 
            <h2 style={{color:'red'}}>{country}</h2>
            <p><strong>Cases:</strong> {cases}</p>
            <p><strong>Deaths:</strong> {deaths}</p>
            <p><strong>Recovered:</strong> {recovered}</p>
            <p><strong>Active:</strong> {active}</p>
            <p><strong>Critical:</strong> {critical}</p>
        </div>
    );
};

export default Country; 