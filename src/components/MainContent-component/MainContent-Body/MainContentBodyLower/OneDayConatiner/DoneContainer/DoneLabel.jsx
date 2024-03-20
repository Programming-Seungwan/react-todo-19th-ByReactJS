import styled from 'styled-components';

const StyledDoneLabel = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: tomato;
`;

export default function DoneLabel() {
  return <StyledDoneLabel>Done</StyledDoneLabel>;
}