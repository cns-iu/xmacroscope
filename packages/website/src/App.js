import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar
        color="light"
        light
        expand="md"
      >
      </Navbar>

      <Row>
        <Col sm={12}>
          <h1>xMacroscope.org</h1>
          <p>Abstract - Project Description</p>
          <p>Partners</p>
          <p>Video of the Run experience</p>
          <p>Footer with funding</p>
        </Col>
      </Row>
      <footer className="text-center">
        The xMacroscope project is supported by the
        {' '}
        <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1713567">
          National Science Foundation award #1713567
        </a>
      </footer>
    </Container>
  );
}

export default App;
