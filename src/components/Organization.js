import '../styles/App.css';
import React, {Component} from 'react';

class Organization extends Component {


    render() {


        return (
            <div className="list-single-organization">
                <a href={this.props.link}>{this.props.name}</a>
            </div>


        );
    }
}

export default Organization