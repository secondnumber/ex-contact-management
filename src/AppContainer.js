import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import {addContact} from "./redux/actions";

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    allContacts: state.contacts.allContacts
});

const AppContainer = connect(mapStateToProps, {addContact})(App);

export default AppContainer;