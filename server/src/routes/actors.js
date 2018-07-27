import { Router } from 'express';
import toActors from '../procedures/actors'

let router = Router();

router
    .get('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            toActors
                .getAnActor(id)
                .then(results => res.send(results));
        } else {
            toActors
                .getAllActors()
                .then(results => res.send(results));
        }
    })

    .post('/', (req, res, next) => {
        let { name } = req.body
        if (!name) {
            res.status(400).send('Invalid Input')
        } else {
            toActors.addAnActor(name).then(results => res.send(results));
        }

    })

    .put('/:id?', (req, res, next) => {
        let id = req.params.id;
        let { name } = req.body
        if (!name) {
            res.status(400).send('Invalid Input')
        } else {
            toActors.updateAnActor(id, name).then(results => res.sendStatus(201));
        }
    })

    .delete('/:id?', (req, res, next) => {
        let id = req.params.id;

        if (id) {
            toActors.removeAnActor(id)
            res.sendStatus(200);
        } else {
            res.sendStatus(405);
        }

    });


export default router;