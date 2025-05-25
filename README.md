## **Hyung`s Movie (TMDB API) ** 
원하는 영화를 검색하고 정보를 확인해보세요.<br>
최신 영화, 인기 영화, 많이 본 영화 등 다양한 콘텐츠를 한눈에!<br>
영화 팬들을 위한 스마트한 리뷰 & 정보 플랫폼입니다.<br>
개발기간 : 2023.10 ~ 2023.11(개인 프로젝트)

<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/866eda50-d6ca-499c-ae1b-34d86b169545"/>

---

<br>

## **프로젝트 소개**
보고 싶은 영화를 쉽고 빠르게 검색하고, 다양한 정보를 확인할 수 있는 영화 리뷰 & 정보 플랫폼입니다.<br>
TMDB API를 활용하여 최신 영화, 인기 영화, 많이 본 영화 등 다양한 콘텐츠를 제공합니다.<br>


---

<br>

## **폴더구조**

```
📦src
 ┣ 📂Components
 ┃ ┣ 📜Banner.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜HomeNavbar.jsx
 ┃ ┣ 📜Moviedetail.jsx
 ┃ ┣ 📜NowMovie.jsx
 ┃ ┣ 📜PopularMovie.jsx
 ┃ ┣ 📜SearchMovie.jsx
 ┃ ┗ 📜TopRatedMovie.jsx
 ┣ 📂redux
 ┃ ┣ 📜apikey.js
 ┃ ┣ 📜Movieaction.js
 ┃ ┣ 📜MovieReducer.js
 ┃ ┗ 📜Store.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
 ```
 
---

<br>

## **주요기능**
## 1. 메인 페이지 배너<br>
<li>최신 상영 영화 중 가장 인기 있는 영화가 배너가 되도록 개발 하였습니다.</li>
<li>인기 순위가 변경되게 되면 배너는 자동적으로 가장 인기 있는 영화로 변경되게 됩니다.</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/b08aac34-9d12-43f0-8410-9484086b1fbc"/>

<br>

## 2. 최신 영화 목록<br>
<li>최신 영화 순으로 영화 목록을 나열하였습니다.</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/4c3a6982-1ea4-4bd8-a829-2d8e17deaf83"/>

<br>

## 3. 인기 영화 목록<br>
<li>상영 영화 중 인기 영화 순으로 영화 목록을 나열하였습니다.</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/77d3f598-9548-42af-9a98-05e8f7a2b72f"/>

<br>

## 4. 가장 많이 상영한 영화 목록<br>
<li>가장 상영이 많은 순으로 영화 목록을 나열하였습니다.</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/f9956baa-6eb1-4c73-8ef7-cca3eeaccabf"/>

<br>

## 5. 영화 상세 페이지<br>
<li>해당 영화를 클릭 시 제목, 개봉일, 장르, 과람가,  영화 내용, 출연진, 리뷰 등을 확인 할 수 있습니다.</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/b7e9c629-c2a1-42d1-b310-fd85756a5f86"/>

<br>

## 6. 영화 검색
<li>검색 기능을 통해 사용자가 원하는 영화를 직접 검색 할 수 있습니다,</li><br>
<img  alt='스크린샷' width="700" src="https://github.com/user-attachments/assets/5a32548d-cfb0-424d-a50c-5c894d76930b"/>

---

<br>


## **회고**
React의 기본기를 학습하던 중, API의 개념과 데이터의 흐름, 화면 출력 과정을 익히기 위해 프로젝트를 기획하게 되었습니다.<br>
여러 주제 중에서 예시와 정보가 풍부한 영화를 선택했으며, 외부 API는 동료의 추천으로 TMDB를 활용하게 되었습니다.<br>
이를 통해 실제 데이터를 받아와 화면에 렌더링하는 전반적인 흐름을 경험하고, 컴포넌트 단위 개발에 익숙해질 수 있었습니다.<br>

---

<br>

## **배포 링크**
https://movie-app-five-bice-63.vercel.app/
