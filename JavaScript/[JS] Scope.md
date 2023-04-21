# Scope

## ❓ Scope가 뭘까?
- ```Scope```는 유효범위. 즉, 변수에 접근할 수 있는 ```범위```를 뜻한다.
<br/>

## ❗️ Scope의 종류
> Scope는 2가지 타입이 있다.
- **```Global``` (전역)**
- **```Local``` (지역)**
<br/>

## ❗️ Global Scope(전역 스코프)와 Local Scope(지역 스코프)
### 🛠 Local Scope(지역 스코프)
- ```전역```에 선언되어 있어 어느 곳에서든지 해당 변수에 접근이 가능하다.
### 🛠 Local Scope(지역 스코프)
- ```해당 지역 안```에 선언되어 있어 해당 지역 안에서만 접근이 가능하다.
```js
  ❗️ 두 스코프에 대한 간단한 예시로
  
  var a = 1; // 전역 스코프
  function print() { // 지역 스코프
    var a = 111;
    console.log(a);
  }
```

## 출처
- [(JavaScript) 스코프(Scope)란?](https://medium.com/@su_bak/javascript-%EC%8A%A4%EC%BD%94%ED%94%84-scope-%EB%9E%80-bc761cba1023)
