import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Todo from '../../../todos/components/Todos';
import Notepad from "../../../notes/components/Notepad";

export class Home extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Todos</Link>
                        </li>
                        <li>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/notes">
                        <Notepad/>
                    </Route>
                    <Route path="/">
                        <Todo/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
