import React, { Fragment } from 'react';
import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
} from 'reactstrap';

function MediaLinks() {
  return (
    <Fragment>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Nov 27, 2018</ListGroupItemHeading>
          <ListGroupItemText className="mb-0">
            <a
              href="https://cns.iu.edu/current_team/bio/katy_borner.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Katy Börner
            </a>
            &nbsp;presents&nbsp;
            <a
              href="https://cns.iu.edu/docs/presentations/18-borner-Dagstuhl.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Actionable Data Visualizations
            </a>
            &nbsp;at&nbsp;
            <a
              href="https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=18482"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dagstuhl Seminar on Network Visualization in the Humanities
            </a>
            , Dagstuhl, Germany.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem className="list-group-item-secondary">
          <ListGroupItemHeading>Nov 16, 2018</ListGroupItemHeading>
          <ListGroupItemText className="mb-0">
            <a
              href="https://cns.iu.edu/current_team/bio/lisel_record.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lisel Record
            </a>
            &nbsp;presents&nbsp;
            <a
              href="https://cns.iu.edu/docs/presentations/MCN_2018_TheInBetween.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              The &quot;In-Between&quot;:
              How to Facilitate Interdepartmental Collaboration from the Institutional Middle
            </a>
            &nbsp;at the&nbsp;
            <a
              href="https://conference.mcn.edu/2018/about.cfm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Museum Computer Network conference
            </a>
            , Denver, CO.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Nov 14, 2018</ListGroupItemHeading>
          <ListGroupItemText className="mb-0">
            <a
              href="https://cns.iu.edu/current_team/bio/katy_borner.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Katy Börner
            </a>
            , and&nbsp;
            <a
              href="https://cns.iu.edu/current_team/bio/bruce-herr.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bruce W. Herr II
            </a>
            &nbsp;present&nbsp;
            <a
              href="https://cns.iu.edu/docs/presentations/2018-borner-herr-aisl.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Data Visualization Literacy and Make-A-Vis User Interface
            </a>
            &nbsp;at&nbsp;
            <a
              href="https://web.avl.indiana.edu/~shermanw/VisWorkshop"
              rel="noopener noreferrer"
              target="_blank"
            >
              Scientific Visualization Workshop Series: Fall 2018
            </a>
            , Bloomington, IN.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem className="list-group-item-secondary">
          <ListGroupItemHeading>Sep 27, 2018</ListGroupItemHeading>
          <ListGroupItemText className="mb-0">
            <a
              href="https://cns.iu.edu/current_team/bio/katy_borner.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Katy Börner
            </a>
            &nbsp;presents&nbsp;
            <a
              href="https://cns.iu.edu/docs/presentations/18-borner-SSRC.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Actionable Data Visualizations
            </a>
            &nbsp;at&nbsp;
            <a
              href="https://ssrc.indiana.edu/seminars/datascience-socialscience/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Data Science Meets Social Science, Social Science Research Commons (SSRC)
            </a>
            , Bloomington, IN.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      <hr />
    </Fragment>
  );
}

export default MediaLinks;
