import React from 'react';
import styled from 'styled-components';
import {mainGradient} from '../../constants'
import {CommonHeader} from "../../../common/components/Header/CommonHeader";

export class TodosHeader extends React.Component {
    render() {
        return (
            <CommonHeader>
                <h1>{this.props.appTitle}</h1>
            </CommonHeader>
        );
    }
}

