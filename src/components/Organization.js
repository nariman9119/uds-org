import '../styles/App.css';
import React, {Component} from 'react';
import {changeTitle, loadPage} from "../data/action-creators";
import {connect} from "react-redux";

class Organization extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getUrl = this.getUrl.bind(this);
    }

    componentDidMount() {
        this.props.changeTitle('Organizations');
    }

    getUrl() {
        return '#uds-orgs/organization/' + this.props.link;
    }

    handleClick(e) {
        e.preventDefault();
        history.pushState({}, this.props.name, this.getUrl());
        this.props.loadPage(this.getUrl().substr(1).split('/'));
    }

    render() {
        return (
            <div className="list-single-organization">
                <a href={this.getUrl()} onClick={e => this.handleClick(e)}>{this.props.name}</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    loadPage: (page) => dispatch(loadPage(page)),
    changeTitle: (title) => dispatch(changeTitle(title))
});

const ConnectedOrganization = connect(mapStateToProps, mapDispatchToProps)(Organization);

export default ConnectedOrganization;
