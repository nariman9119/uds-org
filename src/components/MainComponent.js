import '../styles/App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import ListPageComponent from "./ListPageComponent";
import OrgComponent from "./OrgComponent";
import {loadPage} from "../data/action-creators";

class MainComponent extends Component {
    componentDidMount() {
        this.props.loadPage(this.props.path);

        window.onpopstate = ev => this.props.loadPage(window.location.pathname.split("/").slice(1));
    }

    render() {
        document.title = this.props.title;
        console.log(this.props.page);

        return this.props.page[0] === "" ? (
            <div className="app_global_wrapper">
                <ListPageComponent/>
            </div>
        ) : this.props.page[0] === "organization" ? (
            <div className="app_global_wrapper">
                <OrgComponent/>
            </div>
        ) : (
            <div className="app_global_wrapper">
                <p>404</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.app.page,
    title: state.app.title
});

const mapDispatchToProps = (dispatch) => ({
    loadPage: (page) => dispatch(loadPage(page))
});

const ConnectedMainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default ConnectedMainComponent;
