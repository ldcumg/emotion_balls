# Emotion_Balls(감정구슬)

기획 : 감정에 따라서 영화를 추천해주는 서비스를 제공하는 사이트구현 기능

-   메인 페이지 : 감정(장르별)리스트, 이모지 클릭 시 해당 섹션으로 이동, 위로 가기 버튼 클릭 시 최상단으로 이동, 버튼 클릭시 해당 섹션으로 이동
-   상세 페이지 : 영화별 감정 버튼 클릭 시 배경 동그라미 커지는 효과,

1. 메인 페이지 장르별 정렬 기능 -api로 데이터 가져오기 -> fetch 페이지 만들어서 영화 데이터 추가하기 -> Promise.all 함수를 사용해서 fetch로 가져온 promise 객체를 한번에 처리, flat 하나의 배열로 만들기 -> 장르 데이터 추출해서 배열로 만들기 -> genres에 있는 배열 중, romance, musical이 포함된 id를 추출 ->

-   메인 섹션 스크롤

1. 버튼 클릭시 data-emotion를 가져와 어떤 감정섹션으로 이동해야할지 확인 후 해당 감정섹션으로 이동
2. 모바일 일땐 모바일 헤더높이를 제외한 위치로 이동하고 pc일땐 pc헤더 높이를 제외한 위치로 이동

-   검색결과 페이지

1. input에 값이 있을 때 동작, 없으면 알림창이 보여짐
2. 대소문자 구분없이 검색을 위해 검색어를 소문자로 변환
3. 엔터나 버튼 클릭시(검색시) 검색어를 로컬 스토리지에 저장
4. 검색결과 페이지로 이동
5. 로컬 스토리지에서 검색어 가져오기
6. 검색어를 페이지 제목에 넣음
7. TMDB API 데이터 가져옴(fetch 사용)
8. 검색결과 리스트 보여주기
9. 검색 결과 없을 시 피드백
10. 이미지 없을 시 이미지 아이콘 보여줌

-   리뷰 리스트

1. Query String으로 주소값 가져와서 MovieId 추출
2. 저장되어있던 리뷰 목록 불러오기 이때, 해당 movieId값을 가지고있는 리뷰만 보여줌
3. 작성자 이름, 비밀번호, 리뷰 내용을 모두 입력시 리뷰 생성
4. 리뷰 객체 생성시 리뷰 id를 임의의 문자열로 생성
5. 로컬 스토리지에서 기존 리뷰 배열 가져오고 기존 리뷰 배열에 새로운 리뷰 추가
6. 추가된 리뷰 배열 로컬 스토리지에 저장 - localStorage에는 문자열만 저장되므로 객체, 배열을 JSON 문자열로 변환
7. 리뷰 목록 다시 불러오기
8. 폼 초기화

-   리뷰 수정

1. 수정 버튼 클릭시 내용 영역에 textarea 생성
2. 비밀번호를 확인하고 동일할때 수정 가능
3. 비밀번호 틀렸을 시 알림
4. 수정확인 버튼을 누르면 리뷰 내용을 수정한 내용으로 변경 해주고 변경된 내용을 로컬스토리지에 저장
5. 수정취소 버튼을 누르면 기존내용으로 초기화

-   리뷰 삭제

1. 삭제버튼 클릭시 비밀번호 확인
2. 정말 삭제하겠냐는 알림창으로 다시 한번 확인
3. 확인 클릭시 리뷰 목록과 로컬스토리지에서 삭제
