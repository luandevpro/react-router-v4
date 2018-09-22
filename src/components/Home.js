import React, { Component } from 'react'
import styled from "styled-components"
import { getTeamNames } from "./../api"
import TeamLogo from "./TeamLogo"

export default class Home extends Component {
   state = {
      getTeamNames: []
   }
   componentDidMount(){
      getTeamNames()
         .then((getTeamNames) => this.setState(() => {
            return {
               getTeamNames: getTeamNames
            }
         }))
   }
   render() {
      var { getTeamNames} = this.state
      console.log(getTeamNames)
      return (
         <div>
            <Title>Hash History Basketball League</Title>
            <Description>Select a team</Description>
            <LogoWrapper>
               {
                  getTeamNames.map((getTeamName , index) => {
                     return (
                        <TeamLogo 
                           key={index}
                           id={getTeamName}
                           width="140px"
                        />
                     )
                  })
               }
            </LogoWrapper>
         </div>
      )
   }
}


export const HomeWrapper = styled.div`
  display: grid;
  justify-content: center;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 105px;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: 300;
`;

const LogoWrapper = styled.div`
  text-align: center;
  padding-top: 25px;
`;