import React, { useState, useEffect } from 'react';
import './Home.css';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const newData = data.teams;
            setTeams(newData);
        })

       // console.log(teams.strAlternate)
        
    }, [])
    return (
        <div className="home">

            <div className="title">
                <h1>Team Tracker</h1>
            </div>

            <div className="home-body p-5">
                <div className="container">
                    

                    <div className="single-team">
                        {
                            teams.map(team => <Team team={team}></Team>)
                        }
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Home;