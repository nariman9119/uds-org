import '../../styles/OrgComponent.css';
import React, {Component} from 'react';

class SectionsBlock extends Component {
    render() {
        return (
            <div>
                <div className='sections-footer'>
                    <h2 className='sections-title'>Секции</h2>
                    <a className='sections-doc' target='_blank' href='/src/static/schedule/kosmos-schedule.pdf'>
                        <span>
                            Расписание
                        </span>
                    </a>
                </div>

            </div>
        );
    }
}


export default SectionsBlock;