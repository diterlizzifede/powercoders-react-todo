import React from 'react';
import {status} from '../../constants';
import styled from 'styled-components';

export class TodoItem extends React.Component {
    deleteClickHandler = () => {
        this.props.remove(this.props.todo.id);
    }

    statusChangeHandler = () => {
        this.props.changeStatus(this.props.todo.id);
    }

    render() {
        return (
            <ListItem>
                <CustomCheckbox
                    checked={this.props.todo.status === status.COMPLETED}
                    onClick={this.statusChangeHandler}
                >
                    {this.props.todo.status === status.COMPLETED &&
                        <Checked/>
                    }
                </CustomCheckbox>
                <ItemLabel
                    className={this.props.todo.status}
                    onClick={this.statusChangeHandler}
                >
                    {this.props.todo.value}
                </ItemLabel>
                <ItemCTA onClick={this.deleteClickHandler}>X</ItemCTA>
            </ListItem>
        );
    }
}

const ListItem = styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 8px;
    -webkit-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
    span {
        flex: 1;
        text-align: left;
    }
`;

const CustomCheckbox = styled.div`
    width: 25px;
    height: 25px;
    margin: 0 15px 0 0;
    border: 1px solid #cbcbcb;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
`;

const Checked = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: rgba(7,148,42,1);
`;

const ItemLabel = styled.span`
    font-size: 14px;
    color: #6f6f6f;
    cursor: pointer;
`;

const ItemCTA = styled.div`
    border-radius: 100%;
    border: 1px solid #cbcbcb;
    color: #cbcbcb;
    width: 25px;
    height: 25px; 
    cursor: pointer; 
    :hover {
        background: #cbcbcb;
        color: #fff;
    }
`;
