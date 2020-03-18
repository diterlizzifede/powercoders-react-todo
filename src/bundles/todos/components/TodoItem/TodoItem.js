import React from 'react';
import { status } from '../../../utilities/Status';

class TodoItem extends React.Component {
    deleteClickHandler = () => {
        this.props.remove(this.props.todo.id);
    }

    statusChangeHandler = () => {
        this.props.changeStatus(this.props.todo.id);
    }

    render () {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.todo.status === status.COMPLETED}
                    onChange={this.statusChangeHandler}
                />
                <span className={this.props.todo.status}>{this.props.todo.value}</span>
                <button onClick={this.deleteClickHandler}>delete</button>
            </li>
        );
    }
}

export default TodoItem;
