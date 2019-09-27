import '../styles/App.css';
import React, {Component} from 'react';
import {Provider} from "react-redux";
import {store} from "../data/store";
import MainComponent from "./MainComponent";

class orgApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainComponent path={window.location.pathname.split('/').slice(1)}/>
            </Provider>
        );
    }
}

export default orgApp;