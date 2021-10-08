   # WEETEWEETE(위트위트)
   ##  Introduction to weeteweete project (Front-End)
   > Colorize your life with weete weete<br/>
   > 색은 특별함을 담는 가장 강력한 요소입니다. <br/>
   > 'color'라는 가치관에 생각과 감정을 정리하는 노트를 판매하는 모트모트 페이지가 매력적으로 느껴졌습니다. <br/>
   > 모트모트만의 매력과 페이지의 디자인/기획이 마음에 들어 디자인/기획 부분만 클론했습니다. <br/>
   > 개발은 초기 세팅부터 직접 구현했으며, 데모 영상에서 알 수 있듯이 모든 부분이 백앤드와 통신으로 이루어져 있습니다. 
   
 ## WEETEWEETE TEAM MEMBER & TERM
- 개발기간 : 2021/8/2 ~ 2021/8/13
- 개발 인원 : 프론트엔드 4명, 백엔드 2명
- 팀원
  [프론트엔드]
  - 최호정: nav, footer, 메인페이지, 제품리스트페이지, 상품 리뷰
  - 차예은: 결제 form
  - 배윤아: 로그인/회원가입, 아이디/비밀번호 찾기, 결제 table
  - 이나현: 상세페이지, 장바구니
  <br/>

  [백엔드] <br/>
  - 백선호: 로그인/회원가입, 비밀번호 초기화, 아이디 찾기, 로그인 데코레이터, 상품 결제, 상품 리뷰<br/>
  - 임종성: 모델링, 메인페이지, 상세페이지, 메뉴페이지, 장바구니 CRUD,  상품 리뷰

- WEETEWEETE BACKEND LINK: https://github.com/wecode-bootcamp-korea/23-1st-Weeteweete-backend

## 프로젝트 선정이유
> 모트모트, 일상의 영감을 불어넣다(with color)

모트모트는 우리가 일상적으로 쓰는 노트를 판매하는 사이트입니다.<br/> 
깔끔한 디자인이 돋보이고, 아기자기한게 매력적인 사이트입니다. <br/>
가장 프라이빗한 나만의 공간인 노트를 오브제를 만들고 가치를 판매한다는 것이 매력적이었습니다. <br/>
또한, 브랜드의 고유한 색상 팔레트가 있어 이를 통해 구현할 수 있는 가치과 기능이 있었습니다. <br/>
깔끔한 디자인, 브랜드 가치, 적정한 수준의 기능 이 3가지 부분이 마음에 들어 모트모트 페이지를 클론코딩하게 되었습니다. 


- weeteweete 영상은 여기로👇
- https://youtu.be/_oMzIV2oyxE

## 적용 기술 및 구현 기능
### 적용 기술
Front-End : React.js, sass, react-router-dom, axios<br/>
Back-End : Python, Django web framework, Bcrypt, My SQL, RESTful API<br/>
Common : RESTful API, trello <br/>

### 구현 기능
- 필수구현
1. 로그인 / 회원가입 
2. 제품리스트페이지 
3. 상세페이지 
4. 결제페이지
5. 장바구니

- 추가구현 
1. 아이디/비밀번호 찾기
2. 상품 리뷰
3. 재고 수량 

## 구현기능 상세 

### 공통
* 초기세팅 

### 상세페이지(이나현)
1. 라이브러리 없이 작동하는 이미지 Carousel 기능 구현 
![Carousel 영상](https://user-images.githubusercontent.com/60104321/136542360-576ca2fd-5bc7-49b8-8635-665a51dc0160.gif)

2. 수량 증감 기능 구현(재고에 따라 alert창 띄우기)
3. 수량 data post와 함께 장바구니 이동 라우팅 기능 구현 
![상세페이지_장바구니이동_weeteweete](https://user-images.githubusercontent.com/60104321/136542383-cdb6465a-99d6-4ed1-a86b-26a449779e22.gif)

### 장바구니(이나현, 최호정)
1. 제품당 수량 변경(이벤트 index와 제품 index 비교하여 구현)
2. 전체 및 각 상품 선택 주문(API-POST, ItemId의 state를 push)
3. 선택 상품 삭제(API-DELETE)
![장바구니_weeteweete](https://user-images.githubusercontent.com/60104321/136542418-464c150a-4051-4c0a-ad31-b37cdd2ef861.gif)


## Reference
이 프로젝트는 모트모트 사이트를 참조하여 학습목적으로 만들었습니다.<br/>
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.<br/>
이 프로젝트에서 사용하고 있는 사진 대부분은 자체 제작한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.<br/>
   
   - 모트모트: https://motemote.kr/

