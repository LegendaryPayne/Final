import base from "./base";

let actors = {

    getAnActor(actorid) {
        return base.read(`spGetAnActor`, [Actorid])
    },

    getAllActors() {
        return base.readall(`spGetAllActors`, [])
    },

    addAnActor(name) {
        return base.create(`spCreateAnActor`, [name])
    },

    updateAnActor(id, name) {
        return base.update(`spCreateAnActor`, [id, name])
    },

    removeAnActor(id) {
        return base.destroy(`spDeleteAnActor`, [id]);
    }
}

export default actors;