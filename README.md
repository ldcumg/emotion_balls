"# emotion_balls" 

기획 : 감정에 따라서 영화를 추천해주는 서비스를 제공하는 사이트
구현 기능 
 - 메인 페이지 : 감정(장르별)리스트, 이모지 클릭 시 해당 섹션으로 이동, 위로 가기 버튼 클릭 시 최상단으로 이동, 버튼 클릭시 해당 섹션으로 이동
 - 상세 페이지 : 영화별 감정 버튼 클릭 시 배경 동그라미 커지는 효과, 북마크

1. 메인 페이지 장르별 정렬 기능 
-api로 데이터 가져오기 -> fetch 페이지 만들어서 영화 데이터 추가하기 -> Promise.all 함수를 사용해서 fetch로 가져온 promise 객체를 한번에 처리, flat 하나의 배열로 만들기 -> 장르 데이터 추출해서 배열로 만들기 -> genres에 있는 배열 중, romance, musical이 포함된 id를 추출 -

<북마크 기능> : 영화 정보가 들어있는 객체를 배열에 넣었다 뺐다하고 그 배열을 로컬스토리지에 저장하고 불러오는 원리로 동작

API에서 받아온 데이터에서 Query String으로 받아온 영화 아이디에 해당하는 영화를 찾아 불러온다 -> 그 영화가 현재 북마크에 있으면 북마크 버튼을 색칠해준다 -> 북마크 버튼을 누르면 로컬스토리지에 저장돼있는 북마크리스트에 현재 정보를 추가하거나 뺀다 (만약 북마크 배열이 빈 배열이면 로컬스토리지에서 북마크리스트 자체를 삭제한다)

<즐겨찾기 페이지>
로컬스토리지에 저장돼있는 리스트를 불러와서 저장돼있는 영화정보들을 이용해 나열한다
만약 북마크리스트가 없으면 북마크에 저장한 영화가 없다고 알려준다

<상세페이지 감정버튼 기능> : 각 영화별로 느꼈던 감정을 클릭하면, 클릭 횟수에 따라 원이 커지며 다른 사람들도 이 영화를 보고 어떤 감정을 느꼈는지 명시적으로 눈에 볼 수 있다.

배경이 되는 원, 버튼을 제작하기 -> 버튼을 클릭 시 그 횟수를 카운트하고 이를 숫자로 나타내기 -> 클릭한 횟수를 파이어베이스에 넣기 -> 파이어베이스에서 자료를 불러와 원의 사이즈를 키우기 -> 새로고침 시 마지막으로 저장된 클릭 횟수를 불러오기 -> 불러온 횟수에 따라 숫자와 원의 크기를 변경한채로 시작하기
