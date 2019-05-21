import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ResearchIntroPara from '../Copy/ResearchIntroPara';

function Research() {
  const s3Base = 'https://s3.us-east-2.amazonaws.com/org.xmacroscope/';
  const papers = [
    {
      paperTitle: 'Data Visualization Literacy: Definitions, Conceptual Frameworks, Exercises, and Assessments',
      paperAuthors: 'Katy Börner, Andreas Bueckle, and Michael Ginda',
      fileName: 'research-data-visualization-literacy',
      key: 1,
    },
    {
      paperTitle: 'Begin at the Beginning: A Constructionist Model for Interpreting Data'
        + ' Visualizations',
      paperAuthors: 'Mary Ann Wojton, Donnelley Hayde, Joe Heimlich, Katy Börner',
      fileName: 'research-begin-beginning',
      key: 2,
    },
    {
      paperTitle: 'Lifelong Learning Group Research Articles in Progress',
      fileName: 'research-llg-research-in-progress',
      key: 3,
    },
    {
      paperTitle: 'Data Visualization Literacy Literature Review: Sharing Personal Information',
      fileName: 'research-annual-report-year-1',
      key: 4,
    },
  ];

  return (
    <Container>
      <h2>Research</h2>
      <p>
        <ResearchIntroPara />
      </p>
      <p>
        In our work to date, we have already published several papers detailing our studies.
      </p>
      <Row className="mb-5 justify-content-center">
        {
          papers.map(paper => (
            <Col xs={12} sm={6} className="mt-5 text-center" key={paper.key}>
              <h5>{paper.paperTitle}</h5>
              <a href={`${s3Base}${paper.fileName}.pdf`}>
                <img
                  className="pdf-thumb"
                  alt="Thumbnail of the first page of the paper, small text"
                  width={150}
                  src={`${s3Base}${paper.fileName}.jpg`}
                />
              </a>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default Research;
