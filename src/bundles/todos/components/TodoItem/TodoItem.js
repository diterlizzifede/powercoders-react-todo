import React from 'react';
import { status } from '../../constants';
import styled from 'styled-components';

export class TodoItem extends React.Component {
    deleteClickHandler = () => {
        this.props.remove(this.props.todo.id);
    }

    statusChangeHandler = () => {
        this.props.changeStatus(this.props.todo.id);
    }

    render () {
        return (
            <ItemWrapper>
                <ItemCheckBox onClick={this.statusChangeHandler}>
                    { this.props.todo.status === status.COMPLETED && <Checked/> }
                </ItemCheckBox>
                <ItemValue
                    onClick={this.statusChangeHandler}
                    completed={this.props.todo.status === status.COMPLETED}
                >
                    {this.props.todo.value}
                </ItemValue>
                <ItemCta onClick={this.deleteClickHandler}>
                    X
                </ItemCta>
            </ItemWrapper>
        );
    }
}

const ItemWrapper = styled.li`
    display: flex;
    align-items: center;
    margin: 10px 15px;
    height: 40px;
    padding: 8px;
    box-shadow: -1px 4px 29px -17px rgba(171,169,171,0.81);
`;

const ItemCheckBox = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;    
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 1px solid #cbcbcb;
    margin: 0 8px 0 0;
    cursor: pointer;
`;

const Checked = styled.div`
    background: rgba(132,211,76,1);
    width: 10px;
    height: 10px;
    border-radius: 100%;
`;

const ItemValue = styled.span`
    flex: 1;
    text-align: left;
    color: #6f6f6f;
    cursor: pointer;
    text-decoration: ${(props) => props.completed && 'line-through'};
    ::-webkit-scrollbar {
        width: 0px;  
        background: transparent;  
    }
`;

const ItemCta = styled.button`
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    background: transparent;
    border: 1px solid #cbcbcb;
    color: #cbcbcb;
    :hover {   
        background: #cbcbcb;
        color: #fff;
    }
    :active {
        outline: none;
    }
`;
