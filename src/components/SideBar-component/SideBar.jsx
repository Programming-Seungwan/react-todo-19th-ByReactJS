import styled from 'styled-components';
import SideBarExplanation from './SideBarExplanation';
import DateCard from './DateCard';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const StyledSideBarDateOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const StyledSideBar = styled.aside`
  width: 20%;
  /* background-color: #d5e9cb; */
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  /* margin: auto; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledDateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* 열 너비 자동 조정 */
  grid-gap: 10px; /* 요소 사이 간격 */
  flex-grow: 1;
`;

function getDateString(dateString, calculateDay) {
  // 주어진 문자열을 '-'를 기준으로 분할하여 년, 월, 일을 추출
  const [year, month, day] = dateString.split('-').map(Number);

  // 주어진 년월일을 기준으로 Date 객체 생성
  const date = new Date(year, month - 1, day);

  // Date 객체에서 하루를 뺀 후 해당 날짜를 yyyy-mm-dd 형식의 문자열로 변환
  const yesterdayDate = new Date(date);
  yesterdayDate.setDate(date.getDate() - calculateDay);

  // 년, 월, 일을 가져와서 yyyy-mm-dd 형식으로 변환
  const yesterdayYear = yesterdayDate.getFullYear();
  const yesterdayMonth = String(yesterdayDate.getMonth() + 1).padStart(2, '0');
  const yesterdayDay = String(yesterdayDate.getDate()).padStart(2, '0');

  return `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`;
}

export default function SideBar() {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  const dateArray = [];
  for (let i = -2; i <= 2; i++) {
    dateArray.push(getDateString(selectedDayString, i));
  }

  return (
    <StyledSideBar>
      <SideBarExplanation />
      <StyledSideBarDateOuterContainer>
        <StyledDateContainer>
          <DateCard date={dateArray[4]} />
          <DateCard date={dateArray[3]} />
          <DateCard date={dateArray[2]} />
          <DateCard date={dateArray[1]} />
          <DateCard date={dateArray[0]} />
        </StyledDateContainer>
      </StyledSideBarDateOuterContainer>
    </StyledSideBar>
  );
}
