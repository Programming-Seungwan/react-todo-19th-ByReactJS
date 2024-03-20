import styled from 'styled-components';

const StyledSideBar = styled.aside`
  width: 30%;
  display: flex;
  flex-direction: column;
`

export default function SideBar() {
  return <StyledSideBar>this is side bar</StyledSideBar>
}