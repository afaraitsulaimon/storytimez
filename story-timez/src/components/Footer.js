import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterDesign>

        <div>
        <Logo>
           
           <LogoFooterLink to='/'> StoryTimez</LogoFooterLink>

       </Logo>
        </div>



        <div>
            
            <InfoList>
            <h2>Information</h2>
                <li>Earn As a writer</li>
                <li>Privacy Policy</li>
                <li>How to Post</li>
                <li>Copyright Policy</li>
                <li>E</li>
            </InfoList>
        </div>



        <div style={{ 'textAlign':'center', 'paddingTop':'1em'}}>
        <span style={{ 'fontWeight':'bold', 'fontSize':'1.2em' }}>Join Us on Social Media</span>

            <SocialMediaList>
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
               
            </SocialMediaList>
        </div>
    </FooterDesign>
  )
}


const FooterDesign = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    background-color:#80808073;

    @media (max-width: 768px) {
        display:grid;
        justify-content:center;
      
      }
`;

const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    padding-left: 1em;
    display:flex;
    align-items:center;
    height:100%;
    

    @media (max-width: 768px) {
        
        position:relative;
        top:280px;
        justify-content:center;      
      }
`;



const LogoFooterLink = styled(Link)`
    text-decoration:none;
    color:rgb(0,170,255);
`;





const InfoList = styled.ul`

li{

    list-style:none;
    text-align:center;
}

h2{
    text-align:center;
}
`;

const SocialMediaList = styled.ul`


li{

    list-style:none;
    text-align:center;
    display:inline-block;
    padding:3em;

    
}


`;
export default Footer