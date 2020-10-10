import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import {padWidthZero} from "./utils";

const Time = styled(DigitalBox)`
    font-size: 125px;
    width: 327px;
`;

const Penalty = styled(DigitalBox)`
    font-size: 30px;
    width: 90px;
`;


const Timer = ({penalty, minutes, seconds=0}) => {
    const [time, setTime] = useState({minutes: minutes, seconds: seconds});
    const [paused, setPaused] = useState(true);
    const [over, setOver] = useState(false);

    const tick = () => {
        if (paused || over) return;
        if (time.minutes === 0 && time.seconds === 0) setOver(true);
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

    const reset = () => {
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


    if(penalty) {
        return (
            <Penalty onClick={reset}>
                {padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}
            </Penalty>
        )
    } else {
        return (
            <Time onClick={reset}>
                {padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}
            </Time>
        )
    }
}

export default Timer;
