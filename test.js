function getYesterdayDateString(dateString, calculateDay) {
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
console.log(getYesterdayDateString('2024-02-01', 1));
