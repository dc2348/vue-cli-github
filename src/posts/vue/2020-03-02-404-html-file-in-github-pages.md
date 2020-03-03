# GitHub Pages에서 커스텀 404 error 페이지 만들기

## 기본 404 not found 오류 페이지
GitHub pages를 이용한 SPA 사이트를 만들 경우, 잘못된 경로로 접속하면 GitHub Pages에서 제공하는 default 에러 페이지가 노출된다.

![vue](/posts/images/vue/vue-2020-03-02-03.jpg)

## 커스텀 404 not found 오류 페이지 만들기
- 위에 설명한 기본 에러 페이지 외에 커스텀 에러 페이지를 만들 수 있다.
- 커스텀 에러 페이지는 웹사이트의 root 경로에 `404.html` 파일 또는 `404.md` 파일을 추가해주면 된다(vue-cli를 이용할 경우 `public/` 폴더 하위에 위치)
- ex) `dc2348.github.io/404.html` or `dc2348.github.io/404.md`

    ### 1) 404.md 파일로 추가하기
    - `404.md`로 생성할 경우 파일의 시작 부분에 다음 YAML 코드를 추가 해줘야한다.
        ```md
        ---
        permalink: /404.html
        ---
        ```
        반영 후 아래와 같은 모습으로 노출된다.

        ![vue](/posts/images/vue/vue-2020-03-02-01.jpg)

    ### 2) 404.html 파일로 추가하기
    - `404.html` 파일로 생성하였을 경우에는  아래와 같은 모습으로 노출된다.

        ![vue](/posts/images/vue/vue-2020-03-02-02.jpg)

:bulb: `404.md`와 `404.html` 두 파일을 모두 추가하였을 경우에는 404.html 파일이 노출된다.

<br>

### :bookmark_tabs: 참조(references)
- [https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site](https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)