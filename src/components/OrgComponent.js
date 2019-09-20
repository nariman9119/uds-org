import '../styles/OrgComponent.css';

import React, {Component} from 'react';
import DescriptionBlock from "./OrgComponents/DescriptionBlock";
import SectionsBlock from "./OrgComponents/SectionsBlock";

class OrgComponent extends Component {
    render() {
        return (
            <div>
            <DescriptionBlock/>
            <SectionsBlock/>
            </div>
        );
    }
}


export default OrgComponent;