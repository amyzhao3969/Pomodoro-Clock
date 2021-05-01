import React from 'react';

function SessionLength(props) {

    function increaseS() {
        if (props.sLength === 60) {
            return;
        }
        props.increaseSession();
    }


    function decreaseS() {
        if (props.sLength === 1) {
            return;
        }
        props.decreaseSession();
    }


    return (
        <section>
            <h4 id="session-label">Session Length</h4>
            <section className='interval-container'>
                <button 
                id="session-decrement"
                disabled={props.isPlay === true ? "disabled" : ""} 
                onClick={decreaseS}
                >Down</button>
                <p id="session-length" className='interval-length'>{props.sLength}</p>
                <button 
                id="session-increment"
                disabled={props.isPlay === true ? "disabled" : ""} 
                onClick={increaseS}
                >Up</button>
            </section>
        </section>
    );
}

export default SessionLength;