import styled from 'styled-components';
import SideBar from './SideBar-component/SideBar';
import AppMainContent from './MainContent-component/AppMainContent';

const StyledAppContainer = styled.div`
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  height: 100vh;
  display: flex;
`;

export default function AppContainer() {
  return (
    <StyledAppContainer>
      <SideBar />
      <AppMainContent />
    </StyledAppContainer>
  );
}
