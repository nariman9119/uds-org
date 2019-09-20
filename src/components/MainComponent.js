import '../styles/App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import ListPageComponent from "./ListPageComponent";
import OrgComponent from "./OrgComponent";
import {selectOrganization} from "../data/action-creators";

class MainComponent extends Component {
    render() {
        return (
            <div className="app_global_wrapper">
                <ListPageComponent/>
                <OrgComponent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedOrganization: state.app.organization,
});

const mapDispatchToProps = (dispatch) => ({
    selectOrganization: (organization) => dispatch(selectOrganization(organization))
});

const ConnectedMainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default ConnectedMainComponent;