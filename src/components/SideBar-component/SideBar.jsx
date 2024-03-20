import styled from 'styled-components';

const StyledSideBar = styled.aside`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export default function SideBar() {
  return <StyledSideBar>this is side bar</StyledSideBar>;
}
