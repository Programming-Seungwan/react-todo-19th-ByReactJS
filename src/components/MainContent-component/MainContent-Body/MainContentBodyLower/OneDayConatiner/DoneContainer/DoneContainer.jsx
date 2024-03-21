import styled from 'styled-components';
import DoneLabel from './DoneLabel';
import DoneContentArea from './DoneContentArea';

const StyledDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 50%;
  outline: 1px solid black;
`;

export default function DoneContainer() {
  return (
    <StyledDoneContainer>
      <DoneLabel />
      <DoneContentArea />
    </StyledDoneContainer>
  );
}
