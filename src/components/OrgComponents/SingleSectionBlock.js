import '../../styles/OrgComponent.css';
import React, {Component} from 'react';

class SingleSectionBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        let sections = '';
        let classes = 'sections-age section-color';

        if (this.state.isOpened) {
            sections = (
                <div className="container">
                    {this.props.sections.map((section, i) => {
                        return (
                            <div className="col-6" key={i}>
                                <div className="single-opened-section">
                                    <span>{section.name}</span>
                                    <button>Записаться</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            );
            classes += ' section-opened';
        }
        return (
            <div className={classes}>
                <div className='sections-age-1' onClick={this.handleClick}>
                    <svg viewBox="0 0 20 12" className="sections-svg">
                        <path fill="#1E1D20" fill-rule="nonzero"
                              d="M18.257.331a1 1 0 1 1 1.486 1.338l-9 10a1 1 0 0 1-1.486 0l-9-10A1 1 0 0 1 1.743.331L10 9.505 18.257.331z"
                              opacity=".5"></path>
                    </svg>
                    <h3 className='sections-age-title'>{ this.props.name}</h3>
                </div>
                {sections}
            </div>
        );
    }
}


export default SingleSectionBlock;
