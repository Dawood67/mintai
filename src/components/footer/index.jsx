import { Container, Row, Col } from "react-bootstrap";
import {
  CopyrightText,
  FooterImageDiv,
  FooterWrapper,
  IconContainer,
  IconHolder,
  TermsText,
  TextContainer,
  BtnContainer,
  JoinNow,
} from "./element";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg={3}>
            <FooterImageDiv>
              {/* <img className="img-fluid logo" src={footerlogo} /> */}
              <p className="brandText">Mint-AI</p>
            </FooterImageDiv>
          </Col>
          <Col lg={6}>
            <TextContainer>
              <TermsText>Contact: info@dalleinu.ai</TermsText>
              <CopyrightText>
                Copyright © [{new Date().getFullYear()}] Mint-Ai. All rights
                reserved.
              </CopyrightText>
            </TextContainer>
          </Col>
          <Col lg={3}>
            <IconContainer>
              <IconHolder>
                <a href="https://t.me/Dalleainu" target="_blank">
                  <FaTelegramPlane className="footerIcon" />
                </a>
              </IconHolder>

              <IconHolder>
                <a href=" https://twitter.com/Dalle_Inu" target="_blank">
                  <FaTwitter className="footerIcon" />
                </a>
              </IconHolder>
            </IconContainer>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
