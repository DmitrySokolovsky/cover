import { 
    SET_VERIFIED_USER,
    SET_SOCKET
} from '../actions/verify.types';

const initialState = {
    state: 'INITIAL',
    user: null,
    socket: null
};

export function verifyReducer(state = initialState, action) {

    switch(action.type) {
        case SET_VERIFIED_USER:
            return {
                state,
                user: action.payload
            }

        default:
            return state;
    }
}