import React from 'react';
import Todos from "../../../../bundles/todos/components/Todos";
import Notepad from "../../../../bundles/notes/components/Notepad";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return(
            <Router>
                <nav>
                    <div>
                        <Link to="/">
                            go to Todos
                        </Link>
                    </div>
                    <div>
                        <Link to="/note">
                            go to Notes
                        </Link>
                    </div>
                </nav>

                <Switch>
                    <Route path="/note">
                        <Notepad/>
                    </Route>
                    <Route path="/">
                        <Todos/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
