import React from 'react';
import { status } from '../../../utilities/Status'

class TodosFooter extends React.Component {
    render() {
        return (
            <div>
                <span>{`${this.props.listLength} items left`}</span>
                <div>
                    <button
                        onClick={() => this.props.changeStatus(status.ALL)}
                        className={this.props.current === status.ALL ? 'selected' : ''}
                    >{status.ALL}</button>
                    <button
                        onClick={() => this.props.changeStatus(status.ACTIVE)}
                        className={this.props.current === status.ACTIVE ? 'selected' : ''}
                    >{status.ACTIVE}</button>
                    <button
                        onClick={() => this.props.changeStatus(status.COMPLETED)}
                        className={this.props.current === status.COMPLETED ? 'selected' : ''}
                    >{status.COMPLETED}</button>
                    <button onClick={this.props.deleteAll}>delete all</button>
                </div>
            </div>
        );
    }
}

export default TodosFooter;
