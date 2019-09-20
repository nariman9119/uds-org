import '../styles/App.css';
import React, {Component} from 'react';


class Person extends Component {
    render() {
        const {image, jobTitle, jobDescription} = this.props

        return (
        <div className='person-container'>
            <div className='person-avatar-container'>
                <img src={image} alt='avatar'/>
            </div>
            <span className='person-job-title'>
                {jobTitle}
            </span>
            <span className='person-job-description'>
                {jobDescription}
            </span>
        </div>
        )
    }
}

export default Person