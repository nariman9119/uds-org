import '../styles/App.css';
import React, {Component} from 'react';


class Person extends Component {
    render() {
        const {image, name, lineView, jobTitle, jobDescription} = this.props

        return (
            lineView ? <div className='person-container-column'>
            <div className='person-avatar-container'>
                <img src={image} alt='avatar'/>
            </div>
            <span className='person-job-title center-text'>
                {name}
            </span>
            <span className='person-job-description center-text'>
                {jobTitle}
            </span>
        </div> :
            <div className='person-container-row'>
                <div className='person-avatar-container'>
                    <img src={image} alt='avatar'/>
                </div>
                <div className='person-column-description-container'>
                    <span className='person-name'>
                        {name}
                    </span>
                    <span className='person-job-title'>
                        {jobTitle}
                    </span>
                    <span className='person-job-description'>
                        {jobDescription}
                    </span>
                </div>
            </div>
        )
    }
}

export default Person