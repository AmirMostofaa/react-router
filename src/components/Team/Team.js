import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {idTeam, strSport, strTeam,  strTeamBadge} = props.team;
    return (
        <div className="team">
            <div className="team-img">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="team-info">
                <h4>{strTeam}</h4>
                <p>Sports type: {strSport}</p>

                <Link to={"/team/"+idTeam}>
                    <button>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
                
            </div>
            
            
        </div>
    );
};

export default Team;