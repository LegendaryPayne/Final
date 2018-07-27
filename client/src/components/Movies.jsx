import React, {Fragment, Component } from "react";
import { render } from "react-dom";
import CreateLink from "./CreateLink";
import ListActor from "./ListActors";
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            actors: {},
            pageid: 0
        };
    }
    setdata() {
        console.log(this.props.location.pathname)
        let movie = this.props.location.pathname.match(/\/movie\/([\d]+)/gm)
        let theid = movie[0].slice(7)
        console.log(theid)
        if (theid !== this.state.pageid) {
            console.log(theid)
            this.gogetdata(theid)
        }
    }
    handleSubmitClick() {
        let theTitle = $("#updateTitle").val()
        let theDirector = $("#updateDirector").val()
        let posterURL = $("#updateposterurl").val()
        let sending = JSON.stringify({
            title: theTitle,
            director: theDirector,
            posterurl: posterURL
        });
        console.log(sending)
        fetch(`/api/movies/${this.state.pageid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: sending
        }).then(()=>{
                $("#updateTitle").val("")
                $("#updateDirector").val("")
                $("#updateposterurl").val("")
                this.setdata()
            })
    }
    gogetdata(id) {
        fetch(`/api/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movie: data,
                    pageid: id
                });
            })
            .catch(err => {
                console.log(`Doesn't Not Exist`);
            });

        fetch(`/api/references/movie=${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    actors: data
                });
            })
            .catch(err => {
                console.log(`Doesn't Not Exist`);
            });
    }
theactorlist() {
    let thelist = [];
    for(let obj in this.state.actors) {
        thelist.push(this.state.actors[obj].name)
    }
 return(thelist)
}

    render() {
        console.log(this.state.movie);
        console.log(this.state.actors);
this.theactorlist()
        console.log('this.state.pageid', this.state.pageid);

        this.setdata()
        return <Fragment>
            <div className=" container-fluid mx-0  p-2 tex-center" style={{ borderWidth: "thick", borderBottom: "solid black" }}>
              <h3 className="text-center">Add Update</h3>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" id="updateTitle" placeholder="Title" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" id="updateDirector" placeholder="Director" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" id="updateposterurl" placeholder="PosterURL" />
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success" onClick={event => {
                    this.handleSubmitClick();
                  }}>
                  Submit
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            {CreateLink(this.state.movie)}
            {ListActor(this.theactorlist())}
            </div>
          </Fragment>;
    }
}

export default Content;