import React from 'react';

export class TodosHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.appTitle}</h1>
            </div>
        );
    }
}

