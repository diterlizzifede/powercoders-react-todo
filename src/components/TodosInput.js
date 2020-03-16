import React from 'react';

class TodosInput extends React.Component {
    render () {
        return (
            <div>
                <input type="text" placeholder={this.props.inputPlaceholder} />
            </div>
        );
    }
}

export default TodosInput;
