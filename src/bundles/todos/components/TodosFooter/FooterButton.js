import React from 'react';
import styled from 'styled-components';

class FooterButton extends React.Component {
    render() {
        return (
            <Button
                selected={this.props.selected}
                onClick={this.props.action}
            >
                {this.props.label}
            </Button>
        );
    }
}

const Button = styled.div`
    box-sizing: border-box;
    border-radius: 50px;
    padding: 5px 30px;
    font-weight: 500;
    font-size: 14px;
    border: ${(props) => {
        let color = props.selected ? 'rgba(132,211,76,1)' : '#cbcbcb';
        
        return `1px solid ${color}`
    }};
    color: ${(props) => !props.selected ? '#6f6f6f' : 'rgba(132,211,76,1)'};
    cursor: pointer;
    :hover {
        border-color: rgba(132,211,76,1);
        color: rgba(132,211,76,1);
    }
`;

export default FooterButton;
