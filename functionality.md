## 미션 목표

- 1주차 미션의 결과물을 그대로 React로 구현합니다. (‼️ todo / done 개수 잊지 마세요 ‼️)
- Functional Components를 사용합니다.
- React Hooks만을 사용해 상태를 관리합니다.
- (이번주는 Redux, MobX, Recoil, SWR등의 외부 상태관리 라이브러리를 사용하지 않아도 미션 수행에 지장이 없습니다.)

### 구현 방식
1. 상태 : `useState()` 훅이나 `useReducer()` 훅을 사용
2. 스타일링 : styled-components 라이브러리 사용
3.

### 추가 기능 구현 사항
1. 날짜 해시 값을 가져와서 언제 해당 할 일을 기록했는지 보여주기

### 고민 사항
1. `useEffect()` 훅을 쓸 일이 있는가? API 요청이나 `useRef`를 달아주는 일이 생길지? 매번 리렌더링을 하기보다는 useRef() 훅을 이용해서 진행. 그렇다면 `useEffect()` 훅도 사용
2. 날짜와 상태를 어떻게 구현할지? 페이지가 새로고침 되어도 날라가면 안됨(이번 과제에서도 로컬 스토리지를 사용).
3. form 태그를 쓸지? 사용하면 그냥 엔터를 눌러도 전송이 됨. form의 `onSubmit` 속성에 핸들러를 달아주기
4. 