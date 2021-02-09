import React from 'react';
import { status, fontColor } from '../../constants';
import {FooterButton} from "./FooterButton";
import styled from 'styled-components';

export class TodosFooter extends React.Component {
    render() {
        return (
            <FooterContainer>
                <span>{`${this.props.listLength} items left`}</span>
                <FlexContainer>
                    <FooterButton
                        action={() => this.props.changeStatus(status.ALL)}
                        label={status.ALL}
                        active={this.props.current === status.ALL}
                    />
                    <FooterButton
                        action={() => this.props.changeStatus(status.ACTIVE)}
                        label={status.ACTIVE}
                        active={this.props.current === status.ACTIVE}
                    />
                    <FooterButton
                        action={() => this.props.changeStatus(status.COMPLETED)}
                        label={status.COMPLETED}
                        active={this.props.current === status.COMPLETED}
                    />
                    <FooterButton
                        action={this.props.deleteAll}
                        label="delete all"
                    />
                </FlexContainer>
            </FooterContainer>
        );
    }
}

const FlexContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
`;

const FooterContainer = styled.div`
    padding: 0 25px 25px;
    span {
        color: #6f6f6f;
        font-size: 12px;
        margin-bottom: 20px;
        display: inline-block;
    }
`;
