import React, {Component} from 'react';
import {PersonHorizontal, PersonVertical} from '../Person';

import '../../styles/Person.css'

import avatar1 from "../../static/images/1.png";
import avatar2 from "../../static/images/2.png";
import avatar3 from "../../static/images/3.jpg";

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

export class AdministrationBlock extends Component {
    render() {
        return (
            <div>
                <div className='start-block'>
                    <h2 className='block-title'>Администрация</h2>
                </div>
                <div className='persons-wrapper-row'>
                    {persons.map(person =>
                        <PersonHorizontal key={person.id} {...person}/>
                    )}
                </div>
            </div>
        );
    }
}

export class AboutOrganization extends Component{
    render() {

        return(

            <section className='about-block'>
                <h2 className='about-block-title'>Об организации</h2>
                <div className='about-block-content'></div>
                <div className='about-block-desc'>
                    <p>
                        Муниципальное бюджетное учреждение «Спортивный центр «КОСМОС» создано в 2007 году и осуществляет физкультурно-оздоровительную и спортивно-досуговую работу для жителей Гагаринского района, на основании Закона города Москвы от 25 октября 2006 года № 53
                    </p>
                </div>
            </section>
        )
    }

}




export default {AdministrationBlock, AboutOrganization};