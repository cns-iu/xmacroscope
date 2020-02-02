import styled from 'styled-components';
import {
  Button, CardHeader, Card, CardBody,
} from 'reactstrap';
import {
  sportsTransGray, xMacBlue, xMacOrangeGradEnd, xMacOrangeGradStart, xMacOrangeDark,
} from './BaseConfigsVariables';

const selected = `
  color: white;
  background: ${xMacOrangeDark};
  border-color: ${xMacOrangeDark};
`;

const BaseHeader = styled.h1`
  color: ${xMacBlue};
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 65px;
  margin-bottom: 0px;
  @media (max-height: 1080px) {
    font-size: 60px !important;
  }
`;

const BaseFormHeader = styled.h1`
  color: ${xMacBlue};
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
  color: ${xMacBlue}
  letter-spacing: 1px;
  border: none;
  font-weight: bold;
  font-size: 50px;
  @media (max-height: 1080px) {
    font-size: 50px !important;
  }
  :disabled {
    color: white;
    background: #0D0D0F;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: white;
`;

const StyledBTN = styled(Button)`
  color: ${xMacBlue};
  background: linear-gradient(to top, ${xMacOrangeGradStart}, ${xMacOrangeGradEnd});
  border: 2px solid white;
  font-size: 30px !important;
  min-height: 40px;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
  ${props => (props.selected ? `${selected}` : '')}
  &:hover{
   ${selected}
  }
  @media (max-height: 1080px) {
    max-height: 100px;
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
  background: ${props => (props.active ? xMacBlue : 'none')};
  color: white;
`;

export {
  BaseHeader, BigHeader, StyledButton, StyledCardHeader, StyledCard, StyledBTN,
  selected, StyledCardBody, BaseFormHeader, ErrorWrapper,
};
