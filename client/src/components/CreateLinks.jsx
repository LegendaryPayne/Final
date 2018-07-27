import React from "react";
import { browserHistory, hashHistory } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

function handleClick(event) {
    let theid = (event.target.id).slice(7)
    console.log(theid)
    fetch(`/api/movies/${theid}`, {
        method: 'DELETE',
    })
    window.location.href = '/'
}

let CreateLinks = (data) => {
    let { id, title, director, posterurl } = data

    if (!isNaN(+id)) {
        return <React.Fragment>
            <div className="card mx-2" key={`card${id}`} style={{ width: "6.5rem", borderWidth: "thick", borderBottom: "solid black" }}>
              <NavLink className="mr-2 text-center" to={`/movie/${id}`} key={`links${id}`} id={`movie${id}`}>
                <img className="card-img-top text-center" src={posterurl} alt="Card image cap" style={{ width: "6rem" }} />
              </NavLink>
                <button className="m-0 p-0 btn btn-danger" type="button" key={`delete${id}`} id={`destory${id}`}onClick ={event => {handleClick(event)}}>
                        Delete
                  </button>
            </div>
          </React.Fragment>
    }
};
export default CreateLinks;