import React from 'react'
import { Link , Route } from 'react-router-dom'
import slug from 'slug'
import styled from 'styled-components'

function CustomLink({to,children}){
   return (
      <Route 
         path={to.pathname} 
         children={({match}) => (
            <li style={{fontWeight: match ? "bold" : "normal"}}>
               <Link to={to}>
                  { children }
               </Link>
            </li>
         )}
         />
      
   )
}
export const Sidebar = ({list,loading,title,location,match}) => {
   if(loading) return <Loading>Loading...</Loading>
   return (
      <NavbarWrapper>
         <Title>{title}</Title>
         <NavLinks>
         {
            list.map((item,index) => (
               <CustomLink 
                  key={index}
                  to={{
                     pathname: `${match.url}/${slug(item)}`,
                     search: location.search
                  }}
               >
                  {item.toUpperCase()}
               </CustomLink>
            ))
         }
         </NavLinks>
         
         
      </NavbarWrapper>
   )
}

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
`;

const Loading = styled.h1`
  grid-area: 1/2/span 1/span 1;
  display: grid;
  justify-content: center;
  margin-right: 200px;
  font-size: 60px;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 25px 0;
  font-weight: 100;
  grid-area: 1/1/span 1/span 1;
`;

const NavLinks = styled.ul`
  grid-area: 2/1/span 1/span 1;
  padding: 0;
  position: absolute;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: black;
      opacity: 0.85;
      line-height: 22px;
      font-family: sans-serif;
    }
  }
`;