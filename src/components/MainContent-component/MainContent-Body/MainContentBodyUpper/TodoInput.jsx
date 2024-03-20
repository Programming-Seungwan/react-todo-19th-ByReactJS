import styled from 'styled-components';

const StyledInputFormContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
`;

const StyledInputForm = styled.form`
`;

const StyledTodoTextInput = styled.input``;

export default function TodoInput() {
  return (
    <StyledInputFormContainer>
      <StyledInputForm>
        <StyledTodoTextInput type="text" />
      </StyledInputForm>
    </StyledInputFormContainer>
  );
}
