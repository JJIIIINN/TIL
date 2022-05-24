<center>
    <h1>HTTP(Hyper Text Transfer Protocol)란?</h1>
</center>
<ul>
    <li>하이퍼텍스트를 전송하는 프로토콜이다.</li>
    <li>월드 와이드 웹(WWW)에 내재된 프로토콜이다.</li>
    <li>HTTP는 인터넷에서 데이터를 주고 받을 수 있는 있는 프로토콜이다.</li>
    <li>웹 페이지를 방문할 때마다 컴퓨터는 HTTP를 사용하여 인터넷 어딘가에 있는 다른 컴퓨터에서 해당 페이지를 다운로드한다.</li>
</ul>
![http](https://raw.githubusercontent.com/JJIIIINN/image_save/master/img/http.png)

<center><h2>프로토콜?</h2></center>
<ul>
    <li>프로토콜은 규칙(약속)이라는 의미이다.</li>
    <li>컴퓨터 네트워크에서 데이터를 주고 받을 때, 이러한 규칙에 맞춰 개발하고 그 정보들을 교환할 수 있게 된 것이다.</li>
    <li>컴퓨터 네트워크에서 데이터를 보내고 받는 성격에 따라 프로토콜이 만들어졌다.<br>ex) 웹 문서는 HTTP, 파일은 FTP, 메일은 SMTP,POP 등과 같이.</li>
</ul><br>

<center><h2>HTTP를 알아야하는 이유</h2></center>
<ul>
    <li><img src="C:\Users\DSM2022\OneDrive\바탕 화면\사진\error.JPG" alt="http" style="zoom:30%; float:right;" />클라이언트, 서버 모두 HTTP를 이용해 통신하고 있기 때문에.<br><br><br></li>
    <li>에러를 해결하는데에도 HTTP 지식이 필요하기 때문에.</li>
    </ul><br><br>

<center><h2>HTTP의 특징</h2>
<b><ul>
	<div>클라이언트 서버 구조</div>
    <div>무상태 프로토콜</div>
    <div>비 연결성</div>
    <div>HTTP 메세지</div>
    <div>단순함, 확장 가능</div>
    </ul></b></center>



<center><h3>클라이언트 서버 구조</h3>
<p>
    <b>클라이언트가 서버에 요청을 보내면 서버는 그에 대한 응답을 보내는 구조.</b>
    </p><br>
</center>
![서버구조](https://raw.githubusercontent.com/JJIIIINN/image_save/master/img/%EC%84%9C%EB%B2%84%EA%B5%AC%EC%A1%B0.webp)

<center><h3>무상태 프로토콜</h3>
<p>
	HTTP에서 서버가 클라이언트의 상태를 보존하지 않는 무상태 프로토콜.
    <b><br>ex) 클라: 저녁에 치킨먹자.<br>서버: 그래.
        <br>클라: 먹으러 가자.<br>서버: 뭐를?</b>
    </p></center>

![무상태](https://raw.githubusercontent.com/JJIIIINN/image_save/master/img/%EB%AC%B4%EC%83%81%ED%83%9C.webp)

<center><h3>비 연결성</h3><p>
    연결 지향인 TCP/IP와 비 연결성인 HTTP.
    <br><b>HTTP는 실제로 요청을 주고 받을 때만 연결을 유지하고 응답을 주고나면 TCP/IP 연결을 끊는다.</b>
    </p></center>



![비연결성](https://raw.githubusercontent.com/JJIIIINN/image_save/master/img/%EB%B9%84%EC%97%B0%EA%B2%B0%EC%84%B1.webp)
