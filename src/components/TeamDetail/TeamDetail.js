import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetail.css';
import fbImg from '../../images/Facebook.png';
import twitterImg from '../../images/Twitter.png';
import youtubeImg from '../../images/YouTube.png';
import foundedImg from '../../images/found 1.png';
import flagImg from '../../images/flag (1) 1.png';
import footballImg from '../../images/football (1) 1.png';
import genderImg from '../../images/male-gender-sign 1.png';
import male from '../../images/male.png';
import female from '../../images/female.png';


const TeamDetail = () => {

    const {teamId} = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const newData = data.teams[0];
            setTeam(newData)
        })
    }, [teamId])

    console.log(team.strTeam)

    const {strTeam, strTeamBadge, intFormedYear, strCountry, strSport, strGender, strDescriptionEN} = team;

    let groupImg;
    if(strGender === 'Male'){
        groupImg = male;
    }else if(strGender === 'Female') {
        groupImg = female;
    }

    return (
        <div className="team-detail">

            <div className="title">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="details">
            <div className="container">
                
                <div className="team-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-card">
                                    <h4>{strTeam}</h4>
                                    <div className="info d-flex">
                                        <img src={foundedImg} alt="" />
                                        <p>Founded: {intFormedYear}</p>
                                    </div>
                                    <div className="info d-flex">
                                        <img src={flagImg} alt="" />
                                        <p>Country: {strCountry}</p>
                                    </div>
                                    <div className="info d-flex">
                                        <img src={footballImg} alt="" />
                                        <p>Sports Type: {strSport}</p>
                                    </div>
                                    <div className="info d-flex">
                                        <img src={genderImg} alt="" />
                                        <p>Gender: {strGender}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right-card d-flex justify-content-end">
                                <img src={groupImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>


                <div className="social">
                    <a href="//facebook.com"><img src={fbImg} alt="" /></a>
                    <a href="//twitter.com"><img src={twitterImg} alt="" /></a>
                    <a href="//youtube.com"><img src={youtubeImg} alt="" /></a>
                </div>
            </div>
            </div>

            
            
        </div>
    );
};

export default TeamDetail;