import React from 'react';
import { Col, Row } from 'reactstrap';

function ProjectDescription() {
  return (
    <Row className="justify-content-center">
      <Col
        xs={8}
        md={12}
        lg={12}
      >
        <h2 className="text-center">Our work</h2>
        <Row>
          <Col
            xs={12}
            md={4}
          >
            <h3>Technology development</h3>
            <p>
              We are developing the open-source xMacroscope platform. This software and technology
              platform will allow us to build science center exhibit experiences that let visitor
              construct data visualization using their own experiences in interactive science
              exhibits.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
          >
            <h3>Exhibit development</h3>
            <p>
              We are building this technology platform into several existing exhibit experiences at
              the Center of Science and Industry (COSI) in Columbus, Ohio and the Science Museum of
              Minnesota in Saint Paul, Minnesota.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
          >
            <h3>Research</h3>
            <p>
              As we build out these experiences we will observe how visitors interact with these
              experiences, surveying them about their experiences. This learning research will allow
              us to iterate on the technology and exhibit platform while expanding out understanding
              of data visualization literacy in the science center environment.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProjectDescription;
