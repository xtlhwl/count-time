import React from 'react';


const ControlButton = (props) => {
    const {activated, onStart, onPause, onReset, onSplits} = props
    if(activated){
        return (
            <div>
                <button onClick={onSplits}>计次</button>
                <button onClick={onPause}>停止</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={onReset}>复位</button>
                <button onClick={onStart}>启动</button>
            </div>
        )
    }
}

// ControlButton.prototypes = {
//     activated: PropTypes.bool,
//     onStart: PropTypes.func.isRquired,
//     onPause: PropTypes.func.isRquired,
// }
export default ControlButton