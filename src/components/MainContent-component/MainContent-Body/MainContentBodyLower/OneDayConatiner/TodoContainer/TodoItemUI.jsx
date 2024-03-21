import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';

const StyledTodoItemUI = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTodoItemText = styled.p`
  /* flex-grow: 6;
  flex-shrink: 0; */
  width: 65%;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-grow: 4;
  flex-shrink: 0; */
  width: 35%;
  justify-content: center;
  column-gap: 13px;
`;

const StyledCheckIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;
const StyledTrashCanIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export default function TodoItemUI({ text }) {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  const localStorageTodoKey = `${selectedDayString}todo`;
  const localStorageDoneKey = `${selectedDayString}done`;

  function handleClickCheckIcon() {
    const prevLocalStorageData = JSON.parse(
      localStorage.getItem(localStorageTodoKey)
    );
    const prevItemLocalStorageIndex = prevLocalStorageData.indexOf(text);
    prevLocalStorageData.splice(prevItemLocalStorageIndex, 1);
    localStorage.setItem(
      localStorageTodoKey,
      JSON.stringify(prevLocalStorageData)
    );

    const prevLocalStorageDoneData =
      localStorage.getItem(localStorageDoneKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageDoneKey));
    prevLocalStorageDoneData.push(text);
    localStorage.setItem(
      localStorageDoneKey,
      JSON.stringify(prevLocalStorageDoneData)
    );

    setSelectedDayTodoList(prevLocalStorageData);
  }

  function handleClickTrashIcon() {}
  return (
    <StyledTodoItemUI>
      <StyledTodoItemText>{text}</StyledTodoItemText>
      <StyledIconsContainer>
        <StyledCheckIcon icon={faCheck} onClick={handleClickCheckIcon} />
        <StyledTrashCanIcon icon={faTrashCan} />
      </StyledIconsContainer>
    </StyledTodoItemUI>
  );
}
