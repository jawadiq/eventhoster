import React from 'react';
import TimeUntil from './TimeUntil';
import Carrousal from './Carrousal';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

        <Carrousal/>

        <div className="artist_name">
            <div className="wrapper">
                Your Event
            </div>
        </div>

        <TimeUntil/>

    </div>
    );
};

export default Featured;