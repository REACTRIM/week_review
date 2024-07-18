섹션 5: React 입문
5.1) 실습 준비하기
Npm create vite@latest
Npm i
Npm run dev

5.2) React 컴포넌트
컴포넌트 : 자바 스크립트가 html 태그를 return하도록 만든 것
컴포넌트 생성하는 함수의 이름 첫 글자는 대문자여야 한다.
App이 루트 컴포넌트임. App 안에 자식 컴포넌트를 < /> 형식으로 넣어야 함.

5.3) JSX로 UI 표현하기
Jsx 규칙
js값을 html로 랜더링하고 싶다면 { } 안에 넣기. 중괄호 안에는 숫자, 문자열 배열 값만 렌더링 된다. 모든 태그는 닫혀 있어야 한다. 최상위 태그는 반드시 하나여야만 한다. (빈 태그도 가능)

css처럼 border-bottom이 아닌 borderBottom처럼써야 됨.
Class가 아닌 className이라고 써야 됨.

별도의 css파일 만들기.

5.4) Props로 데이터 전달하기
부모 컴포넌트가 자식 컴포넌트에게 함수 인수 전달하듯 원하는 값을 전달할 수 있다.
매개변수 받아올 때 객체 구조분해할당 형태로 받아오자.

5.5) 이벤트 처리하기
Event Handling ex) onClick, onChange, onMouseEnter, …
ex) onClick= {( e ) => {
}} //e : 합성 이벤트 객체 (Synthetic Base Event 객체)
또는
const onClickButton = () => {
}
<button onClick = {onClickButton}

> //여기서 onClickButton()이라고 적으면

5.6) State로 상태관리하기
state: 현재 가지고 있는 형태나 모양을 정의. 변화할 수 있는 동적인 값이다.
state의 값에 따라 렌더링 되는 UI가 결정된다. state 바뀌면 알아서 리렌더링한다.
ex) const [state, setState] = useState(0); //state에는 useState를 통해 만들어진 값이 저장, setState에는 state 값 변경시키는 함수가 저장.

5.7) State와 Props
<Bulb light={light} /> 코드를 통해 light 상태 변수를 Bulb 컴포넌트의 prop으로 전달.
light={light}에서 왼쪽의 light는 Bulb 컴포넌트에서 사용할 prop의 이름이고, 오른쪽의 light는 ParentComponent(App)의 상태 변수이다.

리렌더링 발생하는 상황
자신의 state값 변경된 경우
자신이 제공받는 props 값 변경된 경우
부모 컴포넌트가 리렌더링 되는 경우
따로 파일을 만들자!

5.8) State로 사용자 입력 관리하기 1
onChange 뿐만이 아니라 value 속성도 지정해주기

5.9) State로 사용자 입력 관리하기 2
비슷한 여러 개의 state는 하나의 객체로 묶어서 관리하기
const [input, setInput] = useState({
name: “”,
birth: “”,
});
const onChangeName = (e) => {
setInput ({
…input, // 관련 없는 건 그대로 유지
name : e.target.value
})
};
비슷한 이벤트는 통합 이벤트 핸들러로
const onChange = (e)=> {
setInput ({
…input,
[e.target.name]: e.target.value, // name에는 event가 발생한 태그의 name 속성이 들어가있음.
});
};

5.10) useRef로 컴포넌트의 변수 생성하기
useState와 비슷하나 리렌더링 되지 않음.

5.11) React Hooks
클래스 컴포넌트 기능을 함수 컴포넌트에서도 이용할 수 있도록
ex) useState, useRef, useEffect
함수 컴포넌트 내부에서만 호출 가능
조건문, 반복문 내에서는 X
use 접두사 이용해서 나만의 hook 제작 가능(custom hook 은 hooks라는 별도의 폴더에서 보관함.)
