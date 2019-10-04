import '../../styles/OrgComponent.css';
import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateMainInfo} from "../../data/action-creators";

class DescriptionBlock extends Component {
    updateName = (e) => {
        this.props.updateMainInfo({ id: this.props.data.id, name: e.target.value })
    };
    updateShortDescription = (e) => {
        this.props.updateMainInfo({ id: this.props.data.id, short_description: e.target.value })
    };
    updateAddress = (e) => {
        this.props.updateMainInfo({ id: this.props.data.id, address: e.target.value })
    };

    render() {
        return (

            <section className='description-block'>
                <div className='description-block-abstract-description'>
                    <ContentEditable
                        html={this.props.data.name}
                        disabled={false}
                        onChange={this.updateName}
                        tagName='h1'
                        className='description-block-title'
                    />
                    <ContentEditable
                        html={this.props.data.short_description}
                        disabled={false}
                        onChange={this.updateShortDescription}
                        tagName='div'
                        className='description-block-description'
                    />
                    <ContentEditable
                        html={this.props.data.address}
                        disabled={false}
                        onChange={this.updateAddress}
                        tagName='div'
                        className='description-block-location'
                    />
                    <button className='enroll'>Записаться</button>
                </div>

                <div className='description-logo'>
                    <img className='description-block-logo' src = {`http://localhost:8090/content/${this.props.data.logo}`} alt='лого'/>
                </div>
            </section>

        );
    }
}

const mapStateToProps = (state) => ({
    data: state.organizations.current
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateMainInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionBlock);
