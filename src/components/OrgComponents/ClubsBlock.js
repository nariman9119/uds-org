import React, {Component} from 'react';
import "../../styles/Clubs.css";

class ClubsBlock extends Component {
    state = {
        active: 0,
        activeImg: 0
    };

    setActiveClub = (index) => {
        this.setState({...this.state, active: index});
    };

    render() {
        const {clubs} = this.props;
        return (
            <section className="clubs">
                <h2 className='clubs-title'>Клубы и студии</h2>
                <div className="clubs-content">
                    <ul className="clubs-list">
                        {clubs.map((club,index) => (
                            <li key={club.id} className={index === this.state.active ? 'active' : ''} onClick={() => {this.setActiveClub(index)}}>{club.address}</li>
                        ))}
                    </ul>
                    <div className="clubs-photos">
                        <div className="club-current-photo">
                            <img src={'/content/'+clubs[this.state.active].photos[this.state.activeImg].photo} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default ClubsBlock;
