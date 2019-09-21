
import React, {Component} from 'react';
import Person from '../Person'
import avatar1 from '../../static/images/1.png'
import avatar2 from '../../static/images/2.png'
import avatar3 from '../../static/images/3.jpg'
import '../../styles/Person.css'

const persons = [
    {
        id: 0,
        image: avatar1,
        name: 'Харлан Наталья Владимировна',
        jobTitle: 'Заместитель директора',
        jobDescription: 'Занимается программированием программ'
    },
    {
        id: 1,
        image: avatar2,
        name: 'Родионова Александра Сергеевна',
        jobTitle: 'Методист',
        jobDescription: 'Занимается менеджингом программ, программируемых программирующими программистами'
    },
    {
        id: 2,
        image: avatar3,
        name: 'Арбузкин Денис Александрович',
        jobTitle: 'Занятия: Айкидо для детей 9 – 17 лет, Самозащита 18+',
        jobDescription: 'Инструктор Федерации Айкидо России . 1-й дан по Айкидо Акикай. 1-й дан по Шотокан Каратэ до. Мастер спорта по Самбо.'
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