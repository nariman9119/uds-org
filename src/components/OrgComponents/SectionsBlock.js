import '../../styles/OrgComponent.css';
import React, {Component} from 'react';
import SingleSectionBlock from "./SingleSectionBlock";

class SectionsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            colour: 0
        };

        this.types = [{
            'name': '2-6 лет',
            'sections': [
                {'name': 'ОФП для дошкольного возраста'},
                {'name': 'Самбо'},
                {'name': 'Студия раннего развития "Кузя"'},
            ]
        }, {
            'name': '7-11 лет',
            'sections': [
                {'name': 'ОФП для дошкольного возраста'},
                {'name': 'Самбо'},
                {'name': 'Студия раннего развития "Кузя"'},
            ]
        }];
    }

    render() {
        return (
            <section>
                <div className='start-block'>
                    <h2 className='block-title'>Секции</h2>
                    <a className='sections-block-schedule' target='_blank'
                       href={this.props.schedule_url}>
                        <span className='sections-block-schedule'>
                            Расписание
                        </span>
                        {/*TODO change svg format*/}
                        <svg width="20" height="24" viewBox="0 0 20 24" className="sc-hMqMXs gAfeRK sc-bwzfXH bGgvvP">
                            <path fill="#003eff" fillRule="nonzero"
                                  d="M2.785 24A2.776 2.776 0 0 1 0 21.233V2.767A2.776 2.776 0 0 1 2.785 0h14.43A2.776 2.776 0 0 1 20 2.767v18.466A2.776 2.776 0 0 1 17.215 24H2.785zM1.509 2.767v18.466c0 .698.573 1.267 1.276 1.267h14.43c.703 0 1.276-.569 1.276-1.267V2.767c0-.699-.573-1.267-1.276-1.267H2.785c-.703 0-1.276.568-1.276 1.267zm3.95 5.905v1.613H4.444V5.833A8.44 8.44 0 0 1 5.83 5.74c.633 0 1.085.12 1.387.361.29.228.486.603.486 1.045 0 .441-.149.816-.418 1.07-.35.329-.87.476-1.475.476-.135 0-.256-.007-.35-.02zm0-2.123v1.333c.088.02.196.026.344.026.546 0 .882-.274.882-.736 0-.415-.29-.663-.801-.663-.21 0-.35.02-.425.04zm6.092 3.2c-.479.395-1.206.583-2.095.583-.532 0-.91-.034-1.165-.068v-4.43c.377-.061.869-.095 1.387-.095.863 0 1.422.155 1.86.483.471.348.767.903.767 1.7 0 .864-.316 1.459-.754 1.827zM9.32 6.563v2.952c.087.02.229.02.357.02.93.007 1.536-.502 1.536-1.58.006-.937-.546-1.432-1.428-1.432-.23 0-.378.02-.465.04zm4.624 1.908v1.814h-1.03V5.773h2.774v.837h-1.744v1.03h1.63v.83h-1.63zm-10.36 6.041h12.83v1.5H3.585v-1.5zm0 2.214h12.83v1.5H3.585v-1.5zm0 2.213h12.83v1.5H3.585v-1.5z"></path>
                        </svg>
                    </a>
                </div>

                {this.types.map((type, i) => {
                    return (<SingleSectionBlock key={i} name={type.name} sections={type.sections}/>)
                })}
            </section>
        );
    }
}


export default SectionsBlock;
