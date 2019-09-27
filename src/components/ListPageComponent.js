import '../styles/App.css';
import React, {Component} from 'react';
import RegionList from "./RegionList";
import {connect} from "react-redux";
import {loadPage} from "../data/action-creators";

class ListPageComponent extends Component {
    constructor(props) {
        super(props);

        this.getRegionList = this.getRegionList.bind(this)
    }

    async getRegionList() {
        return await fetch('/api/organizations').json();
    }

    render() {
        return (
            <div className="container list-page">
                <div className="col-12">
                    <h1 className="list-page-header">Учреждения досуга и спорта в Москве</h1>
                </div>
                {this.getRegionList().map((regionList, i) => {
                    return (<RegionList key={i} regionList={regionList}/>)
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.app.page,
});

const mapDispatchToProps = (dispatch) => ({
    loadPage: (page) => dispatch(loadPage(page))
});

const ConnectedListPageComponent = connect(mapStateToProps, mapDispatchToProps)(ListPageComponent);

export default ConnectedListPageComponent;
