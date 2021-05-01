import React from 'react';

function BreakInterval(props) {

    function decreaseCounter() {
        if (props.length === 1) {
            return;
        }

        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.length === 60) {
            return;
        }

        props.increaseBreak();
    }

    return(
        <section>
            <h4 id='break-label'>Break Length</h4>
            <section className='interval-container'>
                <button 
                id='break-decrement'
                disabled={props.isPlay === true ? "disabled" : ""} 
                onClick={decreaseCounter}
                >Down</button>
                <p id="break-length" className='interval-length'>{props.length}</p>
                <button 
                id='break-increment'
                disabled={props.isPlay === true ? "disabled" : ""} 
                onClick={increaseCounter}
                >up</button>
            </section>
        </section>
        );
}

export default BreakInterval;