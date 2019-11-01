import React, { Component } from 'react'
import SplitTimes from './SplitTimes'
import MajorClock from './MajorClock'
import ControlButton from './SplitTimes'

class Stopwatch extends Component {
    constructor() {
        super(...arguments)

        this.state ={
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: [],
        }
    }
    render() {
        return (
            <div>
                <MajorClock 
                   milliseconds = {this.state.startTime}
                />
                <ControlButton 
                    activated = {this.state.isStarted}
                    onStart={this.onStart()}
                    onSplit={this.onSplits()}
                    onPause = {this.onPause()}
                    onReset = {this.onReset()}
                />
                <SplitTimes
                    value = {this.state.splits}
                />
            </div>
        )
    }

   onSplits() {
       this.setState({
           splits:[...this.state.splits,this.state.currentTime-this.state.startTime]
       })
   }
// 开始
   onStart = () => {
       this.setState({
           isStarted:true,
           startTime:new Date(),
           currentTime:new Date()
       });
       this.intervalHandle = setInterval(() => {
           this.setState({currentTime: new Date()});
       },1000/60)
   }
   // 暂停
   onPause = () => {
       clearInterval(this.intervalHandle);
       this.setState({
           isStarted:false
       })
   }
   onReset = () => {
       this.setState({
           startTime: null,
           currentTime: null,
           splits: []
       })
   } 
    
}


export default Stopwatch;