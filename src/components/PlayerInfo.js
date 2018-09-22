import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import slug from 'slug'

export default class PlayerInfo extends Component {
  render() {
     var { players , match } = this.props
     var { name , position , number ,teamId, avatar,ppg ,apg,spg,rpg} 
                  = players.find(player => match.params.playerId === slug(player.name))
    return (
      <SectionWrapper>
         <img className="avatar" src={`${avatar}`} alt={`${name}s avatar`}/>
         <h1 className='medium-header'>{name}</h1>
         <h3 className='header'>#{number}</h3>
         <div className='row'>
            <ul className='info-list'>
            <li>Team
               <div>
                  <Link style={{color: '#68809a',}} to={`/${teamId}`}>
                     {teamId[0].toUpperCase() + teamId.slice(1) }
                  </Link>
               </div>
            </li>
            <li>Position<div>{position}</div></li>
            <li>PPG<div>{ppg}</div></li>
            </ul>
            <ul className='info-list'>
            <li>APG<div>{apg}</div></li>
            <li>SPG<div>{spg}</div></li>
            <li>RPG<div>{rpg}</div></li>
            </ul>
         </div>

      </SectionWrapper>
    )
  }
}

const SectionWrapper = styled.div`
  grid-area: 1/2/span 2/span 1;
  display: grid;
  justify-items: center;
  overflow: auto;
  img {
    width: 200px;
    border-radius: 50%;
  }
  h1 {
    font-size: 55px;
    font-family: sans-serif;
  }
  h3 {
    font-size: 35px;
    font-weight: 300;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    .info-list {
      margin-left: 80px;
      line-height: 50px;
    }
    ul li {
      list-style-type: none;
      font-size: 33px;
      a {
        text-decoration: none;
      }
    }
  }
`;