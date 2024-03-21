import styled from 'styled-components';
import { useState } from 'react';
import SideBar from './SideBar-component/SideBar';
import AppMainContent from './MainContent-component/AppMainContent';
import { ThemeContext } from '../context';

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
  const [selectedDayString, setSelectedDayString] = useState(new Date().toISOString().slice(0, 10));

  return (
    <ThemeContext.Provider value={{ selectedDayString, setSelectedDayString }}>
      <StyledAppContainer>
        <SideBar />
        <AppMainContent />
      </StyledAppContainer>
    </ThemeContext.Provider>
  );
}
