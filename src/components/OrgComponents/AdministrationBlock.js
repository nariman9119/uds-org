import React, {Component} from 'react';
import {PersonHorizontal, PersonVertical} from "uds-ui";

import '../../styles/Person.css'

export class AdministrationBlock extends Component {
    render() {
        return (
            <div>
                <div className='start-block'>
                    <h2 className='block-title'>Администрация</h2>
                </div>
                <div className='persons-wrapper-row'>
                    {console.log(window.location.host)}
                    {this.props.persons.map(person =>
                        <PersonVertical key={person.id} name={person.name} image={"http://" + window.location.host+"/content/"+person.photo}/>
                    )}
                </div>
            </div>
        );
    }
}

export class AboutOrganization extends Component{
    render() {

        return(

            <section className='about-block'>
                <h2 className='about-block-title'>Об организации</h2>
                <div className='about-block-content'></div>
                <div className='about-block-desc'>
                    <p>
                        {this.props.about}
                    </p>
                </div>
            </section>
        )
    }

}




export default {AdministrationBlock, AboutOrganization};
