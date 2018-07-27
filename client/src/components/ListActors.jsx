import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';



let ListActors = (data) => {
console.log(data)

    if (data[0]) {
        return (
            <React.Fragment>
                <div className="card" style={{width: "10rem"}}>
                    <div className="card-header">
                        Actors
  </div>
                    <ul className="list-group list-group-flush">
                        {data.map(element => {
                            return (<li className="list-group-item">{element}</li>)
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
};
export default ListActors;