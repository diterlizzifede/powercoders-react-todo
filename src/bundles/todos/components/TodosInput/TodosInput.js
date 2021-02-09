import React from 'react';
import styled from 'styled-components';

const ENTER_KEY = 13;

export class TodosInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    keyPressHandler = (e) => {
        if (e.nativeEvent.charCode !== ENTER_KEY) {
            return;
        }
        if (!this.state.inputValue) {
            return;
        }
        this.props.addItem(this.state.inputValue.trim());
        this.setState({
            inputValue: ''
        })
    }

    changeHandler = (e) => {
        this.setState({
           inputValue: e.nativeEvent.target.value
        })
    }

    render () {
        return (
            <InputContainer>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder={this.props.inputPlaceholder}
                    onKeyPress={this.keyPressHandler}
                    onChange={this.changeHandler}
                />
            </InputContainer>
        );
    }
}

const InputContainer = styled.div`
    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #bcbcbc;
        height: 35px;
        :focus {
            outline: none;
        }
    }
`;
