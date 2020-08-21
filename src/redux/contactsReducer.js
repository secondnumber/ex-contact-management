import { ADD_CONTACT } from './actionTypes';
import { DELETE_CONTACT } from './actionTypes';

const initialState = {
    allContacts: [],

};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            return {
                ...state,
                allContacts: [...state.allContacts, action.payload],
            };
        }
        case DELETE_CONTACT: {
            debugger
            return {
                ...state,
                allContacts: state.allContacts.filter(contact => contact.key !== action.payload),
            };
        }
        default: return state;
    }
};

export default contactsReducer;