import '../styles/OrgComponent.css';

import React, {Component} from 'react';
import DescriptionBlock from "./OrgComponents/DescriptionBlock";
import SectionsBlock from "./OrgComponents/SectionsBlock";
import AdministrationBlock from "./OrgComponents/AdministrationBlock";
import ClubsBlock from "./OrgComponents/ClubsBlock";
import RewardsBlock from "./OrgComponents/RewardsBlock";
import StaffBlock from "./OrgComponents/StaffBlock";

class OrgComponent extends Component {
    render() {
        return (
            <div>
                <DescriptionBlock/>
                <SectionsBlock/>
                <AdministrationBlock/>
                <ClubsBlock/>
                <RewardsBlock/>
                <StaffBlock/>
            </div>
        );
    }
}


export default OrgComponent;