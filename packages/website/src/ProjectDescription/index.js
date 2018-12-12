import React from 'react';
import { Col, Row } from 'reactstrap';
import TechIntroPara from '../Copy/TechIntroPara';
import ResearchIntroPara from '../Copy/ResearchIntroPara';
import ExhibitIntroPara from '../Copy/ExhibitIntroPara';

function ProjectDescription() {
  return (
    <Row className="justify-content-center">
      <Col xs={8} md={12} lg={12}>
        <h2 className="text-center">Our work</h2>
        <Row>
          <Col xs={12} md={4}>
            <h3>Technology development</h3>
            <p>
              <ExhibitIntroPara />
              <br />
              <a href="/tech">Learn more.</a>
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Exhibit development</h3>
            <p>
              <TechIntroPara />
              <br />
              <a href="/experience">Learn more.</a>
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Research</h3>
            <p>
              <ResearchIntroPara />
              <br />
              <a href="/research">Learn more.</a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProjectDescription;
