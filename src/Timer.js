import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import {padWidthZero} from "./utils";
import Buzzer from './Buzzer.mp3';
import Svg from "./Svg";

const StyledTimer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const Time = styled(DigitalBox)`
    font-size: 125px;
    height: 150px;
    width: 327px;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Penalty = styled(DigitalBox)`
    padding-bottom: 5px;
    font-size: 30px;
    width: 90px;
`;


const Timer = ({penalty, minutes, seconds=0}) => {
    const [time, setTime] = useState({minutes: minutes, seconds: seconds});
    const [paused, setPaused] = useState(true);
    const [over, setOver] = useState(false);

    let audio = new Audio(Buzzer);

    const tick = () => {
        if (paused || over) return;
        if (time.minutes === 0 && time.seconds === 1) {
            if(!penalty) {
                audio.play();
            }
        }
        if (time.minutes === 0 && time.seconds === 0) {
            setOver(true);
        }

        else if (time.seconds === 0) {
            setTime({
                minutes: time.minutes - 1,
                seconds: 59
            });
        } else {
            setTime({
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
        }
    };

    const pauseAndPlay = () => {
        if (paused) {

        setTime({
            minutes: time.minutes,
            seconds: time.seconds
        });
        setPaused(false);
        setOver(false);
        } else {
            setPaused(true);
        }
    };

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    const reset = () => {
        setPaused(true);
        setTime({minutes: minutes, seconds: seconds});
    }


    if(penalty) {
        return (
            <>
            <Penalty onClick={pauseAndPlay}>
                {padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}
            </Penalty>
            <Controls>
                {paused ?
                    <Svg type='play' onClick={pauseAndPlay}/> :
                    <Svg type={'pause'} onClick={pauseAndPlay} />
                }
                <Svg type={'restart'} onClick={reset} />
            </Controls>
            </>
        )
    } else {
        return (
            <StyledTimer>
                <Time onClick={pauseAndPlay}>
                    {padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}
                </Time>
                <Controls>
                    {paused ?
                        <Svg type='play' onClick={pauseAndPlay}/> :
                        <Svg type={'pause'} onClick={pauseAndPlay} />
                    }
                    <Svg type={'restart'} onClick={reset} />
                    <Svg type={'sound'} onClick={() => audio.play()} />
                </Controls>
            </StyledTimer>
        )
    }
}

export default Timer;
