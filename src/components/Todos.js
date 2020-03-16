import React from 'react';
import TodosHeader from './TodosHeader';
import TodosInput from './TodosInput';
import TodosFooter from './TodosFooter';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    APP_TITLE = 'My Todos';
    PLACEHOLDER = 'What needs to be done??';
    ALL_BUTTON_LABEL = 'All';
    ACTIVE_BUTTON_LABEL = 'Active';
    COMPLETED_BUTTON_LABEL = 'Complete';

    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        }
    }

    render() {
        return(
            <section id="todo-app" class="todos">
                <TodosHeader appTitle={this.APP_TITLE}/>

                <TodosInput inputPlaceholder={this.PLACEHOLDER} />

                <div>
                    <ul>
                        {
                            this.state.todoList.map((todo, i) => {
                                return (
                                    <TodoItem key={i} todo={todo}/>
                                );
                            })
                        }
                    </ul>
                </div>

                <TodosFooter
                    listLength={this.state.todoList.length}
                    allButton={this.ALL_BUTTON_LABEL}
                    activeButton={this.ACTIVE_BUTTON_LABEL}
                    completedButton={this.COMPLETED_BUTTON_LABEL}
                />
            </section>
        );
    }
}

export default Todos;
