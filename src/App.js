import React, {useState} from 'react';
import GlobalFonts from './fonts/Fonts';
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import Timer from "./Timer";
import Score from "./Score";

const MatchClock = styled.div`
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
    justify-content: space-between;
    width: 680px;
`;

const Team = styled.div`
    width: 120px;
    p {
        font-size: 40px;
        margin: 0;
    }
`;


const PeriodBox = styled.div`
    text-align: left;
    p {
        margin: 5px;
    }
`;

const Period = styled(DigitalBox)`
    color: yellow;
    font-size: 40px;
    width: 26px;
`;

const Settings = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    z-index: 1;
    input {
      font-size: 16px;
      padding: 10px;
      width: 40px;    
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopLayer = styled.div`
    background-color: #282c34;
    z-index: 5;
`;

const HiddenLayer = styled.div`
    margin-top: ${props => props.show ? 0 : -100}px;
    z-index: 1;
    transition: all .5s;
`;

const TimeContainer = styled.div`
    display: inline;
`;
const BeaconContainer = styled.div`
    display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const PeriodBeacon = styled.div`
    background-color: ${props => props.completed ? 'red' : 'yellow'};
    box-shadow: 0 0 9px rgba(255, 0, 0, 1);
    border-radius: 100px;
    margin: 5px auto;
    height: 10px;
    width: 10px;
`;

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [periods, setPeriods] = useState([]);
  const [periodTime, setPeriodTime] = useState({minutes: 15, seconds: 0});

  const numberOfPeriods = async (val) => {
    const array = [];
    for ( let i = 0; i < val; i++ ) {
      await array.push({completed: false})
    }
    setPeriods(array);
  }

  const updatePeriodTime = (type, time) => {
    if (type === 'minutes') {
      setPeriodTime({...periodTime, minutes: time})
    } else {
      setPeriodTime({...periodTime, seconds: time})
    }
  }

  return (
    <div className="App">
        <GlobalFonts/>
          <MatchClock>
          <TopLayer>
            <h1>Match Clock</h1>
            <Row>
              <Team>
                <p>Home</p>
                <Score />
              </Team>
              <Timer minutes={periodTime.minutes} seconds={periodTime.seconds} onClick={() => setShowSettings(!showSettings)}/>
              <Team>
                <p>Guest</p>
                <Score />
              </Team>
            </Row>
            <Row>
              <PeriodBox>
                <p>Penalty</p>
                <Timer penalty minutes={2} />
              </PeriodBox>
              <PeriodBox>
                <p>Period</p>
                <Period>1</Period>
                {<BeaconContainer>
                  {periods?.map((item, index) => <PeriodBeacon key={index} completed={item.completed}/>)}
                </BeaconContainer>}
              </PeriodBox>
              <PeriodBox>
                <p>Penalty</p>
                <Timer penalty minutes={2}/>
              </PeriodBox>
            </Row>
          </TopLayer>
            <HiddenLayer show={showSettings}>
            <Row>
              <Settings>
                <Column>
                  Number of periods
                  <input
                      type='number'
                      defaultValue={periods.length}
                      onChange={(e) => numberOfPeriods(e.target.value)}
                      min="0"
                      max="8"
                  />
                </Column>
                <Column>
                  Period time
                  <TimeContainer>
                    <input
                        type='number'
                        defaultValue={periodTime.minutes}
                        min="1"
                        max="60"
                        onChange={(e => updatePeriodTime('minutes',e.target.value))}
                    />:
                    <input
                        type='number'
                        defaultValue={periodTime.seconds}
                        min="0"
                        max="59"
                        onChange={(e => updatePeriodTime('seconds',e.target.value))}
                    />
                  </TimeContainer>
                </Column>
              </Settings>
            </Row>
            </HiddenLayer>
          </MatchClock>
    </div>
  );
}

export default App;
