import styled from 'styled-components';

const StyledMainContentFooter = styled.footer`
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: rgba(85, 85, 85, 0.8);
  /* &::before {
    background-color: hsla(0, 0%, 52%, 0.3);
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  } */
`;

export default function MainContentFooter() {
  return (
    <StyledMainContentFooter>
      <p>All rights reserved © Seungwan, Kim 2024</p>
    </StyledMainContentFooter>
  );
}
