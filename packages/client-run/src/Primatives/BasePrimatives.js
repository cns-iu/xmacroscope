import styled from 'styled-components';
import { sportsOrange } from './BaseConfigsVariables';

const BaseHeader = styled.h1`
  color: ${sportsOrange};
  font-weight: 900;
  letter-spacing: 2px;
`;

const BigHeader = styled.h1`
  font-size: 350px !important;
  letter-spacing: 1px;
  @media (max-height: 1199px) {
    font-size: 150px !important;
  }
`;


export { BaseHeader, BigHeader };
