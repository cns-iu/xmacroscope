import styled from 'styled-components';
import { Button, CardHeader, Card } from 'reactstrap';
import { selected } from './BasePrimatives';
import {
  sportsGray, sportsOrange, sportsTransGray, sportsYellow,
} from './BaseConfigsVariables';

const dashedOutline = `
border: 8px dashed white;
`;
const solidOutline = `
border: 14px solid;
`;

const dashedOutlineControl = `
border: 2px dashed;
`;
const solidOutlineControl = `
border: 3px solid;
`;
const ControlKeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  max-width: 250px;
  margin: auto;
`;
const KeyInput = styled(Button)`
  ${props => (props.hide === 'hide' ? 'visibility: hidden' : '')};
  color: ${sportsYellow};
  border-color: ${sportsYellow};
  background: none;
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  margin: auto;
  @media (max-height: 1080px) {
    max-height: 40px;
    max-width: 40px;
  }
  &:hover{
   ${selected}
  }
`;
const ControlColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
`;
const ControlColor = styled.div`
  margin: auto;
  display: flex;
  color: ${props => props.color};
  justify-content: space-around;
  width: ${props => props.width};
  height: ${props => props.width};
  ${props => (props.selected ? 'background: none' : `background: ${props.color}`)};
  ${props => (props.selected ? `${solidOutlineControl}` : '')};
  border-radius: 50%;
  transition: all 1s ease-in-out;
  @media (max-height: 1080px) {
    max-height: 40px;
    max-width: 40px;
  }
`;
const ControlShapesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ShapeWrapperControl = styled.div`
  background: none;
  color: ${sportsYellow};
  ${props => (props.selected ? `${solidOutlineControl}` : `${dashedOutlineControl}`)};
  text-align: center;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border-radius: 50%;
  transition: all 1s ease-in-out;
  svg {
    padding: 5px;
  }
  path {
    transition: all 1s ease-in-out;
  }
  }
`;
const ShapeWrapper = styled.div`
  background: ${props => (props.color === 'none' || props.shape === 'none'
    ? 'none'
    : 'white')};
  color: ${props => props.color};
  text-align: center;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border-radius: 50%;
  ${props => (props.color === 'none' ? `${dashedOutline}` : `${solidOutline}`)};
  transition: all 1s ease-in-out;
  svg {
    padding: 20px;
  }
  path {
    transition: all 1s ease-in-out;
  }
  @media (max-height: 1080px) {
    svg {
    padding: 10px;
    }
  }
`;

export {
  ShapeWrapper, ControlShapesContainer, ShapeWrapperControl,
  ControlColorsContainer, ControlColor, ControlKeypadContainer, KeyInput,
};
