import '../styles/OrgComponent.css';

import React, {Component} from 'react';
import DescriptionBlock from "./OrgComponents/DescriptionBlock";
import SectionsBlock from "./OrgComponents/SectionsBlock";
import {AboutOrganization, AdministrationBlock} from "./OrgComponents/AdministrationBlock";
import ClubsBlock from "./OrgComponents/ClubsBlock";
import RewardsBlock from "./OrgComponents/RewardsBlock";
import StaffBlock from "./OrgComponents/StaffBlock";
import {connect} from "react-redux";
import {changeTitle} from "../data/action-creators";

class OrgComponent extends Component {
    componentDidMount() {
        this.props.changeTitle('Single Organization');
    }

    render() {
        return (
            <div>
                <DescriptionBlock/>
                <SectionsBlock/>
                <AdministrationBlock/>
                <AboutOrganization/>
                <ClubsBlock/>
                <RewardsBlock/>
                <StaffBlock/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.app.page,
});

const mapDispatchToProps = (dispatch) => ({
    changeTitle: (title) => dispatch(changeTitle(title))
});

const ConnectedOrgComponent = connect(mapStateToProps, mapDispatchToProps)(OrgComponent);

export default ConnectedOrgComponent;