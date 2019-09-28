import '../../styles/OrgComponent.css';
import React, {Component} from 'react';


class DescriptionBlock extends Component {
    render() {
        return (

            <section className='description-block'>
                <div className='description-block-abstract-description'>
                    <h1 className='description-block-title'>{this.props.data.name}</h1>
                    <div className='description-block-description'>
                        {this.props.data.description}
                    </div>
                    <div className='description-block-location'>
                        {this.props.data.address}
                    </div>
                    <button className='enroll'>Записаться</button>
                </div>

                <div className='description-logo'>
                    <img className='description-block-logo' src = {`http://localhost:8090/content/${this.props.data.logo}`} alt='лого'/>
                </div>
            </section>

        );
    }
}


export default DescriptionBlock;
