import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import NoteApp from './NoteApp';


let  HomePage = ()=> {
    let [leftClicks, setClicks] = useState(0)
    let [timerCount, setTimer] = useState(0)

    let countdown = () => {
        setTimer(timerCount+0.01)
    }

    let clickTimerCount = () => {
        setTimeout(countdown,100)
    }

    let buttonClick = () => {
        setClicks (leftClicks+1)
    }

    let wipeClicks = () => {
        setClicks (0)

    
    }

    
    return (
        <div className='box1'>
            Look at your button clicks
        <div>
            ==>  
            <button className="buttons" onClick={buttonClick}>Click here</button>
            Button clicks: {leftClicks}
            <button className="buttons" onClick={wipeClicks}>Reset your clicks</button>
           
        </div>
        <div>
        <button className="buttons" onClick={clickTimerCount}>Start timer </button>
        Timer: {timerCount}
        </div>
        </div>
        )
}


ReactDOM.render(<HomePage/>, document.getElementById('root'));
   


