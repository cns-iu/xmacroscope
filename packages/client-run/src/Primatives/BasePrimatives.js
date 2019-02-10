import styled from 'styled-components';
import {
  Button, CardHeader, Card, CardBody,
} from 'reactstrap';
import { sportsOrange, sportsTransGray, sportsYellow } from './BaseConfigsVariables';


const selected = `
  color: black;
  background: ${sportsYellow};
  border-color: ${sportsYellow};
`;

const BaseHeader = styled.h1`
  color: white;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 65px;
  @media (max-height: 1080px) {
    font-size: 30px !important;
  }
`;

const BaseFormHeader = styled.h1`
  color: white;
  @media (max-height: 1080px) {
    font-size: 28px !important;
  }
`;

const BigHeader = styled.h1`
  font-size: 350px !important;
  letter-spacing: 1px;
  @media (max-height: 1080px) {
    font-size: 150px !important;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: ${sportsOrange};
  letter-spacing: 1px;
  border: none;
  font-weight: bold;
  font-size: 50px;
  :hover{
    background-color: ${sportsOrange};
    color: white;
  }
  @media (max-height: 1080px) {
    font-size: 30px !important;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: ${sportsOrange};
`;

const StyledBTN = styled(Button)`
  color: ${sportsYellow};
  border-color: ${sportsYellow};
  background-color: gray;
  ${props => (props.selected ? `${selected}` : '')}
  &:hover{
   ${selected}
  }
  @media (max-height: 1080px) {
    max-height: 40px;
  }
`;

const StyledCard = styled(Card)`
  background-color: ${sportsTransGray};
`;

const StyledCardBody = styled(CardBody)`
  padding: .75em 1.25em;
   @media (max-height: 1080px) {
     padding: .5em 1.5em;
  }
`;

const ErrorWrapper = styled.div`
  display: inline;
  border: ${props => (props.active ? '1px solid white' : 'none')};
  background: ${props => (props.active ? sportsOrange : 'none')};
`;

export {
  BaseHeader, BigHeader, StyledButton, StyledCardHeader, StyledCard, StyledBTN,
  selected, StyledCardBody, BaseFormHeader, ErrorWrapper,
};
