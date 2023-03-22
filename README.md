# 파일구조
하기 기재된 타 프로젝트의 폴더구조 참고하여 우리 프로젝트의 폴더 구조를 짜봤습니다.
대표적인건 assets 폴더에 image, css 추가하고 각각 메뉴의 폴더에 html을 넣었습니다.
경로는 검색에 걸리는대로 다 바꿨고, 테스트도 완료하였으나  제가 놓친게 있을 수 있으니 세아님께서 작업하시면서 다시 한 번 확인 부탁드립니다!


<br/><br/>
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂images<br/>
 ┃ ┃ ┣ 📂icon<br/>
 ┃ ┃ ┃ ┣ 📜icon_arrow.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_cancel.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_cheer.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_chef.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_defy.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_dish.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_full_smile.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_heart.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_noodle.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_paper.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_party.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_preparing.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_restaurant.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_schedule.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_soup.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_teacher.png<br/>
 ┃ ┃ ┃ ┣ 📜icon_thinking.png<br/>
 ┃ ┃ ┃ ┗ 📜icon_wait.png<br/>
 ┃ ┃ ┣ 📂sprite<br/>
 ┃ ┃ ┃ ┣ 📜sprite.css<br/>
 ┃ ┃ ┃ ┗ 📜sprite.png<br/>
 ┃ ┃ ┣ 📜main_visual.png<br/>
 ┃ ┃ ┗ 📜test.jpg<br/>
 ┃ ┗ 📂style<br/>
 ┃ ┃ ┣ 📂scss<br/>
 ┃ ┃ ┃ ┣ 📜layout.scss<br/>
 ┃ ┃ ┃ ┣ 📜_button.scss<br/>
 ┃ ┃ ┃ ┣ 📜_common.scss<br/>
 ┃ ┃ ┃ ┣ 📜_icon.scss<br/>
 ┃ ┃ ┃ ┣ 📜_input.scss<br/>
 ┃ ┃ ┃ ┣ 📜_loader.scss<br/>
 ┃ ┃ ┃ ┣ 📜_main_footer.scss<br/>
 ┃ ┃ ┃ ┣ 📜_main_visual.scss<br/>
 ┃ ┃ ┃ ┣ 📜_menu.scss<br/>
 ┃ ┃ ┃ ┣ 📜_mixin.scss<br/>
 ┃ ┃ ┃ ┣ 📜_pagebar.scss<br/>
 ┃ ┃ ┃ ┣ 📜_popup.scss<br/>
 ┃ ┃ ┃ ┣ 📜_recommend.scss<br/>
 ┃ ┃ ┃ ┣ 📜_reset.scss<br/>
 ┃ ┃ ┃ ┣ 📜_slider.scss<br/>
 ┃ ┃ ┃ ┣ 📜_title.scss<br/>
 ┃ ┃ ┃ ┗ 📜_variables.scss<br/>
 ┃ ┃ ┣ 📜App.css<br/>
 ┃ ┃ ┣ 📜index.css<br/>
 ┃ ┃ ┣ 📜layout.css<br/>
 ┃ ┃ ┗ 📜layout.css.map<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂common<br/>
 ┃ ┃ ┣ 📂button<br/>
 ┃ ┃ ┃ ┣ 📜Arrow.js<br/>
 ┃ ┃ ┃ ┣ 📜Close.js<br/>
 ┃ ┃ ┃ ┣ 📜MenuButtonMiddle.js<br/>
 ┃ ┃ ┃ ┣ 📜MenuButtonWide.js<br/>
 ┃ ┃ ┃ ┗ 📜WideButton.js<br/>
 ┃ ┃ ┣ 📂context<br/>
 ┃ ┃ ┃ ┗ 📜CommonContext.js<br/>
 ┃ ┃ ┣ 📂form<br/>
 ┃ ┃ ┃ ┗ 📜MenuForm.js<br/>
 ┃ ┃ ┣ 📂popup<br/>
 ┃ ┃ ┃ ┗ 📜MainPopup.js<br/>
 ┃ ┃ ┗ 📜ui.html<br/>
 ┃ ┣ 📂dislike<br/>
 ┃ ┃ ┣ 📜Dislike.js<br/>
 ┃ ┃ ┗ 📜dislike_menu.html<br/>
 ┃ ┣ 📂guide<br/>
 ┃ ┃ ┣ 📜guide.html<br/>
 ┃ ┃ ┗ 📜Guide.js<br/>
 ┃ ┣ 📂loader<br/>
 ┃ ┃ ┣ 📜loader.html<br/>
 ┃ ┃ ┗ 📜Loader.js<br/>
 ┃ ┣ 📂main<br/>
 ┃ ┃ ┣ 📜Contents.js<br/>
 ┃ ┃ ┣ 📜Footer.js<br/>
 ┃ ┃ ┣ 📜main.html<br/>
 ┃ ┃ ┣ 📜Main.js<br/>
 ┃ ┃ ┣ 📜MainContents.js<br/>
 ┃ ┃ ┗ 📜MainVisual.js<br/>
 ┃ ┣ 📂recommend<br/>
 ┃ ┃ ┣ 📜recommand.html<br/>
 ┃ ┃ ┗ 📜Recommend.js<br/>
 ┃ ┗ 📂yesterday<br/>
 ┃ ┃ ┣ 📜Yesterday.js<br/>
 ┃ ┃ ┗ 📜yesterday_menu.html<br/>
 ┣ 📜App.js<br/>
 ┣ 📜App.test.js<br/>
 ┣ 📜index.js<br/>
 ┣ 📜logo.svg<br/>
 ┣ 📜reportWebVitals.js<br/>
 ┣ 📜setUpProxy.js<br/>
 ┗ 📜setupTests.js<br/>
<br/><br/><br/>

# 일반적인 폴더 구조<br/><br/>
제가 가장 잘 참고할수 있는 vue 프로젝트로 가져왔습니다.
프레임워크는 다르지만, 폴더 구조는 똑같이 해도 될 것 같아요.
폴더명은 다들 많이 쓰는거고, 파일명은 보안으로 인해 임의로 지정하였습니다.

📦src // 프론트엔드 폴더<br/>
 ┣ 📂app<br/>
 ┃ ┣ 📂components // 개발 폴더<br/>
 ┃ ┃ ┣ 📂common<br/>
 ┃ ┃ ┃ ┣ 📂layout<br/>
 ┃ ┃ ┃ ┃ ┣ 📜popup.vue<br/>
 ┃ ┃ ┃ ┃ ┣ 📜main.vue<br/>
 ┃ ┃ ┃ ┣ 📂gnb<br/>
 ┃ ┃ ┃ ┃ ┣ 📜topMenu.vue<br/>
 ┃ ┃ ┃ ┃ ┗ 📜breadcrumbs.vue<br/>
 ┃ ┃ ┃ ┣ 📂navbar<br/>
 ┃ ┃ ┃ ┃ ┗ 📜nav.vue<br/>
 ┃ ┃ ┃ ┗ 📂views<br/>
 ┃ ┃ ┃ ┃ ┣ 📜product01.vue<br/>
 ┃ ┃ ┃ ┃ ┣ 📜product02.vue<br/>
 ┃ ┃ ┣ 📂page01<br/>
 ┃ ┃ ┃ ┣ 📜page01.vue<br/>
 ┃ ┃ ┣ 📂page02<br/>
 ┃ ┃ ┃ ┣ 📜page02.vue<br/>
 ┃ ┣ 📂components_pub // 퍼블리싱 폴더<br/>
 ┃ ┃ ┣ 📂common<br/>
 ┃ ┃ ┃ ┣ 📂layout<br/>
 ┃ ┃ ┃ ┃ ┣ 📜popup.vue<br/>
 ┃ ┃ ┃ ┃ ┣ 📜main.vue<br/>
 ┃ ┃ ┃ ┣ 📂gnb<br/>
 ┃ ┃ ┃ ┃ ┣ 📜topMenu.vue<br/>
 ┃ ┃ ┃ ┃ ┗ 📜breadcrumbs.vue<br/>
 ┃ ┃ ┃ ┣ 📂navbar<br/>
 ┃ ┃ ┃ ┃ ┗ 📜nav.vue<br/>
 ┃ ┃ ┃ ┗ 📂views<br/>
 ┃ ┃ ┃ ┃ ┣ 📜product01.vue<br/>
 ┃ ┃ ┃ ┃ ┣ 📜product02.vue<br/>
 ┃ ┃ ┣ 📂page01<br/>
 ┃ ┃ ┃ ┣ 📜page01.vue<br/>
 ┃ ┃ ┣ 📂page02<br/>
 ┃ ┃ ┃ ┣ 📜page02.vue<br/>
 ┃ ┣ 📜App.vue<br/>
 ┃ ┣ 📜main.js<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂font<br/>
 ┃ ┃ ┣ 📜NanumGothic.eot<br/>
 ┃ ┃ ┣ 📜NanumGothic.ttf<br/>
 ┃ ┃ ┣ 📜NanumGothic.woff<br/>
 ┃ ┣ 📂images<br/>
 ┃ ┃ ┣ 📜icon.png<br/>
 ┃ ┃ ┣ 📜bg_01.jpg<br/>
 ┃ ┃ ┣ 📜btn.png<br/>
 ┃ ┗ 📂style<br/>
 ┃ ┃ ┣ 📜style_common.css<br/>
 ┃ ┃ ┣ 📜style.scss<br/>
 ┣ 📂error<br/>
 ┃ ┣ 📜404.html<br/>
 ┃ ┣ 📜500.html<br/>
 ┣ 📜favicon.ico<br/>
 ┗ 📜index.html<br/>
<br/>
<br/>
