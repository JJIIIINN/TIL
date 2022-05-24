<center><h1>var와 let, const</h1></center>

![재선언,재할당](https://raw.githubusercontent.com/JJIIIINN/image_save/master/img/%EC%9E%AC%EC%84%A0%EC%96%B8%2C%EC%9E%AC%ED%95%A0%EB%8B%B9.png)

<h1>var</h1>

<b>먼저 var는 변수 선언 방식에서 가장 큰 단점을 가지고 있다.</b>

```js
    var name = 'bathingape'
    console.log(name) // bathingape

    var name = 'javascript'
    console.log(name) // javascript
```

<p>이렇게 <b>재 선언을 하였음에도 각기 다른 값</b>이 나오게 된다.
    <br>이것은 코드가 길어지면 <b>어디에서 어떻게 사용 될지도 파악하기 힘들고, 값이 바뀔 우려</b>도 있다.    
</p>

**let과 const는 이러한 단점을 보안하기 위해 추가되었다.**



<h1>let</h1>

**흔히 변수라고 불린다.**

```js
	let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared
```

<p>
    <b>var와 달리 재 선언을 했다면 이미 선언 되었다는 에러 메세지</b>가 나온다.
    <br>하지만 <b>변수 특성상 값을 재 할당하는 것</b>은 가능하다.
</p>

<h1>const</h1>

**흔히 상수라고 불린다.**

```js
const name = 'bathingape'
    console.log(name) // bathingape

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.
```

<p>
    <b>var와 상반되게 재 선언, 재 할당을 하게 되면 에러 메세지</b>가 나온다.
    <br><b>값이 절대 변하지 않는 성질</b>을 가지고 있다.
</p>