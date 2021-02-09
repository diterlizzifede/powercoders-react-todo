import styled from "styled-components";

export const Button = styled.div`
    padding: 5px 30px;
    border-radius: 40px;
    cursor: pointer;
    border: ${(props) => {
    const color = props.selected ? 'rgba(7,148,42,1)' : '#cbcbcb';

    return `1px solid ${color}`
    }};
    color: ${(props) => props.selected ? 'rgba(7,148,42,1)' : '#6f6f6f'};
`;
