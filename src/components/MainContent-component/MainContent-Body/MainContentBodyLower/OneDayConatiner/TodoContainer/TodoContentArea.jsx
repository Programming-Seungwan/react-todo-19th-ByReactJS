import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';
import TodoItemUI from './TodoItemUI';

const StyledTodoContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
`;

export default function TodoContentArea() {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  return (
    <StyledTodoContentArea>
      {selectedDayTodoList &&
        selectedDayTodoList.map((todo) => {
          return <TodoItemUI text={todo} key={todo} />;
        })}
    </StyledTodoContentArea>
  );
}
