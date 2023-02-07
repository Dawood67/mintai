import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  overflow: hidden;

  .heroContainer {
    margin-top: 4rem;

    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }

  .headerImg {
    width: 100%;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .primary {
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .secondary {
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export const MainHeading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 67px;
  line-height: 100px;
  text-transform: uppercase;
  color: #ffd452;
  margin: 0;
  margin-top: 10rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
    text-align: center;
    line-height: 50px;
  }
`;

export const SubText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;
  color: #d8f5e7;
  margin: 0;
  margin-top: 0.5rem;

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 575.98px) {
    br {
      display: none;
    }
  }
`;

export const BuyBtn = styled.button`
  background: #ffd452;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 26px;
  text-transform: capitalize;
  color: #2e4756;
  padding: 0.8rem 2rem;
  /* transition: all 0.2s ease; */
  margin-top: 3rem;

  &:hover {
    animation-name: heartBeat;
    animation-duration: 1s;
  }

  @media (max-width: 991.98px) {
    display: block;
    margin: 2rem auto;
  }
`;

export const VideoBackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 140vh;

  @media (max-width: 991.98px) {
    min-height: 0vh;
  }

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }
`;
