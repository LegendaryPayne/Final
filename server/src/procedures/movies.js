import base from "./base";

let movies = {

    getAMovie(movieid) {
    return base.read(`spGetAMovie`, [movieid])
    },

    getAllMovies() {
    return base.readall(`spGetAllMovies`, [])
    },

    addAMovie(title, director, posterurl) {
        return base.create(`spCreateAMovie`, [title, director, posterurl])
    },

    updateAMovie(id, title, director, posterurl) {
        return base.update(`spUpdateAMovie`, [id, title, director, posterurl])
    },

    removeAMovie(id) {
        return base.destroy(`spDeleteAMovie`, [id]);
    }
}

export default movies;