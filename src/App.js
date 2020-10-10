import React, {useEffect, useState} from 'react';
import GlobalFonts from './fonts/Fonts';
import styled from 'styled-components/macro';
import './index.css'

const Test = styled.div`
      background-color: #282c34;
      color: white;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1em;
`;

const Row = styled.div`
    display: flex;
`;

const Team = styled.div`
    margin: 0 20px;
    width: 120px;
    p {
        font-size: 40px;
        margin: 0;
    }
`;

const DigitalBox = styled.div`
    border: 5px solid white;
    border-radius: 10px;
    font-family: 'Digital';
    text-shadow: 0 0 9px rgba(255, 0, 0, 1);
    text-align: right;
    color: red;
    padding: 10px 10px 0;
`;

const Time = styled(DigitalBox)`
    font-size: 125px;
    width: 327px;
`;

const Score = styled(DigitalBox)`
   font-size: 80px;
   width: 88px;
`;

const PeriodBox = styled.div`
    text-align: center;
    p {
        margin: 5px;
    }
`;

const Period = styled(DigitalBox)`
    color: yellow;
   font-size: 40px;
   width: 22px;
`;

const App = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);
  const [time, setTime] = useState({minutes: 0, seconds: 12});
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
    setTime({
      minutes: time.minutes,
      seconds: time.seconds
    });
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const padWidthZero = (value) => {
    if(value < 10) {
      return '0' + value;
    } else return value;
  }

  return (
    <div className="App">
        <GlobalFonts/>
          <Test className="App-header">
            <h1>Match Clock</h1>
            <Row>
              <Team>
                <p>Home</p>
                <Score onClick={()=>setHomeScore(homeScore + 1)}>{homeScore}</Score>
              </Team>
              <Time>{padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}</Time>
              <Team>
                <p>Guest</p>
                <Score onClick={()=>setGuestScore(guestScore + 1)}>{guestScore}</Score>
              </Team>
            </Row>
            <Row>
              <PeriodBox>
                <p>Period</p>
                <Period>1</Period>
              </PeriodBox>
            </Row>
            <button onClick={reset}>start</button>
          </Test>
    </div>
  );
}

export default App;
