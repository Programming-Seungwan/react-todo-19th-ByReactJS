import styled from 'styled-components';
import TodoLabel from './TodoLabel';
import TodoContentArea from './TodoContentArea';

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  flex-shrink: 0;
  width: 49%;
  /* border-top: 1px solid black;
  border-right: 0.75px solid black; */
  background-color: #bcdbad;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    background-color: white;
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 45%;
    min-height: 45%;
    border-radius: 20px;
  }
`;

export default function TodoContainer() {
  return (
    <StyledTodoContainer>
      <TodoLabel />
      <TodoContentArea />
    </StyledTodoContainer>
  );
}
