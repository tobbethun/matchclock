import { createGlobalStyle } from 'styled-components';

import Digital from './alarm-clock.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Digital';
        src: local('Digital'),
        url(${Digital}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
