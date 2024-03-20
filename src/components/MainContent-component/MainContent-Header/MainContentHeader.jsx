import styled from 'styled-components';

const StyledMainContentHeader = styled.header`
  height: 80px;
  position: absolute;
  width: 100%;
`;

export default function MainContentHeader() {
  return <StyledMainContentHeader>this is header</StyledMainContentHeader>;
}
