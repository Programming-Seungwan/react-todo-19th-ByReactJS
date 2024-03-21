import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const StyledDateCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #d5eacb;
  }
`;

export default function DateCard({ date }) {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  function handleClickDateCard() {
    setSelectedDayString(date);
    const newSelectedDayTodoKey = `${date}todo`;
    const newSelectedDayDoneKey = `${date}done`;
    const prevLocalStorageTodoData =
      localStorage.getItem(newSelectedDayTodoKey) === null
        ? []
        : JSON.parse(localStorage.getItem(newSelectedDayTodoKey));
    const prevLocalStorageDoneData =
      localStorage.getItem(newSelectedDayDoneKey) === null
        ? []
        : JSON.parse(localStorage.getItem(newSelectedDayDoneKey));
    setSelectedDayTodoList(prevLocalStorageTodoData);
    setSelectedDayDoneList(prevLocalStorageDoneData);
  }
  return <StyledDateCard onClick={handleClickDateCard}>{date}</StyledDateCard>;
}
