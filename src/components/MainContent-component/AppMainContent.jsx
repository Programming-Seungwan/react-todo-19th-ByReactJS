import styled from 'styled-components';
import MainContentHeader from './MainContent-Header/MainContentHeader';
import MainContentBody from './MainContent-Body/MainContentBody';
import MainContentFooter from './MainContent-Footer/MainContentFooter';

const StyledAppMainContent = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export default function AppMainContent() {
  return <StyledAppMainContent>
    <MainContentHeader />
    <MainContentBody />
    <MainContentFooter />
  </StyledAppMainContent>
}