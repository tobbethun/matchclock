import React, {useState} from "react";
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import {padWidthZero} from "./utils";

const ScoreBox = styled(DigitalBox)`
   font-size: 80px;
   width: 88px;
`;

const Score = () => {
    const [score, setScore] = useState(0);
     return (
        <ScoreBox onClick={()=>setScore(score + 1)}>{padWidthZero(score)}</ScoreBox>
     )
}

export default Score;
