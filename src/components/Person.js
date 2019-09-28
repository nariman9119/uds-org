import '../styles/App.css';
import '../styles/Person.css';
import React, {Component} from 'react';


export class PersonHorizontal extends Component {
    render() {
        const {photo, name, position} = this.props;

        return (
            <div className='person-container-column'>
                <div className='person-avatar-container'>
                    <img src={`http://localhost:8090/content/${photo}`} alt='avatar'/>
                </div>
                <span className='person-job-title center-text'>
                {name}
            </span>
                <span className='person-job-description center-text'>
                {position}
            </span>
            </div>

        )
    }
}


export class PersonVertical extends Component {
    render() {
        const {image, name, jobTitle, jobDescription} = this.props
        return(

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

export default {PersonVertical, PersonHorizontal};
