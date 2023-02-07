import styled from "styled-components";

export const FooterWrapper = styled.div`
  overflow: hidden;
  background: #fff;
  backdrop-filter: blur(126.5px);

  .logo {
    width: 40px;
  }
  .container {
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media (max-width: 991.98px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .topIcon {
    font-size: 2rem;
    margin-top: 10px;
    cursor: pointer;
    color: rgb(255, 212, 82);

    &:hover {
      animation-name: heartBeat;
      animation-duration: 1s;
    }
  }
`;

export const FooterImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  .brandText {
    font-style: normal;
    font-weight: 700;
    font-size: 19.9783px;
    line-height: 30px;
    text-transform: uppercase;
    color: #112528;
    margin: 0 !important;
    cursor: pointer;
  }

  .img-fluid {
    cursor: pointer;
  }

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
`;

export const TermsText = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #112528;
  text-align: center;
`;

export const CopyrightText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #112528;
  text-align: center;
  margin-top: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 991.98px) {
    justify-content: center;
    margin-top: 1rem;
  }

  .footerIcon {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
      scale: 1.2;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const IconHolder = styled.div`
  height: 35px;
  width: 35px;
  background-color: rgba(17, 37, 40, 1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
