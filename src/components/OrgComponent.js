import '../styles/OrgComponent.css';

import React, {Component} from 'react';
import DescriptionBlock from "./OrgComponents/DescriptionBlock";
import SectionsBlock from "./OrgComponents/SectionsBlock";
import {AboutOrganization, AdministrationBlock} from "./OrgComponents/AdministrationBlock";
import ClubsBlock from "./OrgComponents/ClubsBlock";
import RewardsBlock from "./OrgComponents/RewardsBlock";
import StaffBlock from "./OrgComponents/StaffBlock";
import {connect} from "react-redux";
import {loadCurrentOrganization} from "../data/action-creators";
import {bindActionCreators} from "redux";
import Breadcrumbs from "./OrgComponents/Breadcrumbs";


class OrgComponent extends Component {
    componentDidMount() {
        this.props.loadCurrentOrganization(this.props.page[1]);
    }

    render() {
        const {data} = this.props;

        if (!data) {
            return (
                <div>
                    Загрузка...
                </div>
            )
        }

        return (
            <div className="container org-body">
                <div className="col-12">
                    <DescriptionBlock/>
                    <SectionsBlock schedule_url={data.schedule_url} section_groups={data.section_groups} />
                    <AdministrationBlock persons={data.administration} />
                    <AboutOrganization about={data.about} />
                    <ClubsBlock />
                    <RewardsBlock />
                    <StaffBlock />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.app.page,
    data: state.organizations.current
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadCurrentOrganization
}, dispatch);

const ConnectedOrgComponent = connect(mapStateToProps, mapDispatchToProps)(OrgComponent);

export default ConnectedOrgComponent;
