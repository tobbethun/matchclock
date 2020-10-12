import React, {useState} from "react";
import styled from 'styled-components/macro';
import {DigitalBox} from "./common-style";
import {padWidthZero} from "./utils";

const ScoreBox = styled(DigitalBox)`
   font-size: 80px;
   width: 88px;
`;

const EditScore = styled.div`
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    span {
        padding: 5px;
        cursor: pointer;
    }
`;

const Score = () => {
    const [score, setScore] = useState(0);
     return (
         <>
            <ScoreBox onClick={()=>setScore(score + 1)}>{padWidthZero(score)}</ScoreBox>
             <EditScore>
                 <span onClick={()=>setScore(score + 1)}>+</span><span onClick={()=>setScore(score - 1)}>-</span>
             </EditScore>
         </>
     )
}

export default Score;
