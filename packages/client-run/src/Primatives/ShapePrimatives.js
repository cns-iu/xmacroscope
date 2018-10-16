import styled from "styled-components";

const dashedOutline = `
border: 10px dashed white;
`;
const solidOutline = `
border: 20px solid;
`;
const ShapeWrapper = styled.div`
  background: ${props => (props.color === "none" || props.shape === "none" ? "none" : "white")};
  color: ${props => props.color};
  text-align: center;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border-radius: 50%;
  ${props =>
    (props.color === "none" ? `${dashedOutline}` : `${solidOutline}`)};
  transition: all 1s ease-in-out;
  svg {
    padding: 40px;
  }
  path {
    transition: all 1s ease-in-out;
  }
`;

export { ShapeWrapper };
