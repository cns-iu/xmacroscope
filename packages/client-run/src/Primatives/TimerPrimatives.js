import styled from "styled-components";

const TimerWrapper = styled.div`
  display: ${props => props.displayTimer ? "display" : "none"};
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 100px;
`;

export default TimerWrapper;
