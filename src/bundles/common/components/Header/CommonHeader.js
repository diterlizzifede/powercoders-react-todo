import styled from 'styled-components';
import {mainGradient} from "../../../todos/constants";

export const CommonHeader = styled.div`
    height: 75px;
    display: flex; 
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgb(2,0,36);
    background: ${mainGradient};
    h1 {
       font-weight: 300;
    }
`;
