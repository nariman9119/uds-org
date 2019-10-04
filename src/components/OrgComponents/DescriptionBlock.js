import '../../styles/OrgComponent.css';
import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'

class DescriptionBlock extends Component {

    constructor() {
        super();
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange() {

    }

    render() {
        return (

            <section className='description-block'>
                <div className='description-block-abstract-description'>
                    <h1 >
                        <ContentEditable
                            innerRef={this.contentEditable}
                            html={this.props.data.name} // innerHTML of the editable div
                            disabled={false}       // use true to disable editing
                            onChange={this.handleTitleChange} // handle innerHTML change
                            tagName='h1' // Use a custom HTML tag (uses a div by default)
                            className='description-block-title'
                        />
                    </h1>
                    <div className='description-block-description' contenteditable="true">
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
