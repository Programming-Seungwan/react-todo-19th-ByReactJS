import styled from 'styled-components';

const StyledDoneContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
`;

export default function DoneContentArea() {
  return (
    <StyledDoneContentArea>This is done content area!</StyledDoneContentArea>
  );
}
