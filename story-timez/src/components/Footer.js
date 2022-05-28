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
                <li><Link to=''>Earn As a writer</Link></li>
                <li><Link to=''>Privacy Policy</Link></li>
                <li><Link to=''>How to Post</Link></li>
                <li><Link to=''>Copyright Policy</Link></li>
                <li><Link to=''>Advertise with Us</Link></li>
            </InfoList>
        </div>



        <div style={{ 'textAlign':'center', 'paddingTop':'1em'}}>
        <span style={{ 'fontWeight':'bold', 'fontSize':'1.2em' }}>Join Us on Social Media</span>

            <SocialMediaList>
                <li><Link to=''><FaFacebook/></Link></li>
                <li><Link to=''><FaTwitter/></Link></li>
                <li><Link to=''><FaInstagram/></Link></li>
               
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
    color:blue;
`;





const InfoList = styled.ul`

li{

    list-style:none;
    text-align:center;

    a{

        text-decoration:none;
        color:rgb(0,170,255);
    }

    a:hover{
        color:blue;
        font-weight:bold;
    }
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




    a{
        color:rgb(0,170,255);
    }

    a:hover{
        color:blue;
        font-weight:bolder;

    }
    
}


`;
export default Footer