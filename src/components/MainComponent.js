import '../styles/App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import ListPageComponent from "./ListPageComponent";
import OrgComponent from "./OrgComponent";
import {loadPage} from "../data/action-creators";
import {listen} from 'fbjs/lib/EventListener';

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.defaultRouteName = 'uds-orgs';
        this.defaultRoute = '#' + this.defaultRouteName + '/orgsApp';
    }

    componentDidMount() {
        this.props.loadPage(this.props.path);

        if (this.props.page[0] !== this.defaultRouteName) {
            window.location.hash = this.defaultRoute;
        }

        listen(window, 'hashchange', this.onHashChange);
    }

    onHashChange = (event) => {
        this.props.loadPage(window.location.hash.substr(1).split('/'));
    };

    render() {
        document.title = this.props.title;

        return this.props.page[1] === "orgsApp" ? (
            <div className="app_global_wrapper">
                <ListPageComponent/>
            </div>
        ) : this.props.page[1] === "organization" ? (
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
