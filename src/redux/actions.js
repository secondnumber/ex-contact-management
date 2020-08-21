import {ADD_CONTACT} from "./actionTypes";
import {DELETE_CONTACT} from "./actionTypes";

export const addContact = (contact) => {
    return (dispatch) => {
        dispatch ({
            type: ADD_CONTACT,
            payload: contact,
        })
    }
};

export const deleteContact = (key) => {
    return (dispatch) => {
        dispatch ({
            type: DELETE_CONTACT,
            payload: key,
        })
    }
};