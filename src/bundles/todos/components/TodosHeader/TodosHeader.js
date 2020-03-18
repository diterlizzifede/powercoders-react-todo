import React from 'react';

class TodosHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.appTitle}</h1>
            </div>
        );
    }
}

export default TodosHeader;
