import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

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
  @media screen  and (max-width: 768px){
    justify-content: space-evenly;
    column-gap: 0;
  };
`;

const StyledTodoTextInput = styled.input`
  border: none;
  outline: none;
  height: 35px;
  text-indent: 15px;
  min-width: 300px;
  border-radius: 5px;
  @media screen  and (max-width: 768px){
    width: 250px;
    min-width: 250px;
  }
`;

const StyledTodoSubmitButton = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
`;

export default function TodoInput() {
  return (
    <StyledInputFormContainer>
      <StyledInputForm>
        <StyledTodoTextInput type="text" placeholder="Add your new Todo List!" />
        <StyledTodoSubmitButton icon={faCirclePlus} />
      </StyledInputForm>
    </StyledInputFormContainer>
  );
}
