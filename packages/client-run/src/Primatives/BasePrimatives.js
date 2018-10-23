import styled from 'styled-components';
import { Button, CardHeader, Card } from 'reactstrap';
import { sportsGray, sportsOrange, sportsTransGray } from './BaseConfigsVariables';


const BaseHeader = styled.h1`
  color: white;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 65px;
`;

const BigHeader = styled.h1`
  font-size: 350px !important;
  letter-spacing: 1px;
  @media (max-height: 1199px) {
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
`;
const StyledCardHeader = styled(CardHeader)`
  background-color: ${sportsOrange};
`;
const StyledCard = styled(Card)`
  background-color: ${sportsTransGray};
`;


export { BaseHeader, BigHeader, StyledButton, StyledCardHeader, StyledCard };
