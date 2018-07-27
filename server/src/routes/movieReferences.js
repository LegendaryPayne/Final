import { Router } from 'express';
import toReferences from '../procedures/moviesToActors'

let router = Router();

router
  .get("/:id?/:type?", (req, res, next) => {
    let id = req.params.id;
    let type = req.params.type;
    console.log(id);
    console.log(type);
    let theid = id.slice(6)
    if (id) {
      if (id.includes("actor")) {
        if (type) {
            toReferences
              .getAMovieBasedOnActorsID(theid, type)
              .then(results => res.send(results));
        } else {
            toReferences
              .getAllMoviesBasedOnActorsID(theid)
              .then(results => res.send(results));
        }
      }
      if (id.includes("movie")) {
        if (type) {
            toReferences
              .getAnActorBasedOnMovieID(theid, type)
              .then(results => res.send(results));
        } else {
            toReferences
              .getAllActorsBasedOnMovieID(theid)
              .then(results => res.send(results));
        }
      }
    } else {
        toReferences
          .getAllMoviestoActors()
          .then(results => res.send(results));
    }
  })

  .post("/", (req, res, next) => {
      let { actorid, movieid } = req.body
      if (!actorid || !movieid ) {
          res.status(400).send('Invalid Input')
      } else {
          toReferences.addMovieReferences(movieid, actorid)
      }

  })


    .delete("/:id?/:type?", (req, res, next) => {
        let id = req.params.id;
        let type = req.params.type;
        console.log(id);
        console.log(type);
        let theid = id.slice(6)
        if (id) {
            if (id.includes("actor")) {
                if (type) {
                toReferences.removeMovieReferences(type. theid)
                res.sendStatus(200)
                } else {
                toReferences.removeMovieReferencesBasedOnActorID(theid)
                res.sendStatus(200)
                }
            }
            if (id.includes("movie")) {
                if (type) {
                toReferences.removeMovieReferences(theid, type)
                res.sendStatus(200)
                } else {
                toReferences.removeMovieReferencesBasedOnMovieID(theid)
                res.sendStatus(200)
                }
            }
            res.sendStatus(405);
        } else {
            res.sendStatus(405);
        }
  });


export default router;