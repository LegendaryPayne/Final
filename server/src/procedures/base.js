import { row, rows, empty} from '../config/db'

let base = {

    read(procedureName, arg) {
       return row(procedureName, arg)
    },

    readall(procedureName, arg) {
        return rows(procedureName, arg)
     },

     create(procedureName, arg) {
        return row(procedureName, arg)
     },

     update(procedureName, arg) {
        return empty(procedureName, arg)
     },
     
     destroy(procedureName, arg) {
        return empty(procedureName, arg)
     }
}

export default base;