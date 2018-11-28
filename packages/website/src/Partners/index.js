import React from 'react';
import { Col, Row } from 'reactstrap';

function Partners() {
  return (
    <Row className="justify-content-center">
      <Col
        xs={8}
        md={12}
        lg={12}
      >
        <h2 className="text-center">Partners</h2>
        <p>
          The xMacroscope project is a partnership between:
        </p>
        <Row>
          <Col
            xs={12}
            md={3}
          >
            Cyberinfrastructure for Network Science Center at Indiana University, Bloomington
          </Col>
          <Col
            xs={12}
            md={3}
          >
            Creativity Labs at the University of California, Irvine
          </Col>
          <Col
            xs={12}
            md={3}
          >
            Center of Science and Industry, COSI, in Columbus Ohio
          </Col>
          <Col
            xs={12}
            md={3}
          >
            Science Museum of Minnesota in Saint Paul, Minnesota
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Partners;
