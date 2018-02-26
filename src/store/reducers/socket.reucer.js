import { 
    SET_SOCKET
} from '../actions/verify.types';

const initialState = {
    state: 'INITIAL',
    socket: null
};

export function socketReducer(state = initialState, action) {

    switch(action.type) {

        case SET_SOCKET:
            return {
                state,
                socket: action.payload
            }

        default:
            return state;
    }
}