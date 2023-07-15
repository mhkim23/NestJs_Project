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

---

소스코드로 실행하는 방법은 다음과 같다.

```
$ git clone https://github.com/dextto/book-nestjs-backend.git
$ cd book-nestjs-backend/examples/ch1-intro/
$ npm install  // 필요한 패키지를 설치합니다.
$ npm run start
```
---

개발 단계에서는 npm run start:dev 명령어를 이용하자. 소스코드 변경이 감지될때 자동으로 서버를 재 가동시켜주는 좋은 기능이다.

```
$ npm run start:dev
```

서버에 접속해 잘 작동하는지 확인하자. 포트는 기본값이 3000이다. 변경을 하고 싶다면 main.ts 파일에서 변경이 가능하다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/5a777552-7748-48e8-9786-364fdd028737)

```typescript
//main.ts 파일 내 코드
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); //3000번 기본 포트넘버
}
bootstrap();
```

# 2. docker DB(Postgresql) 설정

Postgresql 데이터베이스를 docker의 container에서 사용해보자. 그러기 위해선 우선 docker를 설치해야한다.

## 2.1 Docker 설치

docker 설치는 다음 링크를 참조하였다. 

[[Docker] 윈도우10에서 도커 설치하기](https://velog.io/@hanjuli94/%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90%EC%84%9C-%EB%8F%84%EC%BB%A4-%EC%8B%A4%EC%8A%B5%ED%95%98%EA%B8%B0)

나는 현재 윈도우 10 Education 버전을 사용중이여서 

Hyper-V 환경에서 docker를 설치할 수 있지만 그냥 WSL2를 설치받아 docker를 세팅하였다.

## 2.2 Docker에서 Postgresql Image 받기

docker에서 image는 일종의 템플릿을 의미한다. 나는 일종의 class로 이해했다. 이 image는 변경이 불가능하고 내려받은 이미지 위에 layer를 쌓아 변화를 주기 때문이다.

그래서 image 인스턴스를 만들어 우리가 사용하는 것으로 이해했다.

이제 postgresql class에서 instance를 선언해 데이터베이스를 이용해보자.

우선 제일 기본적인 명령어는 ```docker run``` 이다. 여기에 다양한 옵션을 붙여서 선언을 했다. 한 줄씩 확인해보자.

```docker
docker run -it -d \
--restart=always \
-p 15432:5432 \
--name [Users] \
-e POSTGRES_PASSWORD=**** \
-v c:\Users\Minhyeok\NestJs\postgres_user_data:/var/lib/postgresql/data \
postgres:latest
```
```-it``` 옵션은 ```-i``` 와 ```-t``` 옵션이 결합된 형태이다.

* ```-i``` : 입력을 제공하고 출력을 수신하여 컨테이너와 상호 작용할 수 있는 "상호 작용"을 의미한다.
* ```-t``` : "tty" 또는 "pseudo-terminal"을 나타내며 컨테이너가 터미널과 유사한 인터페이스를 갖도록 한다.
* ```-d``` : 컨테이너가 백그라운드에서 실행될 수 있게 하는 옵션이다.
* ```--restart=always``` : 컨테이너가 중지되거나 충돌하는 경우 항상 자동으로 재시작 되도록 설정한다.
* ```-p``` : 포트포워드를 사용하기 위한 옵션, 여기서는 호스트의 15432 포트를 컨테이너의 5432 포트에 매핑한다.
* ```--name Users``` : 컨테이너의 이름을 "Users" 로 설정하겠다는 의미이다.
* ```-e``` : 컨테이너 내부의 POSTGRES_PASSWORD 라는 환경변수를 설정하겠다는 의미, postgresql db의 비밀번호로 사용될 예정이다.
* ```-v``` : 데이터를 컨테이너 내부 뿐만 아니라 호스트의 로컬시스템에 저장한다는 의미이다. 컨테이너가 삭제되어도 호스트의 로컬 시스템에 데이터가 저장된다.
* ```postgresql:latest``` : postgresql 이미지를 사용하겠다는 의미. :latest 는 태그이다. 

---

다음의 명령어를 통해 현재 존재하는 container를 확인할 수 있다.

```
docker ps
```

방금 생성한 container가 존재하는 것을 볼 수 있다.
          
![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/5e0009ac-4045-4236-a0e2-ca7035ac02ec)

## 2.3 postgresql db (docker container) 접속하기

### container 접속

이제 container에 접속을 해보자.

```
docker exec -it Users /bin/bash
```
 이 명령어를 사용하면 Users 라는 이름을 가진 container의 /bin/bash 디렉토리로 들어갈 수 있다.

 그럼 아래 이미지처럼 경로가 변경된다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/02a694e1-41b2-481a-ae18-47bb3b89f65b)

---

### DB 접속

이제 container에 들어왔으니 postgresql db를 사용해보자.

```
psql -U postgres
```

다음 명령어를 사용하면 db에 접속할 수 있다.

```psql``` 은 sql 인터프리터로 생각하면 된다고 한다. 

여기서는 postgres 라는 이름의 유저가 postgres 라는 DB에 접속하겠다는 의미로 해석할 수 있다.

아무튼 DB에 들어오면 다음과 같은 화면이 나온다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/824d4f0f-9de0-43af-a01d-d8ead9fcf4fd)

---

### User 생성

DB에 들어왔다면 user 를 생성해보자.

```sql
CREATE USER [user_name] PASSWORD '[put_password]' SUPERUSER; 
```
CREATE ROLE 이라는 안내가 뜨면 완료이다.

유저가 잘 생성됐는지 확인하기 위해  ```\du``` 를 입력해준다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/aed1f292-1d62-4981-81c2-6fbd84f53258)

mhkim 유저가 SUPERUSER 권한도 잘 받은 것을 볼 수 있다.

다시 한번 더 확인하기 위해 다음 명령어를 입력해보자. 

```sql
SELECT * FROM PG_SHADOW;
```
![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/0a6478bc-3c31-4310-bc78-f6225c660c7f)

mhkim 유저가 추가되어있고 비밀번호는 암호화되어 저장된 것을 볼 수 있다.

---

### 권한 추가

mhkim 유저에 다른 권한들을 추가하고 싶다면 어떻게 해야할까?

다음 명령어를 사용해서 다양한 권한들을 추가할 수 있다.

```sql
ALTER ROLE [user_name] [adding_role]
```

나는 DB 생성과 복제에 대한 권한을 mhkim 유저에 추가하였다.

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/c74c1a5c-3d44-4510-b1e6-f249ac33a6ef)

---

### DB 생성

이제 DB를 생성해 볼 차례이다.

```sql
CREATE DATABASE [database_name] OWNER [user_name];
```

이렇게 명령문을 작성하면 

database라는 이름을 가진 데이터베이스를

user_name 이라는 유저에게 권한을 주고 생성한다는 의미이다.

다음 아래의 명령어를 작성하면 생성된 데이터베이스와 유저를 연결할 수 있다.

```sql
\c [database_name] [user_name]
```

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/cb63d8f0-be12-4444-b44d-6c4b7363a5da)

데이터베이스와 유저 간 연결이 완료된 모습.

### Schema 지정

```
CREATE SCHEMA schema_name
```
간단하게 schema를 생성할 수 있다. postgresql 에서는 ```pg_```로 시작하는 스키마는 생성할 수 없다.

스키마 목록을 보기 위해선 ```\dn``` 이라는 명령어를 사용하면 된다.

나는 ```id_pw```라는 스키마를 만들었고 ```\dn``` 명령어를 통해 확인하였다. 

![image](https://github.com/mhkim23/NestJs_Project/assets/132381239/e3908eb5-10f7-4ee8-b0e9-e610846de9b6)


# 3. Rest API (User Register, Login처리), Swagger(https://swagger.io/)

# 4. Github action을 통한 docker image 생성

# 5. Google, Apple OAuth Login


---
### 참조링크
1. [NestJs로 배우는 백엔드 프로그래밍](https://wikidocs.net/book/7059)
