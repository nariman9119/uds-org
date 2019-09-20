import '../../styles/OrgComponent.css';
import React, {Component} from 'react';


class DescriptionBlock extends Component {
    render() {
        return (

            <section className='description-block'>
                <div className='description-block-abstract-description'>
                    <h1 className='description-block-title'>МБУ "СЦ" Космос</h1>
                    <div className='description-block-description'>
                        Муниципальное бюджетное учреждение «Спортивный центр «КОСМОС» создано в 2007 году и осуществляет
                        физкультурно-оздоровительную и спортивно-досуговую работу для жителей Гагаринского района, на
                        основании Закона города Москвы от 25 октября 2006 года № 53.
                    </div>
                    <div className='description-block-location'>
                        г.Москва, ЮЗАО, Ленинский проспект, д.64/2
                    </div>
                    <button className='enroll'>Записаться</button>
                </div>
                <div className='description-logo'>
                    <img src = '/src/static/images/kosmos-logo.png' alt='лого'/>
                </div>
            </section>

        );
    }
}


export default DescriptionBlock;