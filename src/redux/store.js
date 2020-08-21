import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactsReducer from "./contactsReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);