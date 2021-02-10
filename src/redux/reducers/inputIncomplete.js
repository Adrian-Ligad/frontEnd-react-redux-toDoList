export default function inputIncomplete(state = "", action) {
    switch( action.type) {
        case "INPUT" : 
            return state = action.payload
        case "DELETE" :
            return state = ""
        default: return state
    }
}