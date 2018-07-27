import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';



let CreateLinks = (data) => {
    let { id, title, director, posterurl } = data

    if (!isNaN(+id)) {
        return (
            <React.Fragment>

                    <div className="card" style={{ width: "14rem" }}>
                        <img className="card-img-top" src={posterurl} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text text-center">{title}</p>
                            <p className="card-text text-center">By: {director}</p>
                        </div>
                    </div>
</React.Fragment>
        )
    }
};
export default CreateLinks;