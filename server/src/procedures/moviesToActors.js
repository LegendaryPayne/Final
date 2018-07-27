import base from "./base";

let movieRefenences = {

    getAllMoviesBasedOnActorsID(actorid) {
        return base.readall(`spGetMoviesBasedOnActorsID`, [actorid]);
    },
    getAMovieBasedOnActorsID(actorid, movieid) {
        return base.read(`spGetAMovieBasedOnActorsID`, [actorid, movieid]);
    },

    getAllActorsBasedOnMovieID(movieid) {
        return base.readall(`spGetActorsBasedOnMovieID`, [movieid]);
    },
    getAnActorBasedOnMovieID(movieid, actorid) {
        return base.read(`spGetAnActorBasedOnMovieID`, [movieid, actorid]);
    },

    getAllMoviestoActors() {
        return base.readall(`spGetActorsBasedOnMovieID`, []);
    },

    addMovieReferences(movieid, actorid) {
        return base.update(`spCreateMoviesToActors`, [movieid, actorid])
    },

    removeMovieReferencesBasedOnMovieID(movieid) {
        return base.destroy(`spDeleteMoviesToActorsBasedOnMovieID`, [movieid])
    },

    removeMovieReferencesBasedOnActorID(actorid) {
        return base.destroy(`spDeleteMoviesToActorsBasedOnActorID`, [actorid]);
    },

    removeMovieReferences(movieid, actorid) {
        return base.destroy(`spDeleteMoviesToActors`, [movieid, actorid]);
    }
}

export default movieRefenences;