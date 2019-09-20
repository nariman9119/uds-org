import '../styles/App.css';
import React, {Component} from 'react';
import {selectOrganization} from "../data/action-creators";
import {connect} from "react-redux";

class Organization extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.selectOrganization(id);
    }

    render() {
        return (
            <div className="list-single-organization">
                <a onClick={this.handleClick} id={this.props.id}>{this.props.name}</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    selectOrganization: (organization) => dispatch(selectOrganization(organization)),
});

const ConnectedOrganization = connect(mapStateToProps, mapDispatchToProps)(Organization);

export default ConnectedOrganization;