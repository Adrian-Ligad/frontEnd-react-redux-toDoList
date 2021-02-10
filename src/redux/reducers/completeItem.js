export default function completeItems (state = [], action) {
    switch( action.type ) {
        case 'ADD_COMPLETE' :
            const list = [...state]
            list.push(action.payload)
            return list
        case 'DELETE_COMPLETE' :
            const list2 = [...state]
            for(let i = 0; i < list2.length; i++) {
                if(action.payload === list2[i]) {
                    list2.splice(i,1)
                }
            }
            return list2
        default : 
            return state
    }
}