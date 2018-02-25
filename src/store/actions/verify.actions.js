import { SET_VERIFIED_USER } from './verify.types';

export function getUser(payload) {
    return {
        type: SET_VERIFIED_USER,
        payload
    }
}