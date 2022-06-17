<h1>JSX 사용 시 주의점</h1>

<b>HTML을 JavaScript 내부에서 사용하는 것으므로 몇 가지 지켜야 할 규칙이 있다.</b>



<ul>
    <li><b>HTML요소에 class값을 정의할 때, 원래 <code>class = "container"></code>이렇게 하여야 했지만, JSX에서는 <code>className = "container"</code> 이렇게 해주어야한다.</b></li><br>
    <li><b>반복문 <code>for</code>는 <code>htmlFor</code>로 사용해줘야 한다.</b></li><br>
    <li><b>주석은 <code>{/*주석*/}</code> 이렇게 사용해줘야 한다.</b></li><br>
    <li><b><code>link, a 태그</code>같이 마지막에 안닫아줘도 되는 것들도 JSX에서는 무조건 닫아줘야한다.</b></li><br>
    <li><b>JSX 내부에서도 JS를 사용할 수 있다. {}로 불러올 수 있다. <code>{console.log(this.props)}</code> 이렇게.</b></li>
    </ul>



<h2>🔥 Tip

<b>1. 속성은 항상 쌍따옴표로 감싼다.</b>

```react
const hi = <input readOnly={true}>;
          
const myFavorite = {
    food: <li>샐러드</li>
    animal: <li>dog</li>
    hobby: <li className="list-item">programming</li>
}
```

<b>hobby와 같이 속성은 무조건 "" 로 감싸주어야함.</b>



<b>2. 어떤 태그라도 Self-closing tag가 가능하다.</b>

```react
<input> => <input/>
<div></div> => <div/>
```



<b>3. 태그가 한번에 싸여져 있어야한다.</b>

``` react
import React, {Component} from 'react';

class App extends Component {
    render(){
        return (
            <div>
            	<div></div>
            	<div></div>
            </div>
        );
    }
}

export default App;
```

<b>그래서 반드시 div나 Fragment태그로 감싸진 형태여야 한다.</b>



<b>4. 변수를 먼저 렌더 안에서 정의하고 리턴에서 변수명을 중괄호로 감싼 형태로 표현한다.</b>

```react
import React, {Component, Fragment} from 'react';

class App extends Component {
    render() {
        const name = 'Edie';
        const hello = 'Hello :)';
        return (
        <Fragment>
        	<div>{name}<div>
            <div>{hello}</div>
        </Fragment>
        );
    }
}
                
export default App;
```

