import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Topic from './components/Topic'
import Resource from './components/Resource'

const routes = [
   {
      path: "/",
      exact: true,
      main: () => <Home />
   },
   {
      path: "/about",
      exact: false,
      main: () => <About />
   },
   {
      path: "/topics",
      exact: true,
      main: ({match}) => <Topics match={match}/>
   },
   {
      path: "/topics/:topicId",
      exact: true,
      main: ({match}) => <Topic match={match}/>
   },
   {
      path: "/topics/:topicId/:subId",
      exact: false,
      main: ({match}) => <Resource match={match}/>
   }
]

export default routes