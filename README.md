# NestJs_Project

## Contents
1. 개발환경구축
2. docker DB(Postgresql) 설정
3. Rest API (User Register, Login처리), Swagger(https://swagger.io/)
4. Github action을 통한 docker image 생성
5. Google, Apple OAuth Login

# 1. 개발환경구축
## 1.1 NodeJs 설치
NestJS는 Node.js를 기반으로 한다. [Node.js 공식 페이지](https://nodejs.org/ko/download)를 통해 자신에게 맞는 버전을 설치한다. 주로 안정적인 버전인 LTS를 선택하고 다운로드 후 설치파일을 실행하거나 소스코드에서 직접 빌드 후 설치한다. 

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/62c8f163-8cb2-48e1-b5cd-9a4e6e656497)

## 1.2 NestJs 설치
NodeJs를 설치하면 npm(Node Package Manager)가 함께 설치된다. npm은 Node.js에서 사용하는 패키지 관리자이다. 온라인상에 등록된 라이브러리를 쉽게 설치할 수 있게 해준다.

---

다음 명령어를 입력해 NestJs 서버 구축을 시작해보자.
```
$ npm i -g @nestjs/cli
```

```i```는 ```install```의 약자이다. ```-g```는 글로벌 환경으로 설치를 하겠다는 의미로 컴퓨터의 모든 디렉토리에서 참조가능하다.

---

설치가 완료되었다면 프로젝트를 시작하기 위해 다음 명령어를 입력해보자.

```
$ nest new NestJs-Project
```

```NestJs-Project``` 라는 이름의 프로젝트를 새롭게 시작하겠다는 의미로 이름은 자유롭게 선정가능하다. 

---

이 명령어를 입력하면 아래 사진과 같은 안내가 나타난다. 패키지 매니저를 선택하라는 의미이다. 과거에는 ```npm``` 의 속도가 빠르지 않아 

이를 보완하기 위해 ```yarn``` 과 ```pnpm``` 이라는 패키지 매니저가 나왔다.

요즘에는 ```npm``` 의 속도 개선이 많이 이루어져 크게 신경쓰지 않고 선택해도 된다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/3305ef64-b89a-4bd5-a68c-f480611f1188)


# 2. docker DB(Postgresql) 설정



# 3. Rest API (User Register, Login처리), Swagger(https://swagger.io/)

# 4. Github action을 통한 docker image 생성

# 5. Google, Apple OAuth Login
