
  # ☑ Todo 99 - Backend

99일 단위의 프로젝트 생성, todo list를 관리할 수 있습니다.

링크
([todo99](http://test-go99.s3-website.ap-northeast-2.amazonaws.com))

<br/>
<br/>

## 👨‍💻 프로젝트 기간 & 팀원

- 2021년 12월 6일 ~ 2021년 12월 11일 (총 6일)
- F.E : 공성훈, 정연재 (https://github.com/jeongyeon9254/mini_projects)
- B.E : 김희경, 이건희, 이성진 (현재 페이지)

<br/>
<br/>


## 🎬 시연영상

[todo99 시연영상]()
<br/>
<br/>

## 🎨 프로젝트 초안

![디자인](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/908f40ad-09ba-4ad7-869a-bc61adb708da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211211T033736Z&X-Amz-Expires=86400&X-Amz-Signature=c40efacfd5c5e19193a9538bde3edffbcd55e970caa50dc02978317a7dd1875d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
<br/>
<br/>



## 🔨 개발 도구

- `Backend`
   - Node.js
   - Express
   - MongoDB


- `Frontend`
   - React
   -
   -
<br/>
<br/>



## 📖 핵심기능 && 트러블 슈팅

+ **로그인, 회원가입**   
  - JWT를 이용하여 로그인과 회원가입을 구현하였습니다.   
  - 아이디와 닉네임의 중복확인이 가능합니다.      

+ **Todo list, Feedback CRUD**
  - 미들웨어를 이용, 지나간 일자의 투두리스트는 수정이 불가합니다.
  - 투두리스트 체크는 당일 날짜의 리스트만 가능합니다.
  - 완성한 todo list 개수를 db에 저장, 메인 화면에서 시각효과를 주었습니다.(메인 페이지 색상변화)    
   
+ **추가 **   
  - 본문추가
  - 본문추가

+ **추가 **   
  - 본문추가
  - 본문추가

+ **트러블슈팅 **   
<details markdown ="1">
  <summary>new Date()객체 관련 문제</summary><br/>
로컬의 node에서 new Date()로 시간객체 생성 후 getMonth, getDate등으로 값을 받아오면 한국 시간 기준으로 생성이 된다.<br/>그러나, EC2의 node에서 동일하게 실행을 하면 UTC 기준으로 생성이 되어 한국 시간과 차이가 생겨 동작에 문제가 생겼다.<br/>원인은 EC2 서버의 Timezone이 UTC로 설정되어 있기 때문이다.
<br/><br/>해결 방법에는 두 가지가 있다.<br/>1. EC2 서버의 Timezone을 KST로 번경하기<br/>2. 영국 시간을 받아서 한국 시간으로 변경하기<br/><br/>
우리는 해결할 당시 1번 방법을 알지 못해 2번 방법으로 해결했다.<br/>
UTC 시간을 받고, 그 시간에 한국 시차만큼 더해서 한국 시간을 구한 것이다.<br/>
하지만, 이렇게 해결하면 추가적인 로직과 연산과정이 필요하기 때문에, 앞으로는 1번 방법을 사용하는 것이 올바른 해결법으로 보인다.
  </details>
  <details markdown ="1">
  <summary>github 페이지에 작업물들을 공유하면서 발생한 보안 문제</summary><br/>
JWT의 비밀키와, 비밀번호 db 등록시 사용한 난수의 무분별한 노출<br/><br/>
해결방법<br/>1. .env파일 생성 후 JWT의 비밀키와, 비밀번호 db 등록시 사용한 난수를 .env에 등록<br/>2. 해당파일을 .gitignore에 등록하여 작업 진행시 커밋되지 않게 만듬.<br/>3. .env파일의 경우 서버 관리자만 공유하도록하여 작업물들의 수정.
</details>
<br/>
<br/>

## 💻 개인회고

 - 공성훈
<details markdown="1">
<summary>회고</summary>
 본문 수정 또는 블로그 링크
</details>
<br>
<br>


 - 김희경
<details markdown="1">
<br>
<summary>회고</summary>
   본문 수정 또는 블로그 링크
</details>
<br/>
<br/>

 - 이건희
<details markdown="1">
<br>
<summary>회고</summary>
   본문 수정 또는 블로그 링크
</details>
<br/>
<br/>

 - 이성진
<details markdown="1">
<br>
<summary>회고</summary>
   본문 수정 또는 블로그 링크
</details>
<br/>
<br/>

 - 정연재
<details markdown="1">
<br>
<summary>회고</summary>
  본문 수정 블로그 링크
</details>
<br/>
<br/>

