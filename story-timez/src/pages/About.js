import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import styled from 'styled-components'

const About = () => {
  return (
    <div>
              <Menu/>
                  <Header>
                      <h1>ABOUT US</h1>
                  </Header>

                  <Content>
                  <h2 style={{ paddingTop:'3em' }}>Our History</h2>
                      <p>
                      We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .
                          We are an entertainment technology company . We are an entertainment technology company .


                      </p>

                      <h2>Our Goal</h2>
                      <p>
                            We want to make the world know that , their are great writers and their are great stories,
                            we want to make sure we give the writers better platform to earn and write good stories to reach the world.

                          
                      </p>

                      <h2>Our Vision</h2>
                      <p>
                            We want to make the world know that , their are great writers and their are great stories,
                            we want to make sure we give the writers better platform to earn and write good stories to reach the world.

                          
                      </p>

                    
                      <h2>Our Mission</h2>
                     <p style={{ paddingBottom:'10em' }}>
                     We want to make the world know that , their are great writers and their are great stories,
                            we want to make sure we give the writers better platform to earn and write good stories
                             to reach the world.
                     </p>


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
  align-items:center;
  justify-content:center;

  h1{
      font-size:3rem;
   
  }
`;


const Content = styled.div`
    width:100%;
    min-height:80vh;

    h2{
      text-align:center;
      padding:10px 0 10px 0;
      text-decoration:underline;
    }

    p {
      text-align:center;
    }
`;
export default About