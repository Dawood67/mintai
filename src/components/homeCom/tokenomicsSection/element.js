import styled from "styled-components";

export const TokenomicSectionWrapper = styled.div`
  overflow: hidden;
  background-color: #ffd452;
  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media (max-width: 991.98px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const StoryText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  color: #2b2b2b;
  text-align: center;
`;

export const CardContainer = styled.div`
  margin-top: 4rem;
  .col {
    display: flex;
    justify-content: center;
  }
  .card {
    width: 396.45px;
    min-height: 364px;
    background: #2b2b2b;
    box-shadow: 0px 4px 10px #2b2b2b;
    border-radius: 10.5295px;
    padding: 31px 26px 31px 26px;
    margin-bottom: 2rem;
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }
  .card-title {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 21.059px;
    line-height: 32px;
    text-transform: uppercase;
    color: #ffd452;
    margin-top: 2rem;
  }
  .card-text {
    font-style: normal;
    font-weight: 400;
    font-size: 21.059px;
    line-height: 124.5%;
    text-align: center;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 20px;
  }
`;

/*tokennomics */

export const MainWrapper = styled.div``;
export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 1rem;
  position: relative;
  @media (max-width: 575.98px) {
    gap: 2.5rem;
  }
  .total {
    font-weight: 700 !important;
  }
  .whiteBorder {
    @media (max-width: 991.98px) {
      border: 5px solid #fff !important;
    }
  }
  .cutOut {
    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const BuyText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 46.5882px;
  line-height: 70px;
  text-transform: capitalize;
  color: #2b2b2b;
  text-align: center;
  margin-top: 2rem;
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 1rem;
  position: relative;
  @media (max-width: 575px) {
    gap: 2.5rem;
  }
  .total {
    font-weight: 700 !important;
  }
  .whiteBorder {
    @media (max-width: 991.98px) {
      border: 5px solid #fff !important;
    }
  }
  .cutOut {
    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const SellText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 46.5882px;
  line-height: 70px;
  text-transform: capitalize;
  color: #2b2b2b;
  text-align: center;
  margin-top: 2rem;
`;

export const LeftDivText = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 33.6903px;
  line-height: 51px;
  text-transform: uppercase;
  color: #2b2b2b;
  width: 250px;
  @media (max-width: 575.98px) {
    width: 230px;
    font-size: 26.6903px;
  }
`;

export const LeftDivPercentage = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 21.0807px;
  line-height: 21px;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #333;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 123px;

  @media (max-width: 1399.98px) {
    right: 78px;
  }
  @media (max-width: 1199.98px) {
    right: 33px;
  }
  @media (max-width: 991.98px) {
    position: static;
  }
`;

export const RightDivText = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 33.6903px;
  line-height: 51px;
  text-transform: uppercase;
  color: #2b2b2b;
  width: 250px;
  @media (max-width: 575.98px) {
    width: 230px;
    font-size: 26.6903px;
  }
`;

export const RightDivPercentage = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 21.0807px;
  line-height: 21px;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #333;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 123px;
  @media (max-width: 1399.98px) {
    right: 78px;
  }
  @media (max-width: 1199.98px) {
    right: 33px;
  }
  @media (max-width: 991.98px) {
    position: static;
  }
`;

export const TotalSupplyText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  color: #2b2b2b;
  text-align: center;
  margin-top: 4rem;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    text-transform: lowercase;
    color: #2b2b2b;
    margin-left: 10px;
  }
`;
