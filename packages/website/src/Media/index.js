import React, { Fragment } from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import MediaLinks from './MediaLinks';
import MediaIntroPara from '../Copy/MediaIntroPara';

function Media() {
  const videos = [
    {
      key: 1,
      src: 'https://www.youtube-nocookie.com/embed/8jL5RhT9gVs',
      title: 'Run Exhibit at Makevention 2018',
      summary: `In version one of the xMacroscope experience we are building prototypes of
        the software and physical experience and testing them out with groups.
        Their feedback will help us in the iterative development of the hardware
        and software platform. In 2018, the first set up at the Indiana University Makevention
        event in Bloomington Indiana.`,
    },
    {
      key: 2,
      src: 'https://www.youtube-nocookie.com/embed/kdBWGEEVt-Q',
      title: 'Sportsology',
      summary: `As the xMacroscope platform is developed out further, we will eventually
        build the Make a Vis station into the Run experience in the Science Museum of
        Minnesota's Sportsology exhibit. Run is a popular experience that works well as a
        test bed for our visualization research in the xMacroscope system.`,
    },
  ];

  return (
    <Container>
      <h2>Media</h2>
      <p>
        <MediaIntroPara />
      </p>
      <Row>
        <MediaLinks />
      </Row>
      <Row className="justify-content-center">
        {
          videos.map(video => (
            <Col xs={12} sm={12} md={6} className="mt-1 text-center" key={video.key}>
              <iframe
                src={video.src}
                title={video.title}
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <Fragment>
                {video.summary}
              </Fragment>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default Media;
