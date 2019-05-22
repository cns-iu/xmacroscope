import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Partners from '../Partners';
import ProjectDescription from '../ProjectDescription';

function Home() {
  return (
    <Fragment>
      <main>
        <Container>
          <ProjectDescription />
        </Container>
        <Partners />
      </main>
    </Fragment>
  );
}

export default Home;
