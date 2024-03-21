import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../../../context';
import makeUniqueTodoDateString from '../../../../utils/makeTimeString';

const StyledInputFormContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
`;

const StyledInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    column-gap: 0;
  }
`;

const StyledTodoTextInput = styled.input`
  border: none;
  outline: none;
  height: 35px;
  text-indent: 15px;
  min-width: 300px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 250px;
    min-width: 250px;
  }
`;

const StyledTodoSubmitButton = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
`;

export default function TodoInput() {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);
  const todoInputRef = useRef();
  function handleSubmitTodoInputForm(event) {
    event.preventDefault();
    const localStorageKey = `${selectedDayString}todo`;
    const prevLocalStorageData =
      localStorage.getItem(localStorageKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageKey));
    const currentTimeUniqueString = makeUniqueTodoDateString();
    prevLocalStorageData.push(
      `${todoInputRef.current.value}${currentTimeUniqueString}`
    );
    localStorage.setItem(localStorageKey, JSON.stringify(prevLocalStorageData));
    setSelectedDayTodoList(prevLocalStorageData);
    todoInputRef.current.value = '';
  }
  return (
    <StyledInputFormContainer onSubmit={handleSubmitTodoInputForm}>
      <StyledInputForm>
        <StyledTodoTextInput
          type="text"
          placeholder="Add your new Todo List!"
          ref={todoInputRef}
        />
        <StyledTodoSubmitButton icon={faCirclePlus} />
      </StyledInputForm>
    </StyledInputFormContainer>
  );
}
