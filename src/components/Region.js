import '../styles/App.css';
import React, {Component} from 'react';
import Organization from "./Organization";


class Region extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }

    render() {
        return (
            <div className="list-single-region">
                <div className={
                    'list-single-region-name '
                    + (this.props.organizations.length > 0 ? 'list-single-region-name-enabled ' : 'list-single-region-name-disabled ')
                    + (this.state.isOpened ? 'list-single-region-name-opened' : 'list-single-region-name-closed')
                } onClick={this.handleToggle}>
                    {this.props.name}
                </div>
                <div className={
                    'list-single-region-organizations '
                    + (this.state.isOpened ? 'list-single-region-organizations-opened' : '')
                }>
                    {this.props.organizations.map((organization, i) => {
                        return (<Organization key={i} name={organization.name} link={organization.link}/>)
                    })}
                </div>
            </div>
        );
    }
}


export default Region