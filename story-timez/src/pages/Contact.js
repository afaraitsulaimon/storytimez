import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import styled from 'styled-components'
import { FaAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom'
import ButtonMailto from '../components/ButtonMailto'



const Contact = () => {
  return (
    <div>
              <Menu/>
                  <Header>
                      <h1>CONTACT US</h1>
                  </Header>

                    <Content>
                        <ContactHolderTop>
                            <div>
                                <div style={{ textAlign:'center' }}><h1>Hello</h1></div>
                                <div><p style={{ textAlign:'center' }}>How may we help you?</p></div>

                                <ButtonHolder>
                                    <EnquiryButton><ButtonMailto label="For Enquiry" mailto="mailto:storytimez_enquiry@gmail.com" /></EnquiryButton>
                                    <OrSpace><p>or</p></OrSpace>
                                    <AdvertButton><ButtonMailto label="For Advert" mailto="mailto:storytimez_advert@gmail.com" /></AdvertButton>
                                </ButtonHolder>

                                <OtherDetails>
                                    <h4>For any other thing</h4>
                                    <p>hi@storytimez.com</p>
                                </OtherDetails>

                                </div>
                        </ContactHolderTop>

                        <ContactHolderBottom>
                                    
                                    <div style={{ width:'120px'}}>
                                    <h2><FaAddressCard/></h2>
                                        <p>
                                            108, Palm Avenue, Mushin, 100253,Lagos State.
                                        </p>
                                    </div>
                        </ContactHolderBottom>
                    </Content>
                  <Footer/>


    </div>
  )
}


const Header = styled.div`
  width:100%;
  height:40vh;
  background-color:rgba(0, 170, 255);
  display:flex;
  justify-content:center;
  align-items:center;

  h1{
      font-size:3rem;

   
  }
`;

const Content = styled.div`

  width:100%;
  height:120vh;
  display:grid;
    justify-content:center;
  align-items:center;
  
`;


const ContactHolderTop = styled.div`

  min-width:60vw;
  min-height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;

  h1{
    font-size:10rem;
 
}
`;



const ContactHolderBottom = styled.div`

  width:100%;
  height:30vh;
  display:flex;
  justify-content:center;
  align-items:center;
  
  h2{
      text-align:center;
      padding-bottom:0.5em;
  }
  p{
      text-align:center;
  }

`;

const ButtonHolder = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;
`;

const EnquiryButton = styled.div`
        width:16vw;
        height:8vh;
        background-color:rgba(0, 170, 255);
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        border-radius:5px;

        a{
            text-decoration:none;
            color:white;
        }

        &:hover{
            background-color:blue;
            font-weight:bold;
        }

       
`;

const AdvertButton = styled.div`
        width:16vw;
        height:8vh;
        background-color:rgba(0, 170, 255);
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        border-radius:5px;

        a{
            text-decoration:none;
            color:white;
        }

        &:hover{
            background-color:blue;
            font-weight:bold;
        }

`;

const OrSpace = styled.div`
    width:25px;
    height:8vh;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 5px 0 5px;
    font-weight:bold;

`;

const OtherDetails = styled.div`
        text-align:center;
        margin-top:2em;
`;


export default Contact