# async와 await
> 자바스크립트는 싱글 스레드 프로그래밍 언어이기 때문에 비동기 처리가 기반이 된다.  
> 비동기 처리는 결과가 언제 반환될 지 알 수 없기에 동기식으로 처리하는 기법들이 사용되어야 한다.  
> 대표적인 동기식 처리 방식에는 ```setTimeout```, ```Promise```, ```callback```가 있다.
<br/>

## ❓ async랑 await이 어떤 걸 해줄까?
```
자바스크립트는 비동기 처리가 기반이기에 결과가 언제 반환될 지 알 수 없다.
때문에 동기식으로 처리하는 기법들이 사용되어야 한다.
async와 await은 이를 기존의 방법들보다 더 쉽고 간편하게 동기식으로 처리해준다.
```
<br/>

## ❓ Promise가 뭐야?
> [Promise에 대해 먼저 알아보기](, "Promise")
<br/>

## ❓ async와 await을 쓰면 어떤 게 좋을까?
- Promise를 쓸 때 더 쉽고 편하게 사용 할 수 있다.
- 사용법이 쉽고 간단하다.
### Promise 코드
```javascript
function p() {
return new Promise((resolve, reject) => {
	resolve('hello');
  // or reject(new Error('error');
	});
}

p().then((n) => console.log(n));
```
### async 코드
```javascript
async function p2(){ // async을 지정해주면 Promise를 리턴하는 함수로 만들어줍니다.
	return 'hello'; 
}

p2().then((n) => console.log(n));
```
<br/>

## 🛠 async와 await 사용법
- ```function``` 앞에 ```async```를 붙여준다.
- ```promise``` 앞에 ```await```를 붙어준다.
```javascript
예)
async function f() {
  await Promise.reject(new Error("에러 발생!"));
}
```
<br/>

## ❗️ async의 예외처리 방법
```Promise``` 객체를 사용하기 때문에 .then / .catch로 예외처리를 할 수 있다.
```javascript
예)
async function p2() {
    throw 'error';
    //throw new Error("error");
    //await Promise.reject(new Error("error"));
    //return Promise.reject(new Error("error"));
}

p2()
    .then((n) => console.log(n))
    .catch((n) => console.log(n));
```
<br/>

## 출처
- [동기, 비동기란? (+Promise, async/await 개념)](https://velog.io/@khy226/%EB%8F%99%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%9E%80-Promise-asyncawait-%EA%B0%9C%EB%85%90, "")
- [[javascript] async와 await의 개념과 사용법](https://velog.io/@khyup0629/javascript-async%EC%99%80-await%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%82%AC%EC%9A%A9%EB%B2%95, "")
- [자바스크립트 Async/Await 개념 & 문법 정복](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%B2%98%EB%A6%AC-async-await, "")
