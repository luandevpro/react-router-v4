import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import {
   Home,
   Players,
   Teams,
   Navbar,
   NotFound
} from './components'

export default class App extends Component {
  render() {
    return (
      <Router>
          <Container>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/players" component={Players}/>
              <Route path="/teams" component={Teams}/>
              <Route component={NotFound}/>
            </Switch>
          </Container>
      </Router>
    );
  }
}
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0;
`
