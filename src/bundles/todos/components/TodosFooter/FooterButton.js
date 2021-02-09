import React from 'react';
import {Button} from "./styled";

export class FooterButton extends React.Component {
    render () {
        return (
            <Button
                onClick={this.props.action}
                selected={this.props.active}
            >
                {this.props.label}
            </Button>
        );
    }
}
