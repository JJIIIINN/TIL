const LoginForm = document.querySelector("#Loginform");
const LoginInput = document.querySelector("#Loginform input");

function onLoginBtnClick(event){
    event.preventDefault(); //브라우저의 기본 동작을 막아주는 함수.
    console.log(LoginInput.value); //모든지 값을 받으면 그것의 벨류에 저장된다.
}

LoginForm.addEventListener("submit", onLoginBtnClick);