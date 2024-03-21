import styled from 'styled-components';

const StyledMainContentHeader = styled.header`
  height: 80px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  font-size: 25px;
  font-weight: 600;
`;

export default function MainContentHeader() {
  return (
    <StyledMainContentHeader>Todo List Web Application</StyledMainContentHeader>
  );
}
