import styled from 'styled-components';
import { Button, CardHeader, Card } from 'reactstrap';
import {
  sportsGray, sportsOrange, sportsTransGray, sportsYellow,
} from './BaseConfigsVariables';


const selected = `
color: ${sportsGray};
background: ${sportsYellow};
border-color: ${sportsYellow};
`;
const BaseHeader = styled.h1`
  color: white;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 65px;
  @media (max-height: 1080px) {
    font-size: 40px !important;
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
  background: none;
  ${props => (props.selected ? `${selected}` : '')}
  &:hover{
   ${selected}
  }
`;
const StyledCard = styled(Card)`
  background-color: ${sportsTransGray};
`;


export {
  BaseHeader, BigHeader, StyledButton, StyledCardHeader, StyledCard, StyledBTN,
  selected,
};
