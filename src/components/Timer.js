import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
            sound: new Audio("/1.mp3")
        }

        this.playTimer=this.playTimer.bind(this);
        this.decreaseTimer=this.decreaseTimer.bind(this);
        this.stopTimer=this.stopTimer.bind(this);
        this.resetTimer=this.resetTimer.bind(this);

    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        //intervalId is for later stop function
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        });

                        this.props.onToggleInterval(this.state.isSession);
                        this.state.sound.play();

                    } else {
                        this.setState({
                            isSession: true
                        });

                        this.props.onToggleInterval(this.state.isSession)
                    }
                } else {
                    this.props.onUpdateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }

                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
        this.state.sound.pause();
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }



    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4 id="timer-label">{this.state.isSession === true ? "Session" :
                    "Break"}</h4>
                    <section id="time-left">
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">
                        {this.state.timerSecond === 0 
                            ? "00" 
                            : this.state.timerSecond < 10 
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond}
                    </span>
                    </section>
                </section>

                <section className="timer-action">
                    <button id="start_stop" onClick={this.playTimer}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button id="reset" onClick={this.resetTimer}>Refresh</button>
                </section>
            </section>
        )
    }
}

export default Timer;