import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import ReactGA from 'react-ga';
import './App.css';
import IntroHeader from './IntroHeader';
import FooterSite from './FooterSite';
import Partners from './Partners';
import ProjectDescription from './ProjectDescription';

// Initialize Google Analytics for the website
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Fragment>
      <main>
        <IntroHeader />
        <Container>
          <ProjectDescription />
          <Partners />
        </Container>
      </main>
      <FooterSite />
    </Fragment>
  );
}

export default App;
