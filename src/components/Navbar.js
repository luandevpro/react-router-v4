import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => (
   <NavbarWrapper>
      <Link to="/">Home</Link>
      <nav className="nav-links">
         <Link to="/players">Players</Link>
         <Link to="/teams">Teams</Link>
      </nav>
   </NavbarWrapper>  
)

export const NavbarWrapper = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 50px 100px;
  justify-content: space-between;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  .nav-links a{
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`