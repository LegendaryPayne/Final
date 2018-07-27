import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Form from './Forms';
import Movies from './Movies';


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Form/>
                    <div style={{marginTop: "23em"}} />
                    <Switch>
                        <Route path="/movie" component={Movies} />
                        <Route exact path="/" component={Home} />  
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;