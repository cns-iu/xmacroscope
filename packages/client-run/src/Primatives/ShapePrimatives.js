import styled from "styled-components";

const dashedOutline = `
border: 5px dashed white;
`;
const solidOutline = `
border: 10px solid;
`;
const ShapeWrapper = styled.div`
  background: ${props => (props.color === "none" || props.shape === "none" ? "none" : "white")};
  color: ${props => props.color};
  text-align: center;
  margin: 25px;
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
