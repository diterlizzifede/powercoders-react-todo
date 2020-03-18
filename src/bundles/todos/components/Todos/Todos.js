import React from 'react';
import TodosHeader from '../TodosHeader';
import TodosInput from '../TodosInput';
import TodosFooter from '../TodosFooter';
import TodoItem from '../TodoItem';
import { Item } from '../../classes';
import { status } from "../../constants";
import styled from 'styled-components';

const APP_TITLE = 'My Todos';
const PLACEHOLDER = 'What needs to be done?';

export class Todos extends React.Component {
    constructor(props) {
        // superclass constructor invocation
        super(props);

        // component state initialization
        this.state = {
            todoList: [],
            selectedStatus: status.ALL
        };

        // 'this' binding example
        this.addItemToList = this.addItemToList.bind(this);
    }

    /**
     * lifecycle method (mounting phase)
     * this method is invoked by React engine after render()
     */
    componentDidMount() {
        const list = localStorage.getItem('todoList');

        if (!!list) {
            this.setState({
                todoList: JSON.parse(list)
            })
        }
    }

    // Handlers
    addItemToList(value) {
        this.setState((prevState) => ({
            //spread operator: remember to keep an immutable approach!
            todoList: [...prevState.todoList, new Item(value)]
        }), () => this.updateLocalStorage(this.state.todoList))
    }

    removeFromList = (itemID) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.filter(item => item.id !== itemID)
        }), () => this.updateLocalStorage(this.state.todoList));
    }

    changeItemStatus = (itemID) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.map((item) => {
                if (item.id !== itemID) {
                    return item
                }
                const newStatus = (item.status === status.ACTIVE) ? status.COMPLETED : status.ACTIVE;

                //spread operator: remember to keep an immutable approach!
                return {...item, status: newStatus}
            })
        }), () => this.updateLocalStorage(this.state.todoList))
    }

    changeCurrentStatus = (status) => {
        if (this.state.selectedStatus === status) {
            return;
        }
        this.setState({
            selectedStatus: status
        }, () => console.log('change current selected items to: ', this.state.selectedStatus))
    }

    deleteAll = () => {
        this.setState({
            todoList: [],
            selectedStatus: status.ALL
        }, () => this.updateLocalStorage(this.state.todoList))
    }

    // local storage utility
    updateLocalStorage(list) {
        localStorage.setItem('todoList', JSON.stringify(list));
    }

    /**
     * render method
     * (the only lifecycle method required by React engine)
     */
    render() {
        const currentList = this.state.todoList.filter((item) => {
            switch (this.state.selectedStatus) {
                case status.ALL:
                    return true
                default:
                    return item.status === this.state.selectedStatus
            }
        });
        const ul = !!currentList.length &&
            <TodoList>
                {
                    currentList.map((todo) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            remove={this.removeFromList}
                            changeStatus={this.changeItemStatus}
                        />
                    )
                }
            </TodoList>;
        const footer = !!this.state.todoList.length &&
            <TodosFooter
                listLength={currentList.length}
                current={this.state.selectedStatus}
                changeStatus={this.changeCurrentStatus}
                deleteAll={this.deleteAll}
            />;

        return (
            <TodosContainer>
                <TodosHeader appTitle={APP_TITLE}/>

                <ListContainer>
                    <TodosInput
                        inputPlaceholder={PLACEHOLDER}
                        addItem={this.addItemToList}
                    />

                    {/* remember: if ul === false, jsx will ignore it */}
                    { ul }

                    { footer }
                </ListContainer>
            </TodosContainer>
        );
    }
}

const TodosContainer = styled.section`
    background-color: #fff;
    margin: 45px auto;
    width: 500px;
    -webkit-box-shadow: -1px 4px 29px 2px rgba(171,169,171,0.81);
    -moz-box-shadow: -1px 4px 29px 2px rgba(171,169,171,0.81);
    box-shadow: -1px 4px 29px 2px rgba(171,169,171,0.81);
`;

const ListContainer = styled.div`
    padding: 8px;
`;

const TodoList = styled.ul`
    overflow-y: scroll;
    max-height: 400px;
    ::-webkit-scrollbar {
        width: 0px;  
        background: transparent;  
    }
`;
