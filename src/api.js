import {
   teams,
   players
 } from './data'
 
 let cachedPlayers = null
 let cachedTeams = {}
 let cachedTeamNames = null

export function getPlayers (teamId) {
  return new Promise((res) => {
    if (cachedPlayers === null) {
      cachedPlayers = players
      return setTimeout(() => res(teamId ? teams[teamId].players : cachedPlayers), 800)
    }

    return res(teamId ? teams[teamId].players : cachedPlayers)
  })
}

export function getTeam (teamId) {
  return new Promise((res) => {
    if (typeof cachedTeams[teamId] === 'undefined') {
      cachedTeams[teamId] = teams[teamId]
      return setTimeout(() => res(cachedTeams[teamId]), 800)
    }

    return res(cachedTeams[teamId])
  })
}

export const getTeamNames = () => {
   return new Promise(res => {
      if(!cachedTeamNames){
         cachedTeamNames = Object.keys(teams)
         return setTimeout(() => res(cachedTeamNames) , 400)
      }
      return res(cachedTeamNames)
   })
}