import '../styles/OrgComponent.css';

import React, {Component} from 'react';
import DescriptionBlock from "./OrgComponents/DescriptionBlock";
import SectionsBlock from "./OrgComponents/SectionsBlock";
import {AdministrationBlock, AboutOrganization} from "./OrgComponents/AdministrationBlock";
import ClubsBlock from "./OrgComponents/ClubsBlock";
import RewardsBlock from "./OrgComponents/RewardsBlock";
import StaffBlock from "./OrgComponents/StaffBlock";
import {connect} from "react-redux";
import {unselectOrganization} from "../data/action-creators";

class OrgComponent extends Component {
    render() {
        if (typeof this.props.organization === "undefined") {
            return false;
        }

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
    organization: state.app.organization,
});

const mapDispatchToProps = (dispatch) => ({
    unselectOrganization: () => dispatch(unselectOrganization())
});

const ConnectedOrgComponent = connect(mapStateToProps, mapDispatchToProps)(OrgComponent);

export default ConnectedOrgComponent;