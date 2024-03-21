import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const StyledDoneItemUI = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDoneItemText = styled.p`
  /* flex-grow: 6;
  flex-shrink: 0; */
  width: 65%;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: center;
  column-gap: 13px;
`;

const StyledRollBackArrowIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledTrashCanIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export default function DoneItemUI({ text }) {
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

  function handleClickRollBackArrowIcon() {
    const prevLocalStorageDoneData = JSON.parse(
      localStorage.getItem(localStorageDoneKey)
    );
    const prevLocalStorageDoneIndex = prevLocalStorageDoneData.indexOf(text);
    prevLocalStorageDoneData.splice(prevLocalStorageDoneIndex, 1);
    localStorage.setItem(
      localStorageDoneKey,
      JSON.stringify(prevLocalStorageDoneData)
    );

    const prevLocalStorageTodoData =
      localStorage.getItem(localStorageTodoKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageTodoKey));
    prevLocalStorageTodoData.push(text);
    localStorage.setItem(
      localStorageTodoKey,
      JSON.stringify(prevLocalStorageTodoData)
    );

    setSelectedDayTodoList(prevLocalStorageTodoData);
    setSelectedDayDoneList(prevLocalStorageDoneData);
  }

  function handleClickTrashCanIcon() {
    const prevLocalStorageDoneData = JSON.parse(
      localStorage.getItem(localStorageDoneKey)
    );

    const prevLocalStorageDoneIndex = prevLocalStorageDoneData.indexOf(text);
    prevLocalStorageDoneData.splice(prevLocalStorageDoneIndex, 1);

    localStorage.setItem(
      localStorageDoneKey,
      JSON.stringify(prevLocalStorageDoneData)
    );
    setSelectedDayDoneList(prevLocalStorageDoneData);
  }
  return (
    <StyledDoneItemUI>
      <StyledDoneItemText>{text}</StyledDoneItemText>
      <StyledIconsContainer>
        <StyledRollBackArrowIcon
          icon={faArrowLeftLong}
          onClick={handleClickRollBackArrowIcon}
        />
        <StyledTrashCanIcon
          icon={faTrashCan}
          onClick={handleClickTrashCanIcon}
        />
      </StyledIconsContainer>
    </StyledDoneItemUI>
  );
}
