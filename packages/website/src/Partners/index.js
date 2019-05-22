import React from 'react';
import { Col, Row } from 'reactstrap';
import logoCNS from './cns2x.png';
import logoCOSI from './cosi2x.png';
import logoUCI from './uci2x.png';
import logoSMM from './smm-horizontal.png';
import logoNYSCI from './nysci.png';
import './index.css';

function Partners() {
  const partners = [
    {
      name: 'Cyberinfrastructure for Network Science Center at Indiana University, in'
        + ' Bloomington, Indiana',
      img: logoCNS,
      imgAlt: 'CNS logo, Green stylized lime artwork next to large thin black letter C N S',
      width: 100,
    },
    {
      name: 'Creativity Labs at the University of California, in Irvine, California',
      img: logoUCI,
      imgAlt: 'UCI logo, Large block U C I letters',
      width: 100,
    },
    {
      name: 'Center of Science and Industry, COSI, in Columbus, Ohio',
      img: logoCOSI,
      imgAlt: 'COSI logo, Large chunky C O S I letters',
      width: 100,
    },
    {
      name: 'Science Museum of Minnesota in Saint Paul, Minnesota',
      img: logoSMM,
      imgAlt: 'SMM Logo, a blue nautilus swirl next to the museum name',
      width: 120,
    },
    {
      name: 'New York Hall of Science in Corona, New York',
      img: logoNYSCI,
      imgAlt: 'NYSCI Logo, Gray N Y letters next to a Red circle with the White letters S C I',
      width: 100,
    },
  ];
  return (
    <Row className="mb-2 justify-content-center">
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
          <Col md={1} />
          {
            partners.map(partner => (
              <Col
                key={partner.name}
                className="text-center pb-5 pb-sm-2"
                xs={12}
                md={2}
              >
                <div className="partnerImgContainer">
                  <img
                    width={partner.width}
                    className="img-fluid"
                    src={partner.img}
                    alt={partner.imgAlt}
                  />
                </div>
                <hr className="d-none d-sm-none d-md-block" />
                <h5>{partner.name}</h5>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
}

export default Partners;
