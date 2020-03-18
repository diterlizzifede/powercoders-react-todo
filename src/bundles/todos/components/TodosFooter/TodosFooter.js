import React from 'react';
import { status } from '../../constants'
import styled from 'styled-components';
import FooterButton from './FooterButton';

export class TodosFooter extends React.Component {
    render() {
        return (
            <FooterContainer>
                <span>{`${this.props.listLength} items left`}</span>
                <FooterButtons>
                    <FooterButton
                        label={status.ALL}
                        selected={this.props.current === status.ALL}
                        action={() => this.props.changeStatus(status.ALL)}
                    />
                    <FooterButton
                        label={status.ACTIVE}
                        selected={this.props.current === status.ACTIVE}
                        action={() => this.props.changeStatus(status.ACTIVE)}
                    />
                    <FooterButton
                        label={status.COMPLETED}
                        selected={this.props.current === status.COMPLETED}
                        action={() => this.props.changeStatus(status.COMPLETED)}
                    />
                    <FooterButton
                        label={'delete all'}
                        action={this.props.deleteAll}
                    />
                </FooterButtons>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    padding: 0 10px;
    span {
        font-weight: 300;
        font-size: 14px;
    }
`;

const FooterButtons = styled.div`
    margin: 15px 15px 0;
    display: flex; 
    justify-content: space-between;
`;

