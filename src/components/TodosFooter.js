import React from 'react';

class TodosFooter extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.listLength}</span>
                <div>
                    <button>{this.props.allButton}</button>
                    <button>{this.props.activeButton}</button>
                    <button>{this.props.completedButton}</button>
                </div>
            </div>
        );
    }
}

export default TodosFooter;
