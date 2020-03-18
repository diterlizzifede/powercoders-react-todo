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
        if (!this.state.inputValue.trim()) {
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
                <TodoInputField
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

const TodoInputField = styled.input`
    width: 100%;    
    height: 35px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #cdcbcb;
    outline: none;
    ::placeholder {
        #6F6F6F
    };
`;

const InputContainer = styled.div`
    margin: 0 15px;
`;
