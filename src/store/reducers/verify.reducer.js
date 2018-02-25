import { 
    VERIFY_USER,
    SET_VERIFIED_USER
} from '../actions/verify.types';

const initialState = {
    state: 'INITIAL',
    user: null
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