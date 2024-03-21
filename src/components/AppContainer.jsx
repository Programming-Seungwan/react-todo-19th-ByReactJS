import styled from 'styled-components';
import SideBar from './SideBar-component/SideBar';
import AppMainContent from './MainContent-component/AppMainContent';

const StyledAppContainer = styled.div`
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  @media screen  and (max-width: 768px){
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 0 5%;
  }
`;

export default function AppContainer() {
  return (
    <StyledAppContainer>
      <SideBar />
      <AppMainContent />
    </StyledAppContainer>
  );
}
