import { SET_VERIFIED_USER, SET_SOCKET } from './verify.types';

export function getUser(payload) {
    return {
        type: SET_VERIFIED_USER,
        payload
    }
}

export function setSocket(payload) {
    return {
        type: SET_SOCKET,
        payload
    }
}