# justify-content, align-items가 안 먹힐 때

### ☝️ 문제 상황
한 요소를 가운데로 정렬하고 싶은데 아무리 해도 가운데로 옮겨지지 않았다.

### ❓ 문제점
부모 요소에 width와 height가 없었다.

### ❗️ 해결 방법
`justify-content`, `align-items`는 정렬하고 싶은 요소의 부모 요소에 `width`와 `height`를 기준으로 정렬되기 때문에 부모 요소에 `width`와 `height`를 명시해준 후 `justify-content`, `align-items`를 사용한다.
