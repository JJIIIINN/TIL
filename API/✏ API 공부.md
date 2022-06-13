<h1>✏ API 공부


<h2>비동기적으로 돌아가는 Fetch

<b>한 마디로</b>

```js
fetch('html').then(callbackme);
console.log(1);
console.log(2);
```

<b>이런 코드가 있으면 html이라는 것을 fetch로 받는 시간에 다른 코드를 먼저 실행시켜주는 것이다. html을 받고 난 후 callbackme라는 함수를 실행시켜주는 것이다.</b>



<h2>동기와 비동기의 차이점</h2>

<p><b>동기는 요청과 응답을 같이해서 fetch 응답이 올 때까지 아무 코드도 실행하지 않는거고</b></p>
<p><b>반대로 비동기는 요청과 응답을 따로해서 fetch 응답이 올 때까지 다른 코드를 실행하는 거라고 생각하면 된다.</b></p> 