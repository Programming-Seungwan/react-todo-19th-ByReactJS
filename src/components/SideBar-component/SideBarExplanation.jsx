import styled from 'styled-components';

const StyledSideBarExplanation = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  font-size: 35px;
  font-weight: 600;
`;

export default function SideBarExplanation() {
  return <StyledSideBarExplanation>Easy Date pick</StyledSideBarExplanation>;
}
