import React, {Component} from 'react';

import {PersonHorizontal, PersonVertical} from "uds-ui";

import '../../styles/Person.css'
import '../../styles/OrgComponent.css'
import {bindActionCreators} from "redux";
import {updateMainInfo} from "../../data/action-creators";
import {connect} from "react-redux";


class StaffBlock extends Component {


    render() {
        return (
            <div className='staff-block'>
                <h2 className='block-title'>Педагогический состав</h2>
                <div className='persons-wrapper-row staff-block-staff'>
                    {
                        this.props.data.stuff.map(person =>
                            <PersonHorizontal key={person.id} name={person.name} image={"http://" + window.location.host+"/content/"+person.photo} jobTitle={person.jobTitle} jobDescription={person.jobDescription}/>
                        )}

                </div>
                <div className='staff-block-footer'>
                    <div className='staff-block-footer-title'>Достигайте своих целей</div>
                    <button className='staff-block-footer'>Записаться</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.organizations.current
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateMainInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffBlock);
