import styled from 'styled-components';
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
  return (
    <StyledDoneItemUI>
      <StyledDoneItemText>{text}</StyledDoneItemText>
      <StyledIconsContainer>
        <StyledRollBackArrowIcon icon={faArrowLeftLong} />
        <StyledTrashCanIcon icon={faTrashCan} />
      </StyledIconsContainer>
    </StyledDoneItemUI>
  );
}
