import styled from 'styled-components';

const StyledDoneLabel = styled.div`
  width: 100%;
  height: 10%;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 10%;
`;

export default function DoneLabel() {
  return <StyledDoneLabel>Done</StyledDoneLabel>;
}
