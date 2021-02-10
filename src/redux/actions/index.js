export function addIncomplete(string) {
   return {
    type: 'ADD_INCOMPLETE',
    payload: string
   }
};

export function deleteIncomplete(string) {
    return {
        type: 'DELETE_INCOMPLETE',
        payload : string
    }
};

export function addComplete(string) {
    return {
        type : 'ADD_COMPLETE',
        payload: string
    }
};

export function deleteComplete(string) {
    return {
        type: 'DELETE_COMPLETE',
        payload: string
    }
}

export function inputIncomplete(string) {
    return {
        type: 'INPUT',
        payload: string
    }
}

export function deleteInput() {
    return {
        type:'DELETE',
    }
}