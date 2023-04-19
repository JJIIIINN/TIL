# Promise

## ❓ Promise가 뭘까?
- ```Promise```는 자바스크립트 비동기 처리에 사용되는 객체이다.
<br/>

## ❓ Promise가 왜 필요할까?
- ```Promise```는 주로 서버에서 받아온 데이터(API)를 화면에 표시하거나 저장할 때 사용하게 된다.
- 이전까지 비동기 작업을 처리 할 때에는 ```콜백 함수```로 처리를 해야했는데 콜백함수로 처리를 하게 된다면 ```콜백지옥(Callback Hell)```이 일어나게 된다.
- 하지만 ```Promise```는 이러한 ```콜백지옥```을 방지할 수 있다.
<br/>

## 🛠 Promise를 쓰는 법
```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  });
```
- ```Promise```는 성공 할 수도, 실패 할 수도 있다.
- 위 코드처럼 성공 할 때는 ```resolve```를, 실패 할 때는 ```reject```을 호출해주면 된다.
- ```resolve```는 성공했을 때 결과 값을 설정해주는 것이고 ```reject```는 실패했을 때 오류를 설정해주는 것이다.
- ```then```에서 받은 파라미터는 ```resolve```이고 ```catch```에서 받은 파라미터는 ```reject```이다.
