import styled from 'styled-components'
import SideBar from './SideBar-component/SideBar'
import AppMainContent from './MainContent-component/AppMainContent'

const StyledAppContainer = styled.div`
  width: 70%;
  max-width: 70%;
  min-width: 70%;
  height: 100vh;
  display: flex;
`

export default function AppContainer() {
  return <StyledAppContainer>
    <SideBar/>
    <AppMainContent/>
  </StyledAppContainer>
}