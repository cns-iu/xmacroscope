import React from 'react';
import { Container } from 'reactstrap';
import nsfLogo from './nsf-logo.png';

function FooterSite() {
  return (
    <footer className="footer-body mt-4 pt-4 pb-4 text-center">
      <Container>
        <a
          href="https://www.nsf.gov"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="img-fluid"
            src={nsfLogo}
            alt="placeholder"
          />
        </a>
        The xMacroscope project is supported by the
        {' '}
        <a
          href="https://www.nsf.gov"
          rel="noopener noreferrer"
          target="_blank"
        >
          National Science Foundation
        </a>
        {', '}
        <a
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1713567"
          rel="noopener noreferrer"
          target="_blank"
        >
          award #1713567
        </a>
        .
      </Container>
    </footer>
  );
}

export default FooterSite;
