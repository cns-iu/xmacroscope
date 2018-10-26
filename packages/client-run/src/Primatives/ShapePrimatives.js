import styled from 'styled-components';

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
const ControlShapesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ShapeWrapperControl = styled.div`
  background: none;
  color: ${props => props.color};
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
  @media (max-height: 1199px) {
    width: ${props => props.width};
    max-width: 300px;
    svg {
    padding: 10px;
    }
  }
`;

export {
  ShapeWrapper, ControlShapesContainer, ShapeWrapperControl,
};
