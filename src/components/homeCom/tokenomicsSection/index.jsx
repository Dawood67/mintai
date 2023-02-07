import { Row, Container, Col } from "react-bootstrap";
import {
  TokenomicSectionWrapper,
  StoryText,
  CardContainer,
  MainWrapper,
  BuyText,
  LeftDiv,
  LeftDivText,
  LeftDivPercentage,
  SellText,
  RightDiv,
  RightDivText,
  RightDivPercentage,
  TotalSupplyText,
} from "./element";
import whitecutout from "../../../assets/images/whitecutout.png";

function TokenomicSection() {
  return (
    <TokenomicSectionWrapper>
      <Container>
        <StoryText>Tokenomics</StoryText>

        <MainWrapper>
          <Row>
            <Col>
              <BuyText>Buy</BuyText>
              <LeftDiv>
                <LeftDivText>Development</LeftDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <LeftDivPercentage className="whiteBorder">
                  2%
                </LeftDivPercentage>
              </LeftDiv>
              <LeftDiv>
                <LeftDivText>Marketing</LeftDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <LeftDivPercentage className="whiteBorder">
                  6%
                </LeftDivPercentage>
              </LeftDiv>
              <LeftDiv>
                <LeftDivText>Liquidity </LeftDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <LeftDivPercentage className="whiteBorder">
                  5%
                </LeftDivPercentage>
              </LeftDiv>
              <LeftDiv>
                <LeftDivText className="total">Total</LeftDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <LeftDivPercentage className="whiteBorder">
                  9%
                </LeftDivPercentage>
              </LeftDiv>
            </Col>

            <Col>
              <SellText>Sell</SellText>
              <RightDiv>
                <RightDivText>Development</RightDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <RightDivPercentage className="whiteBorder">
                  2%
                </RightDivPercentage>
              </RightDiv>
              <RightDiv>
                <RightDivText>Marketing</RightDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <RightDivPercentage className="whiteBorder">
                  6%
                </RightDivPercentage>
              </RightDiv>
              <RightDiv>
                <RightDivText>Liquidity </RightDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <RightDivPercentage className="whiteBorder">
                  5%
                </RightDivPercentage>
              </RightDiv>
              <RightDiv>
                <RightDivText className="total">Total</RightDivText>
                <img className="img-fluid cutOut" src={whitecutout} />
                <RightDivPercentage className="whiteBorder">
                  9%
                </RightDivPercentage>
              </RightDiv>
            </Col>
          </Row>
          <TotalSupplyText>
            Total supply: <span>100,000,000</span>
          </TotalSupplyText>
        </MainWrapper>
      </Container>
    </TokenomicSectionWrapper>
  );
}

export default TokenomicSection;
