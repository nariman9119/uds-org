
import React, {Component} from 'react';
import Person from '../Person'
import avatar1 from '../../static/images/1.png'
import avatar2 from '../../static/images/2.jpg'
import avatar3 from '../../static/images/3.jpg'
import '../../styles/Person.css'

const persons = [
    {
        id: 0,
        image: avatar1,
        name: 'Болотов Шрек Амангельдинович',
        jobTitle: 'Программист',
        jobDescription: 'Занимается программированием программ'
    },
    {
        id: 1,
        image: avatar2,
        name: 'Котлетов Сабыржан Тимурович',
        jobTitle: 'Менеджер',
        jobDescription: 'Занимается менеджингом программ, программируемых программирующими программистами'
    },
    {
        id: 2,
        image: avatar3,
        name: 'Амангельдинов Тактар Обрыгай-углы',
        jobTitle: 'Уборщица',
        jobDescription: 'Занимается уборкой после менеджеров, занимающихся менеджингом программ, программируемых программирующими программистами'
    },


]

class StaffBlock extends Component {

    constructor(props) {
        super(props)
        this.changeView = this.changeView.bind(this)
        this.state = {
            lineView: false
        }
    }
    changeView() {
        console.log(this.state.lineView)
        this.setState({
            lineView: !this.state.lineView
        })
    }

    render() {
        return (
            <>
            <div onClick={this.changeView} className='change-view-button'>Change View</div>
            <div className={this.state.lineView ? 'persons-wrapper-row' : 'persons-wrapper-column'}>
                {persons.map(person =>
                    <Person key={person.id} {...person} lineView={this.state.lineView}/>
                )}
            </div>
            </>
            );
    }
}


export default StaffBlock;