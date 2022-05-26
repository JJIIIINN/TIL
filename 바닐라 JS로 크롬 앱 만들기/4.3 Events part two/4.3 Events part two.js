const LoginForm = document.querySelector("#Loginform");
const LoginInput = document.querySelector("#Loginform input");

const link = document.querySelector("a");

function onLoginBtnClick(event){
    event.preventDefault(); //브라우저의 기본 동작을 막아주는 함수.
    console.log(LoginInput.value); //모든지 값을 받으면 그것의 벨류에 저장된다.
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("Click!"); //이렇게 하면 오류 메세지가 뜨면서 모든 코드가 멈춤.
}

LoginForm.addEventListener("submit", onLoginBtnClick); //여기서 쓴 함수는 내가 실행시키는 것이 아니라 브라우저가 시켜주는 것이다.
link.addEventListener("click", handleLinkClick);