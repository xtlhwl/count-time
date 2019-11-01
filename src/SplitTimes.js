import React from 'react';
import MajorClock from './MajorClock'

 // 记录时间
const SplitTimes = ({value=[]}) => {
    return value.map((v, k) =>{
        <MajorClock  milliseconds={v} key={v+k} />
    });
};
export default SplitTimes