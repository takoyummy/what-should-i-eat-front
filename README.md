# 파일구조

📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┃ ┣ 📜icon_arrow.png
 ┃ ┃ ┃ ┣ 📜icon_cancel.png
 ┃ ┃ ┃ ┣ 📜icon_cheer.png
 ┃ ┃ ┃ ┣ 📜icon_chef.png
 ┃ ┃ ┃ ┣ 📜icon_defy.png
 ┃ ┃ ┃ ┣ 📜icon_dish.png
 ┃ ┃ ┃ ┣ 📜icon_full_smile.png
 ┃ ┃ ┃ ┣ 📜icon_heart.png
 ┃ ┃ ┃ ┣ 📜icon_noodle.png
 ┃ ┃ ┃ ┣ 📜icon_paper.png
 ┃ ┃ ┃ ┣ 📜icon_party.png
 ┃ ┃ ┃ ┣ 📜icon_preparing.png
 ┃ ┃ ┃ ┣ 📜icon_restaurant.png
 ┃ ┃ ┃ ┣ 📜icon_schedule.png
 ┃ ┃ ┃ ┣ 📜icon_soup.png
 ┃ ┃ ┃ ┣ 📜icon_teacher.png
 ┃ ┃ ┃ ┣ 📜icon_thinking.png
 ┃ ┃ ┃ ┗ 📜icon_wait.png
 ┃ ┃ ┣ 📂sprite
 ┃ ┃ ┃ ┣ 📜sprite.css
 ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┣ 📜main_visual.png
 ┃ ┃ ┗ 📜test.jpg
 ┃ ┗ 📂style
 ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┣ 📜layout.scss
 ┃ ┃ ┃ ┣ 📜_button.scss
 ┃ ┃ ┃ ┣ 📜_common.scss
 ┃ ┃ ┃ ┣ 📜_icon.scss
 ┃ ┃ ┃ ┣ 📜_input.scss
 ┃ ┃ ┃ ┣ 📜_loader.scss
 ┃ ┃ ┃ ┣ 📜_main_footer.scss
 ┃ ┃ ┃ ┣ 📜_main_visual.scss
 ┃ ┃ ┃ ┣ 📜_menu.scss
 ┃ ┃ ┃ ┣ 📜_mixin.scss
 ┃ ┃ ┃ ┣ 📜_pagebar.scss
 ┃ ┃ ┃ ┣ 📜_popup.scss
 ┃ ┃ ┃ ┣ 📜_recommend.scss
 ┃ ┃ ┃ ┣ 📜_reset.scss
 ┃ ┃ ┃ ┣ 📜_slider.scss
 ┃ ┃ ┃ ┣ 📜_title.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜layout.css
 ┃ ┃ ┗ 📜layout.css.map
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜Arrow.js
 ┃ ┃ ┃ ┣ 📜Close.js
 ┃ ┃ ┃ ┣ 📜MenuButtonMiddle.js
 ┃ ┃ ┃ ┣ 📜MenuButtonWide.js
 ┃ ┃ ┃ ┗ 📜WideButton.js
 ┃ ┃ ┣ 📂context
 ┃ ┃ ┃ ┗ 📜CommonContext.js
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┗ 📜MenuForm.js
 ┃ ┃ ┣ 📂popup
 ┃ ┃ ┃ ┗ 📜MainPopup.js
 ┃ ┃ ┗ 📜ui.html
 ┃ ┣ 📂dislike
 ┃ ┃ ┣ 📜Dislike.js
 ┃ ┃ ┗ 📜dislike_menu.html
 ┃ ┣ 📂guide
 ┃ ┃ ┣ 📜guide.html
 ┃ ┃ ┗ 📜Guide.js
 ┃ ┣ 📂loader
 ┃ ┃ ┣ 📜loader.html
 ┃ ┃ ┗ 📜Loader.js
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜Contents.js
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┣ 📜main.html
 ┃ ┃ ┣ 📜Main.js
 ┃ ┃ ┣ 📜MainContents.js
 ┃ ┃ ┗ 📜MainVisual.js
 ┃ ┣ 📂recommend
 ┃ ┃ ┣ 📜recommand.html
 ┃ ┃ ┗ 📜Recommend.js
 ┃ ┗ 📂yesterday
 ┃ ┃ ┣ 📜Yesterday.js
 ┃ ┃ ┗ 📜yesterday_menu.html
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┣ 📜setUpProxy.js
 ┗ 📜setupTests.js


# 일반적인 폴더 구조 (다른 vue 프로젝트를 참고하였습니다.)
📦src // 프론트엔드 폴더
 ┣ 📂app
 ┃ ┣ 📂components // 개발 폴더
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📜popup.vue
 ┃ ┃ ┃ ┃ ┣ 📜main.vue
 ┃ ┃ ┃ ┣ 📂gnb
 ┃ ┃ ┃ ┃ ┣ 📜topMenu.vue
 ┃ ┃ ┃ ┃ ┗ 📜breadcrumbs.vue
 ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┗ 📜nav.vue
 ┃ ┃ ┃ ┗ 📂views
 ┃ ┃ ┃ ┃ ┣ 📜product01.vue
 ┃ ┃ ┃ ┃ ┣ 📜product02.vue
 ┃ ┃ ┣ 📂page01
 ┃ ┃ ┃ ┣ 📜page01.vue
 ┃ ┃ ┣ 📂page02
 ┃ ┃ ┃ ┣ 📜page02.vue
 ┃ ┣ 📂components_pub // 퍼블리싱 폴더
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📜popup.vue
 ┃ ┃ ┃ ┃ ┣ 📜main.vue
 ┃ ┃ ┃ ┣ 📂gnb
 ┃ ┃ ┃ ┃ ┣ 📜topMenu.vue
 ┃ ┃ ┃ ┃ ┗ 📜breadcrumbs.vue
 ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┗ 📜nav.vue
 ┃ ┃ ┃ ┗ 📂views
 ┃ ┃ ┃ ┃ ┣ 📜product01.vue
 ┃ ┃ ┃ ┃ ┣ 📜product02.vue
 ┃ ┃ ┣ 📂page01
 ┃ ┃ ┃ ┣ 📜page01.vue
 ┃ ┃ ┣ 📂page02
 ┃ ┃ ┃ ┣ 📜page02.vue
 ┃ ┣ 📜App.vue
 ┃ ┣ 📜main.js
 ┣ 📂assets
 ┃ ┣ 📂font
 ┃ ┃ ┣ 📜NanumGothic.eot
 ┃ ┃ ┣ 📜NanumGothic.ttf
 ┃ ┃ ┣ 📜NanumGothic.woff
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜icon.png
 ┃ ┃ ┣ 📜bg_01.jpg
 ┃ ┃ ┣ 📜btn.png
 ┃ ┗ 📂style
 ┃ ┃ ┣ 📜style_common.css
 ┃ ┃ ┣ 📜style.scss
 ┣ 📂error
 ┃ ┣ 📜404.html
 ┃ ┣ 📜500.html
 ┣ 📜favicon.ico
 ┗ 📜index.html



* 일반적인 폴더 구조를 참고하여 우리 프로젝트 폴더 구조를 짜봤습니다. 
경로는 검색에 걸려든건 최대한 다 바꾸고 테스트도 했는데, 혹시 제가 놓친게 있을 수 있으니 세아님께서 다시 한번 확 인 부탁드립니다!