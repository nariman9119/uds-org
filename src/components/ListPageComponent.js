import '../styles/App.css';
import React, {Component} from 'react';
import RegionList from "./RegionList";
import {connect} from "react-redux";
import {loadOrganizations, loadPage} from "../data/action-creators";
import {bindActionCreators} from "redux";

class ListPageComponent extends Component {
    componentDidMount() {
        this.props.loadOrganizations();
    }
    render() {
        return (
            <div className="container list-page">
                <div className="col-12">
                    <h1 className="list-page-header">Учреждения досуга и спорта в Москве</h1>
                </div>
                {this.props.organizations.map((regionList, i) => {
                    return (<RegionList key={i} regionList={regionList}/>)
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.app.page,
    organizations: state.organizations.list
});

const mapDispatchToProps = (dispatch) => bindActionCreators({loadPage, loadOrganizations},dispatch);

const ConnectedListPageComponent = connect(mapStateToProps, mapDispatchToProps)(ListPageComponent);

export default ConnectedListPageComponent;
