import React, {Component} from 'react';
import {PersonVertical} from '../Person'

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
                            <PersonVertical key={person.id} {...person}/>
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
