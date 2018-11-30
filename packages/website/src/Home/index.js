import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import IntroHeader from '../IntroHeader';
import Partners from '../Partners';
import ProjectDescription from '../ProjectDescription';

function Index() {
  return (
    <Fragment>
      <IntroHeader />
      <Container>
        <ProjectDescription />
        <Partners />
      </Container>
    </Fragment>
  );
}

export default Index;
