import React from 'react';
import styled from 'styled-components';

export class TodosHeader extends React.Component {
    render() {
        return (
            <Header>
                <HeaderTitle>{this.props.appTitle}</HeaderTitle>
            </Header>
        );
    }
}

const Header = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(132,211,76,1) 0%, rgba(0,212,255,1) 100%);
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderTitle = styled.h1`
    margin: 0;
    font-weight: 300;
    color: #fff;
`;
