import React, {Component} from 'react';

export default class StopWatch extends Component {
    render(){
        return(
            <>
                <MajorClock></MajorClock>
                <ControlButton></ControlButton>
                <SplitTimes></SplitTimes>
            </>
        )
    }
}
const MajorClock = ()=>{
    return <div>major clock</div>
}
const ControlButton = ()=>{
    return <div>control button</div>
}
const SplitTimes = ()=>{
    return <div>split times</div>
}