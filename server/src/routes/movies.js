import { Router } from 'express';
import toMovies from '../procedures/movies'

let router = Router();

router
    .get('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            toMovies
              .getAMovie(id)
              .then(results => res.send(results));
        } else {
            toMovies
              .getAllMovies()
              .then(results => res.send(results));
        }
    })

    .post('/', (req, res, next) => {
        let {title, director, posterurl} = req.body
        if (!title || !director || !posterurl) {
            res.status(400).send('Invalid Input')
        } else {
            toMovies.addAMovie(title, director, posterurl).then(results => res.send(results));
        }

    })

    .put('/:id?', (req, res, next) => {
        let id = req.params.id;
        let { title, director, posterurl } = req.body
        if (!title || !director || !posterurl) {
            res.status(400).send('Invalid Input')
        } else {
            await toMovies.updateAMovie(id, title, director, posterurl).then(() => {
                res.sendStatus(201)
            })

        }
    })

    .delete('/:id?', (req, res, next) => {
        let id = req.params.id;

        if (id) {
            toMovies.removeAMovie(id)
            res.sendStatus(200);
        } else {
            res.sendStatus(405);
        }        

    });


export default router;