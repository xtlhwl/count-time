import React from 'react';
import padStart from 'lodash/padStart';


const  MajorClock = ({milliseconds}) => {
    return (
        <h1>{ms2Time(milliseconds)}</h1>
    )
};

const ms2Time = (milliseconds) =>{
    let time = milliseconds;
    const ms = milliseconds % 1000;
    time = (milliseconds - ms) / 1000
    const seconds = time % 60;
    time = (time - seconds) / 60;
    const minutes = time % 60;
    const hours = (time - minutes) /60;

    const result = padStart(hours,2,'0')+":"+padStart(minutes,2,'0')+":"+padStart(seconds,2,'0')+":"+padStart(ms,2,'0')
    return result
}


// MajorClock.prototypes = {
//     milliseconds: PropTypes.number.isRequired
// }

export default MajorClock