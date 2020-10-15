import React from 'react';
import styled from 'styled-components/macro';
import Pause from './pause-regular.svg';
import Play from './play-regular.svg';
import Restart from './redo-regular.svg';
import Settings from './cog-light.svg';
import Sound from './waveform-path-regular.svg';

const SvgContainer = styled.div`
    padding: 10px;
    width: 20px;
`;

const Svg = ({type, onClick}) => {
    if (type === 'play') return (
        <SvgContainer onClick={onClick}>
            <img src={Play} alt="play"/>
        </SvgContainer>
    )

    if (type === 'pause') return (
        <SvgContainer onClick={onClick}>
            <img src={Pause} alt="Pause"/>
        </SvgContainer>
    )
    if (type === 'restart') return (
        <SvgContainer onClick={onClick}>
            <img src={Restart} alt="restart"/>
        </SvgContainer>
    )
    if (type === 'sound') return (
        <SvgContainer onClick={onClick}>
            <img src={Sound} alt="sound"/>
        </SvgContainer>
    )
    if (type === 'settings') return (
        <SvgContainer onClick={onClick}>
            <img src={Settings} alt="settings"/>
        </SvgContainer>
    )
}

export default Svg;
