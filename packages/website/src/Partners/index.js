import React from 'react';
import { Col, Row } from 'reactstrap';
import logoCNS from './cns2x.png';
import logoCOSI from './cosi2x.png';
import logoUCI from './uci2x.png';
import logoSMM from './smm2x.png';

function Partners() {
  const partners = [
    {
      name: 'Cyberinfrastructure for Network Science Center at Indiana University, Bloomington',
      img: logoCNS,
      imgAlt: 'CNS logo, Green stylized lime artwork next to large thin black letter C N S',
    },
    {
      name: 'Creativity Labs at the University of California, Irvine',
      img: logoUCI,
      imgAlt: 'UCI logo, Large block U C I letters',
    },
    {
      name: 'Center of Science and Industry, COSI, in Columbus Ohio',
      img: logoCOSI,
      imgAlt: 'COSI logo, Large chunky C O S I letters',
    },
    {
      name: 'Science Museum of Minnesota in Saint Paul, Minnesota',
      img: logoSMM,
      imgAlt: 'SMM Logo, a blue nautilus swirl over the museum name.',
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col
        xs={8}
        md={12}
        lg={12}
      >
        <h2 className="text-center">Partners</h2>
        <p className="text-center">
          The xMacroscope project is a partnership between:
        </p>
        <Row>
          {
            partners.map(partner => (
              <Col
                key={partner.name}
                className="text-center pb-5 pb-sm-2"
                xs={12}
                md={3}
              >
                <h5>{partner.name}</h5>
                <hr className="d-none d-sm-none d-md-block" />
                <img
                  width={100}
                  className="img-fluid"
                  src={partner.img}
                  alt={partner.imgAlt}
                />

              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
}

export default Partners;
