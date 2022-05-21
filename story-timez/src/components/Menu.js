import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import './MenuResponse.css'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Menu = () => {

  const [menustyle, setMenuStyle] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);

  const handleResponseMenu = () => {

      if (window.innerWidth < 960) {
        setMenuStyle(!menustyle);
      setToggleButton(!toggleButton);
      }
  }

  return (
    <HeaderStyle>
        <Logo>
           
            <MenuLinks to='/'> StoryTimez</MenuLinks>

        </Logo>

<RightMenu>

      <div  className={menustyle ? `ListRightMenu` : `ListRightMenuSmall`}>
        <nav className='menu-list'>
            <MenuList>

                <li><MenuLinks to='/about'>About</MenuLinks></li>
                <li><MenuLinks to='/contact'>Contact</MenuLinks></li>
                <li><MenuLinks to='/stories'>Stories</MenuLinks></li>
            </MenuList>
        </nav>

       <LoginButton>
         <ButtonLink to='/contact'>Login/Register</ButtonLink>
       </LoginButton>

       </div>

       <ResponseButton  onClick={handleResponseMenu}> {toggleButton ? <FaBars /> : <FaTimes/>} </ResponseButton>

</RightMenu>
    </HeaderStyle>
  )
}


const HeaderStyle = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;

`;

const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    padding-top: 0.5em;
    padding-left: 1em;
`;



const RightMenu = styled.div`
  display:flex;



`;
 

const MenuList = styled.nav`
list-style: none;

@media (max-width: 768px) {
    display:grid;
    gap:2em;

}

  li{
    display:inline-block;
    padding:1.2em;
  }


    
`;


const MenuLinks = styled(Link)`
text-decoration: none;
color: rgb(0, 170, 255);


  &:active{

    background-color:green;
    padding:3em;
  }
    
`;


const LoginButton = styled.div`
background-color:rgb(0, 170, 255);
margin-right: 1em;
width:fit-content;
height:fit-content;
padding: 0.5em;    
margin-top: 0.5em;
cursor: pointer;
border-radius: 5px;

@media (max-width: 768px) {
  justify-self: center;
  margin-bottom:10px;

}

    
`;

const ButtonLink = styled(Link)`

text-decoration: none;
font-weight: bold;
color: white;


`;








const ResponseButton = styled.div`
    font-weight:bold;
    padding-top:1.2em;
    padding-bottom:1em;
    display:none;

    @media (max-width: 768px) {
      display:grid;
      cursor:pointer;
  
    }
`;


export default Menu