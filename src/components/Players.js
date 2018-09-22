import React , { Component } from 'react'
import { parse } from 'query-string'
import styled from 'styled-components';
import {
   Route , Link
} from 'react-router-dom'
import slug from 'slug'
import {Sidebar} from './Sidebar'
import { getPlayers } from './../api'
import PlayerInfo from './PlayerInfo';

export default class Players extends Component{
   state = {
      players : [],
      loading: true
   }
   componentDidMount(){
      var { location } = this.props
      location.search 
         ? this.fetchPlayers(parse(location.search).teamId)
         : this.fetchPlayers()
   }
   fetchPlayers = (teamId) => {
      getPlayers(teamId)
         .then(players => this.setState(() => {
            return {
               loading: false,
               players
            }
         }))
   }
   render(){
      var { players ,loading } = this.state
      var { location , match } = this.props
      console.log(location)
      return (
         <ContentWrapper>
            <Sidebar
               loading={loading}
               title="Players"
               list={players.map((player) => player.name)}
               {...this.props}
               />
            {
               loading === false 
                  && location.pathname === '/players'
                  && <Select>Please choose a Players</Select>
            } 
            <Route 
               path={`${match.path}/:playerId`} 
               render={({match}) => {
                  if(loading) return null
                  return <PlayerInfo players={players} match={match} />
               }}
            />  
         </ContentWrapper>
      )
   }
}

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
`;

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
const Select = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: -400px;
`;