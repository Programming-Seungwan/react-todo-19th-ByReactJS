import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SideBar from './SideBar-component/SideBar';
import AppMainContent from './MainContent-component/AppMainContent';
import { TodoContext } from '../context';

const StyledAppContainer = styled.div`
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  height: 90vh;
  display: flex;
  margin: 0 auto;
  background-color: #eaeff1;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 0 5%;
    background-color: #bcdbad;
    height: 100dvh;
  }
`;

export default function AppContainer() {
  const [selectedDayString, setSelectedDayString] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [selectedDayTodoList, setSelectedDayTodoList] = useState(null);
  const [selectedDayDoneList, setSelectedDayDoneList] = useState(null);

  // 의존성 배열을 제대로 사용하지 않은 느낌이 강함. 관련 리팩터링 진행

  useEffect(() => {
    const todo =
      localStorage.getItem(`${selectedDayString}todo`) === null
        ? []
        : JSON.parse(localStorage.getItem(`${selectedDayString}todo`));

    const done =
      localStorage.getItem(`${selectedDayString}done`) === null
        ? []
        : JSON.parse(localStorage.getItem(`${selectedDayString}done`));
    setSelectedDayTodoList(todo);
    setSelectedDayDoneList(done);
  }, [selectedDayString]);

  return (
    <TodoContext.Provider
      value={{
        selectedDayString,
        setSelectedDayString,
        selectedDayTodoList,
        setSelectedDayTodoList,
        selectedDayDoneList,
        setSelectedDayDoneList,
      }}
    >
      <StyledAppContainer>
        <SideBar />
        <AppMainContent />
      </StyledAppContainer>
    </TodoContext.Provider>
  );
}
