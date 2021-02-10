export default function incompleteItems (state = [], action) {
    switch( action.type ) {
        case 'ADD_INCOMPLETE' :
            let isIn = false
            for(let item of state) { if(item === action.payload) isIn = true; }
            if( isIn === false && action.payload.length > 0 ) state.push(action.payload)
            return state;
        case 'DELETE_INCOMPLETE' :
            let list = [...state]
            for(let i = 0; i < list.length; i++) {
                if(list[i] === action.payload) {
                    list.splice(i, 1);
                }
            } 
            return list;
        default :
            return state;
    }
}
