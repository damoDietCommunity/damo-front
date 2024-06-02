# 다모 (다이어트 모여라)
<div align="center">
    <img width="150" alt="image" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/8fa022af-78ae-49af-82fb-84220a6d70ea">
</div>

<br/><br/>               
## 📖 프로젝트 설명
다모(다이어터 모여라)는 사용자들 간에 다이어트 경험 및 팁 등 다이어트에 관한 모든 것을 공유하고 소통하는 플랫폼입니다. 이 플랫폼은 게시물 작성, 댓글 기능을 통해 사용자들이 효율적으로 정보를 공유하도록 지원합니다.

<br/><br/>
## 🔗 깃허브 링크
- [서버 (브랜치:develop)](https://github.com/damoDietCommunity/damo-server.git)
- [프론트엔드](https://github.com/damoDietCommunity/damo-front.git)

<br/><br/>
## 📘 시작 가이드
### 사전 요구사항
- Node.js: v20.11.1
- npm: 10.5.1

### 설치 및 실행
```bash
$ git clone https://github.com/damoDietCommunity/damo-front.git
$ cd damo-front
$ npm install
$ npm run dev
```
개발 서버가 실행된 후, 브라우저에서 [http://localhost:5371](http://localhost:5371)로 접속하세요.


<br/><br/>
## 🔧 기술 스택 
##### 프로그래밍 언어
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![Java 17](https://img.shields.io/badge/Java-17-brightgreen)
##### 백엔드 프레임워크
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.5-brightgreen)
##### 보안
![Spring Security](https://img.shields.io/badge/Spring%20Security-3.2.5-brightgreen)
![JWT](https://img.shields.io/badge/JWT-0.11.5-blue)
##### 데이터베이스
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-blue)
![Redis](https://img.shields.io/badge/Redis-6-red)
##### 프론트엔드 프레임워크
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.2.0-blue)
##### 상태 관리
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.2.5-purple)
##### 패키지 매니저
![npm](https://img.shields.io/badge/npm-10.5.1-red)
##### 컨테이너
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue)

<br/><br/>
## ⚙️ 설정
### application.yml
```yaml
server:
  port: ${SPRING_PORT}
  servlet:
    context-path: ${BASE_PATH}
spring:
  storage:
    path: ${STORAGE_PATH}

  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
  jwt:
    secret: ${JWT_SECRET}

  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
      password: ${REDIS_PASSWORD}

  verification-code:
    length: 6
    expire-time: 300000

  mail:
    protocol: smtp
    host: smtp.gmail.com
    port: ${GMAIL_PORT}
    username: ${GMAIL_USERNAME}
    password: ${GMAIL_PASSWORD}
    properties:
      smtp.auth: true
      mail:
        smtp:
          starttls:
            enable: true
            required: true
    test-connection: true

```

### Docker File
```Dockerfile
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/damo-server-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
RUN mkdir -p ${STORAGE_PATH}/images
ENTRYPOINT ["java", "-Duser.timezone=\"Asia/Seoul\"", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
```

<br/><br/>
## 💻 화면 구성
| 홈 페이지  |  게시글 수정 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/49563396-f9c1-4298-8c69-8b0c663e79a5"/> |  <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/0bef944d-9611-4427-b4ba-3af3cc9e4145"/>|  
| 게시글 작성 페이지   |  게시글 페이지   |  
| <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/628a2854-1142-466a-be43-cc1fc630c018"/>   |  <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/e2c570e2-10c3-4843-a392-ae28df73ae72"/>     |
| 게시글 목록 페이지 1   |  게시글 목록 페이지 2   |  
| <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/b75143e5-c801-46b7-acaa-8d893192d5ec"/>   |  <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/94dc3795-384b-4bc9-a471-c31e425f279c"/>     |
| 로그인 페이지   |  회원가입 페이지   |  
| <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/9187a1f1-a0fd-45cb-b389-15e404d3cfc1"/>   |  <img width="329" src="https://github.com/damoDietCommunity/damo-front/assets/96982722/f268b162-6116-45c6-a215-3aadc52d2cbc"/>     |


<br/><br/>
## ⭐ 주요 기능 
### 회원가입 및 로그인

- **이메일 인증**: 사용자가 이메일을 입력하면 인증번호가 발송됩니다. 이 인증번호를 통해 회원가입을 완료할 수 있습니다.
- **회원가입**: 이메일 인증을 완료한 사용자는 회원가입을 할 수 있습니다.
- **로그인**: 등록된 이메일과 비밀번호를 사용하여 로그인할 수 있습니다.

### 게시물 관리

- **게시물 등록**: 사용자는 새로운 게시물을 등록할 수 있습니다.
- **게시물 삭제**: 사용자는 자신이 등록한 게시물을 삭제할 수 있습니다.
- **게시물 수정**: 사용자는 자신이 등록한 게시물을 수정할 수 있습니다.

### 댓글 관리

- **댓글 작성**: 사용자는 게시물에 댓글을 작성할 수 있습니다.
- **댓글 삭제**: 사용자는 자신이 작성한 댓글을 삭제할 수 있습니다.

<br/><br/>
## 👩‍💻 개발자 및 역할
- [박재영](https://github.com/wodydl0): 백엔드
- [한현진](https://github.com/hanguswls): 프론트엔드