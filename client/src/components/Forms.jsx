import React, { Fragment , Component } from 'react';
import CreateLinks from './CreateLinks'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        this.gogetdata()
    }

    handleSubmitClick() {
        let theTitle = $("#theTitle").val()
        let theDirector = $("#theDirector").val()
        let posterURL = $("#theposterurl").val()
        let sending = JSON.stringify({
            title: theTitle,
            director: theDirector,
            posterurl: posterURL
        });
        fetch('/api/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: sending
        }).then
            (res => res.json()).then((res) => {
                $("#theTitle").val("")
                $("#theDirector").val("")
                $("#theposterurl").val("")
                console.log('this is the response', res)
                this.gogetdata()
            })
    }

    gogetdata() {
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data
                });
            })
    }
    render() {
        return <Fragment>
            <div className=" container-fluid mx-0  p-2 bg-secondary fixed-top" style={{ borderWidth: "thick", borderBottom: "solid black" }}>
              <h3 className="text-center text-white">Add Movies</h3>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" id="theTitle" placeholder="Title" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" id="theDirector" placeholder="Director" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" id="theposterurl" placeholder="PosterURL" />
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-success" onClick={event => {
                      this.handleSubmitClick();
                    }}>
                    Submit
                  </button>
                </div>
              </div>
              <br />

              <hr className="bg-white" />

              <div className="d-flex" style={{ height: "11rem", overflowY: "scroll", overflowX: "scroll", position: "relative" }}>
                {this.state.movies.map(element => {
                  return CreateLinks(element);
                })}
              </div>
              <div className="d-flex justify-content-center">
                <NavLink className="text-center" to="/">
                  Home
                </NavLink>
              </div>
            </div>
          </Fragment>;
    }
};