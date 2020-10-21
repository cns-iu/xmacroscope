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
      fileName: 'research-lit-review-willingness-to-share',
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
        In our work to date, we have already published several papers detailing our studies that are
        available for download here.
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
      <Row>
        <Col xs={12} sm={12} className="mt-5">
          <h5>Book Chapters</h5>
          <ul>
            <li>
              Zoss, Angela, Adam V. Maltese, Stephen Miles Uzzo, and Katy Börner (2018). Network
              Visualization Literacy: Novel approaches to measurement
              and instruction.
              <i>Network Science in Education.</i>
            </li>
          </ul>
          <h5>Journals or Juried Conference Papers</h5>
          <ul>
            <li>
              Scrivner, Olga and Nguyen, Thuy and Simon, Kosali and Middaugh, Esmé and Taska, Bledi
              and Börner, Katy and Cook, Benjamin. (2020). Job
              postings in the substance use disorder treatment related sector during the first five
              years of Medicaid expansion.
              <i>PLOS ONE.</i>
            </li>
            <li>
              Börner, Katy and Scrivner, Olga and Gallant, Mike and Ma, Shutian and Liu, Xiaozhong
              and Chewning, Keith and Wu, Lingfei and Evans, James
              A.. (2018). Skill discrepancies between research, education, and jobs reveal the
              critical need to supply soft skills for the data economy.
              <i>
                Proceedings
                of the National Academy of Sciences.
              </i>
            </li>
            <li>
              Katy Börner, Andreas Bueckle. (2019). Data visualization literacy: Definitions,
              conceptual frameworks, exercises, and assessments.
              <i>
                Proceedings of
                the National Academy of Sciences of the United States of America.
              </i>
            </li>
            <li>
              Azoulay, Pierre and Graff-Zivin, Joshua and Uzzi, Brian and Wang, Dashun and
              Williams, Heidi and Evans, James A. and Jin, Ginger Zhe and Lu,
              Susan Feng and Jones, Benjamin F. and Börner, Katy and Lakhani, Karim R. and Boudreau,
              Kevin J. and Guinan, Eva C.. (2018). Toward a more
              scientific science.
              <i>
                Science.
              </i>
            </li>
            <li>
              Börner, Katy and Simpson, Adam H. and Bueckle, Andreas and Goldstone, Robert L..
              (2018). Science map metaphors: a comparison of network
              versus hexmap-based visualizations.
              <i>Scientometrics.</i>
            </li>
            <li>
              Peppler, K., Huang, J., Richey, M. C., Ginda, M., Börner, K., Quinlan, H., Hart, A.
              J. (2020). Key principles for workforce upskilling via online
              learning: a learning analytics study of a professional course in additive
              manufacturing..
            </li>
            <li>
              Börner, K., Richey, M. C., Ginda, M., Peppler, K., Huang, J. (2020). Scaling-Up
              Human Learning: Visual Analytics to Support Effective Upskilling of
              U.S. Workers..
            </li>
            <li>
              Peppler, Kylie, Anna Keune, and Ariel Han. Cultivating Civic Engagement Through Data
              Visualization Literacy in Museums. Information and
              Learning Sciences.
            </li>
            <li>
              Horr, E.E.T., Heimlich, J.E., Meyer, J.R. & Börner, K. Comparing oneself with others:
              Digging deeper into levels of agreement across and within
              groups. Visitor Studies.
            </li>
            <li>
              Meyer, J.R., Heimlich, J.E. Horr, E.E.T. Kemper, R. & Börner, K. Respondent comfort in
              sharing sensitive information, in-person, in a digital age.
              International Journal of Social Research Methodology.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Research;
