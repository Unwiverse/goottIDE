/**
 * Ex02.html 파일과 연동된 자바스크립트 파일
 */
 
 /* 웹 문서의 특정 요소를 가져오는 작업 */
let title = document.querySelector("#title");

let userName = document.querySelectorAll(".user")[0]; //특정 값만 바꾸고 싶으면 배열 index로 접근

let userImg = document.querySelector("#profile img");

/* 가져온 요소에 변경작업 진행*/

/*
	자바스크립트에서 스타일 변경하는 방법
	형식) 요소.style.속성명 = "값";
*/

title.onclick = () => {
	title.innerText = "프로필";
	title.style.backgroundColor = "black";
	title.style.color = "white";
}

userName.onclick = () => {
	userName.innerHTML = `이름: <b><i>김호갱</i></b>`;
}

userImg.onclick = () => {
	userImg.src = `../images/open.jpg`;
}