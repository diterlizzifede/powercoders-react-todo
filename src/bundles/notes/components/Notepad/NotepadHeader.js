import React from 'react';
import {CommonHeader} from "../../../common/components/Header/CommonHeader";

export class NotepadHeader extends React.Component {
    render() {
        return (
            <CommonHeader>
                <h1>{this.props.title}</h1>
            </CommonHeader>
        );
    }
}



