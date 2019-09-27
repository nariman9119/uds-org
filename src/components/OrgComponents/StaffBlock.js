import React, {Component} from 'react';
import {PersonVertical} from '../Person'
import avatar1 from '../../static/images/1.png'
import avatar2 from '../../static/images/2.png'
import avatar3 from '../../static/images/3.jpg'
import '../../styles/Person.css'
import '../../styles/OrgComponent.css'

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


    render() {
        return (
            <div className='staff-block'>
                <h2 className='block-title'>Педагогический состав</h2>
                <div className='persons-wrapper-row staff-block-staff'>
                    {persons.map(person =>
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


export default StaffBlock;