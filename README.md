# Fooding 🥗: 식자재 전문 온라인 쇼핑몰


> 식자재를 전문으로 판매하는 온라인 쇼핑몰
> Food와 Well-being을 합쳐 Fooding!

## 어떤 서비스인가요?

- 유기농으로 키운 신선한 음식을 전문으로하는 쇼핑몰 서비스

## Contents

Click to scroll to that page

1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개

- ​Project intention : 프로젝트 기획 의도
- Service : 서비스
- How can use this project?

3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조

- Page Image 페이지 구성
- 기능 소개
- ERD

5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드

For building and running the application you need :

- [Node.js 18.16.1](https://nodejs.org/en)
- [npm 9.7.2](https://www.npmjs.com/)
- MariaDB 10.3.11

Installation

```bash
https://github.com/KJH1225/Popol.git
```

Front (popol/fooding/)에서

```
npm i  --force
npm run build
npm start
```

DB

```
popol/databaseSQL/foodingdb.sql 실행
popol/config/config.json 파일의 development: {} 내용을 자신에 맞게 수정
```


Back (popol/)에서

```
npm i 
npm start
```

접속

```
http://localhost:3000 접속
```

## 💻 2. Project Info : 프로젝트 소개

### ✔️개발 기간

- 2023.09.21 ~ 2023.10.18 (4주)

### ✔️ 배포 서버

- 

### ✔️ 프로젝트 기획 의도

서비스 소개

- 식자재를 전문으로 판매하는 온라인 쇼핑몰입니다.
- 직접 판매 상품을 등록할 수 있습니다.  

기능 소개

- 상품 등록
- 상품 조회
- 상품 장바구니 담기 / 지우기
- 상품 검색 기능
- 마이페이지

### ✔️ 서비스

#### 서비스 설명
1. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명
   1. 상품 등록 기능
      - 대표 이미지, 이름, 카테고리, 가격, 설명을 입력하고 상품 등록
   2. 상품 조회 기능
      - 메인페이지에서 전체 조회
      - 헤더의 카테고리 클릭시 상품 카테고리에 맞는상품들만 조회
      - 상품 클릭시 상품의 상세 정보 표시
   3. 상품 검색 기능
       - 헤더의 검색창에서 검색시 그 문자가 이름에 포함된 상품들을 보여줌줌
   4. 상품 장바구니 담기 / 지우기
      - 상품 상세페이지에서 수량 선택 후 장바구니 담기 등록시 장바구니에 등록  
   5. 마이페이지 기능
      - 사용자 계정 정보를 표시.
4. 유저 시나리오

- Who
  - 집안일에 바쁜 38세 주부 김소영님
- What
  - 집안일이 바빠 시간이 없어 온라인 쇼핑몰에서 장을 보려고 함
- When
  - 시간이 없거나 귀찮은 언제나
- Where
  - 실내 실외 어디서든
- Why
  - 신선하고 유기농으로 구하기 위해


### ✔️ 프로젝트 구조

#### 🧩 front-end

![front-end](/readme-img/front.png)

> 페이지별 구조

- Products 페이지 기반으로 구현된 서비스.

* Main Products : 처음 접속 했을떄 보이는 전체 상품 목록을 보여주는 페이지.
* Join : 회원가 페이지
* Login : 로그인 페이지.
* MyPage : 회원 정보, 상품등록 페이지로 가는 버튼이 있는 페이지.
* DetailProd: 상품 목록에서 상품 클릭시 상품의 상세정보를 보여주고 상품결제, 장바구니 등록 기능이 있는 페이지
* Cart: 장바구니에 담긴 상품들을 보여주고 결제할 수 있는 페이지  

#### 🧩 back-end

![back-end](/readme-img/back.png)

> 로직 구조

- config : 환경변수 설정
- model : DB와 연동
- routes : 요청받은 정보를 알맞게 가공하고 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- upload : 상품등록에 첨부한 이미지 저장하는 디렉터리

#### 🧩 ERD

![erd](/readme-img/foodingERD.png)

### ✔️ 페이지 구성

## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="Sequelize" src ="https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white"/> <img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> 

### 💻 Dependencies

<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/> <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/> <img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/>


## 6. END

- 한국정보교육원 웹 프론트엔드 클라우드 콘솔 개발자 양성과정 3회차차 1조 

## ✔️프로젝트 멤버 구성

|  front-end   | back-end |
| :----------: | :------- |
| 김지환(팀장) | 김지환    |
|    조경익    | 조경익    |
|    유재혁    |          |
|    박승균    |          |

## 팀원별 역할

### 김지환

- 백엔드, 프론트엔드
- erd 작성 및 데이터베이스 연결 및 관리
- 시퀄라이즈로 mysql 적용
- 상품검색 기능 구현
- 카테고리별 상품조회 기능 구현
- 장바구니 등 기능 구

### 조경익

- 백엔드, 프론트엔드
- 회원가입, 로그인 기능 구현
- 상품상세 페이지 구현
- 전체 상품 목록 페이지 구현

### 유재혁

- 회원가입 페이지 구현
- 헤더 구현
- CSS 스타일링
- 디자인
- UI 리서치

### 박승균

- 로그인 페이지 구현
- 장바구니 페이지 구현
- 푸터 구현
- CSS 스타일링
- 디자인
- UI 리서치

