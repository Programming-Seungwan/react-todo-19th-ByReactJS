const timestampString = '1710999341182';
const timestampNumber = parseInt(timestampString, 10); // 문자열을 정수로 변환

const dateObject = new Date(timestampNumber);

// 하지만 추후에 locale 시간으로 바꿔줄 필요가 있음
