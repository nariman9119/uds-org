
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
        jobTitle: 'Программист',
        jobDescription: 'Занимается программированием программ'
    },
    {
        id: 1,
        image: avatar2,
        jobTitle: 'Менеджер',
        jobDescription: 'Занимается менеджингом программ, программируемых программирующими программистами'
    },
    {
        id: 2,
        image: avatar3,
        jobTitle: 'Уборщица',
        jobDescription: 'Занимается уборкой после менеджеров, занимающихся менеджингом программ, программируемых программирующими программистами'
    },


]

class StaffBlock extends Component {
    render() {
        return (
            <div className='persons-wrapper'>
                {persons.map(person =>
                    <Person key={person.id} {...person}/>
                )}
            </div>
            );
    }
}


export default StaffBlock;