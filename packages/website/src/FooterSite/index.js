import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import nsfLogo from './nsf-logo.png';

function FooterSite() {
  return (
    <footer className="text-center">
      <Container>
        <Row className="justify-content-center">
          <Col
            className="pt-4 mt-4 footer-body"
            xs={6}
          >
            <Row>
              <Col xs={12} md={4} className="text-sm-center text-md-right">
                <img
                  className="img-fluid"
                  src={nsfLogo}
                  alt="placeholder"
                />
              </Col>
              <Col xs={12} md={8} className="text-sm-center text-md-left">
                The xMacroscope project is supported by the
                {' '}
                <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1713567">
                  National Science Foundation, award #1713567
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSite;
