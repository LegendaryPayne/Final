import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <h1 className="hello">Hello</h1>
            </React.Fragment>
        );
    }
}

export default Content;