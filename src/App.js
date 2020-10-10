import React, {useEffect, useState} from 'react';
import GlobalFonts from './fonts/Fonts';
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import Timer from "./Timer";
import Score from "./Score";

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
   width: 22px;
`;

const App = () => {
  return (
    <div className="App">
        <GlobalFonts/>
          <Test className="App-header">
            <h1>Match Clock</h1>
            <Row>
              <Team>
                <p>Home</p>
                {/*<Score onClick={()=>setHomeScore(homeScore + 1)}>{homeScore}</Score>*/}
                <Score />
              </Team>
              <Timer minutes={15} seconds={0}/>
              {/*<Time>{padWidthZero(time.minutes)}:{padWidthZero(time.seconds)}</Time>*/}
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
              </PeriodBox>
              <PeriodBox>
                <p>Penalty</p>
                <Timer penalty minutes={2}/>
              </PeriodBox>
            </Row>

          </Test>
    </div>
  );
}

export default App;
