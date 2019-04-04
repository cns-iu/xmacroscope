import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';
import AppNav from '../AppNav';
import './index.css';

function IntroHeader() {
  return (
    <Jumbotron className="text-center">
      <h1><a className="home-link" href="/">xMacroscope Cloud</a></h1>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <p className="lead">
            xMacroscope is a
            {' '}
            <strong>design</strong>
            {', '}
            <strong>build</strong>
            {', '}
            <strong>research</strong>
            {' '}
            project to study how visitors at science centers understand data visualization
            techniques.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <AppNav />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default IntroHeader;
