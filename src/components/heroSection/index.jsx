import React from 'react'
import { BuyBtn, HeroSectionWrapper, MainHeading, SubText, VideoBackgroundContainer } from './elements';
import { Container } from 'react-bootstrap';
import bgVideo from '../../assets/videos/bgvideo.mp4'
import homeImg from '../../assets/images/homeImg.png'
import NavbarComp from '../navbar';
const HeroSection = () => {
  return (
    <HeroSectionWrapper id="home">
    <VideoBackgroundContainer>
      <video className="background-video primary" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* <video className="background-video secondary" autoPlay muted loop>
        <source src={lights} type="video/mp4" />
      </video> */}

      <NavbarComp/>

      <Container className="heroContainer">
        <MainHeading>
          {/* <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`<span>ai iNU</span>`)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          /> */}
          helllo
        </MainHeading>
        <SubText>
          Attractive background image or video related to
          <br /> cryptocurrency or blockchain technology
        </SubText>
        <BuyBtn>Buy on uniswap</BuyBtn>
      </Container>
      <img className="img-fluid headerImg" src={homeImg} />
    </VideoBackgroundContainer>
  </HeroSectionWrapper>
  )
}

export default HeroSection