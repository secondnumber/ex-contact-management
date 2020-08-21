import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/store';
import {persistor} from './redux/store';
import { Provider } from 'react-redux';
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

