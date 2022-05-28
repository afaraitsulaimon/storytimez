import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import styled from 'styled-components'
import { CategoryLists } from '../components/StoryList'
import { StoryLists } from '../components/Stories'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from '../images/storyimage.jpg';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom/umd/react-router-dom.development'



const Home = () => {

  return (
    <div>
        <Menu/>

                <TopSlider>
                <Splide options={{
                 type  : 'fade',
                 arrows:false,
                 pagination:false,
                 drag:"free",
                 autoplay:true,
                 rewind:true,
                 autoWidth: true,
                 autoHeight: true,


                 }} >
          
                   

                  
                    <SplideSlide>      
                                
                            <CardSlider style={{ backgroundColor:'green',width:'100%', height:'60vh'}}>
                              
                                <p> No 1 </p>

                            </CardSlider>
                    </SplideSlide>                
                 

                    <SplideSlide>
                      
                            <CardSlider style={{ backgroundColor:'blue',width:'100%', height:'60vh' }}>
                                <p> No 2 </p>

                            </CardSlider>
                      
                    </SplideSlide>

                    <SplideSlide>
                      
                            <CardSlider style={{ backgroundColor:'black',width:'100%', height:'60vh' }}>
                                <p> No 3 </p>

                            </CardSlider>
                      
                    </SplideSlide>
          
            
            </Splide>
                </TopSlider>


{/* {  Categories start ends here } */}


                <CategoryWrapper>
        <Splide options={{
                 perPage:4,
                 arrows:true,
                 pagination:false,
                 drag:"free",
                 gap: "3rem",
          
                 
                 }} >
          
                    {CategoryLists.map((CategoryList) => {

                      return(

                    <SplideSlide key={CategoryList.id}>
                      <Link to={CategoryList.path}>
                            <Card>
                                <p>{CategoryList.category}</p>

                            </Card>
                      </Link>
                    </SplideSlide>

                 
                   
                      )
                    })}
            
            </Splide>
        </CategoryWrapper>
{/* {  Categories  ends here } */}







{/* {  Latest story starts from here } */}
        <LatestStoryWrapper>
          <div style={{ display:'flex' , justifyContent:'space-between'}}><h3 style={{ paddingLeft:'3em' }}>Latest Stories</h3> <h3  style={{ paddingRight:'3em' }}>View All Stories</h3></div>
        <Splide options={{
                 perPage:4,
                 arrows:true,
                 pagination:false,
                 drag:"free",
                 gap: "3rem",
                 autoplay:true,
                 rewind:true,
                 
                 }} >
          
                    {StoryLists.map((StoryList) => {

                      return(

                    <SplideSlide key={StoryList.id}>
                            <CardLatestStory>
                                <div>
                                  <img src={StoryList.image} alt="coverImage" />
                                </div>

                                <div>
                                  <p> <span>Title:</span> {StoryList.storyTitle}</p>
                                  <p><span>Written By:</span> {StoryList.writtenBy}</p>
                                  <p>{StoryList.category} Story</p>

                                </div>

                                

                            </CardLatestStory>
                    </SplideSlide>

                 
                   
                      )
                    })}
            
            </Splide>
        </LatestStoryWrapper>
{/* {  Latest story ends here } */}





{/* {  Love stories starts from here } */}
<LatestStoryWrapper>
          <div style={{ display:'flex' , justifyContent:'space-between'}}><h3 style={{ paddingLeft:'3em' }}>Romance & Love  Stories</h3> <h3  style={{ paddingRight:'3em' }}>View All Stories</h3></div>
        <Splide options={{
                 perPage:4,
                 arrows:true,
                 pagination:false,
                 drag:"free",
                 gap: "3rem",
                 autoplay:true,
                 rewind:true,
                 
                 }} >
          
                    {StoryLists.map((StoryList) => {

                      return(

                    <SplideSlide key={StoryList.id}>
                            <CardLatestStory>
                                <div>
                                  <img src={StoryList.image} alt="coverImage" />
                                </div>

                                <div>
                                  <p> <span>Title:</span> {StoryList.storyTitle}</p>
                                  <p><span>Written By:</span> {StoryList.writtenBy}</p>
                                  <p>{StoryList.category} Story</p>

                                </div>

                                

                            </CardLatestStory>
                    </SplideSlide>

                 
                   
                      )
                    })}
            
            </Splide>
        </LatestStoryWrapper>
{/* {  Love stories ends here } */}





{/* {  Adventure stories starts from here } */}
<LatestStoryWrapper>
          <div style={{ display:'flex' , justifyContent:'space-between'}}><h3 style={{ paddingLeft:'3em' }}>Adventure Stories</h3> <h3  style={{ paddingRight:'3em' }}>View All Stories</h3></div>
        <Splide options={{
                 perPage:4,
                 arrows:true,
                 pagination:false,
                 drag:"free",
                 gap: "3rem",
                 autoplay:true,
                 rewind:true,
                 
                 }} >
          
                    {StoryLists.map((StoryList) => {

                      return(

                    <SplideSlide key={StoryList.id}>
                            <CardLatestStory>
                                <div>
                                  <img src={StoryList.image} alt="coverImage" />
                                </div>

                                <div>
                                  <p> <span>Title:</span> {StoryList.storyTitle}</p>
                                  <p><span>Written By:</span> {StoryList.writtenBy}</p>
                                  <p>{StoryList.category} Story</p>

                                </div>

                                

                            </CardLatestStory>
                    </SplideSlide>

                 
                   
                      )
                    })}
            
            </Splide>
        </LatestStoryWrapper>
{/* {  Adventure stories ends here } */}




{/* {  Advert start  here } */}

          <Advertisement>
                    <Advert>
                      <p>Advertisement</p>
                    </Advert>

                    <Advert>
                    <p>Advertisement</p>
                    </Advert>

                    <Advert>
                         <p>Advertisement</p>

                    </Advert>

                    <Advert>
                            <p>Advertisement</p>

                    </Advert>
          </Advertisement>

{/* {  Advert ends  here } */}

        <Footer/>
    </div>
  )
}




const TopSlider = styled.div`

  width:100%;
  height:80vh;
  background-color:pink;

`;

const CardSlider = styled.div`
  
`;


const CategoryWrapper = styled.div`

   color:blue;


  a{

    text-decoration:none;
    text-align:center;
    align-items:center;
  }

`


const Card = styled.div`
    min-height:10em;
   background:rgb(0, 170, 255);;
    border-radius:5px;
    color:white;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;


    p{

      font-size:1.5em;

      @media(max-width:768px){

        font-size:0.7em;
        font-weight:bold;
      }

    }
`;


const LatestStoryWrapper = styled.div``;

const CardLatestStory = styled.div`
    min-height:20em;
   background:rgb(0, 170, 255);;
    border-radius:5px;
    color:white;
    cursor:pointer;
 

    img{
        width:100%;

    }

    p{

      text-align:center;
      padding-top:1em;
    }

  
    `;

    const Advertisement = styled.div`
      display:flex;
      justify-content:space-evenly;
      margin-bottom:3em;

      @media(max-width:768px){

        display:grid;
        justify-content:center;
      }
    
    `;

    const Advert = styled.div`
      width:20vw;
      height:30vh;
      border-radius:5px;
      background-color:green;

      p{
        font-size:2em;
        text-align:center;
        padding-top:1.5em;
      }

      @media(max-width:768px){

        width:50vw;
        margin-top:3em;
      }

    `;

export default Home