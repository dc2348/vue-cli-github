# Vue SPA를 Github Pages에서 Route하기

이 블로그를 생성하면서 페이지 라우팅에 어려움을 겪었다. 
그 이유는 GitHub Pages에서 SPA를 지원하지 않음에 따라 사이트 내 하위 경로로 URL을 다이렉트로 접근 시 404 not found 오류가 발생했기 때문이다.

그에 대한 해결책을 찾다보니 꼼수 같기도 하지만 해결 가능한 방법을 찾게 되었다.
그 방법은 바로 커스텀 404 error page를 만든 다음, 그 페이지에서 URL 값을 읽어 리다이렉트 시켜주는 방식이다.

### 1) `404.html` 파일 추가
- `404.html` 파일을 생성해준다. (:point_right: [GitHub Pages에서 커스텀 404 error 페이지 만들기](https://dc2348.github.io/posts/9))
- `404.html` 파일에 아래 코드를 추가해준다.
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <script>
                sessionStorage.redirectURL = location.href;
            </script>
            <meta http-equiv="refresh" content="0;URL='/'">
        </head>
    </html>
    ```

### 2) `index.html` 파일에 코드 추가
- `index.html` 파일에 아래 코드를 추가해준다.
    ```html
    <script>
      (function(){
          var redirectURL = sessionStorage.redirectURL;
          delete sessionStorage.redirectURL;
          if (redirectURL && redirectURL != location.href) {
              history.replaceState(null, null, redirectURL);
          }
      })();
    </script>
    ```
<br>

### :bookmark_tabs: 참조(references)
- [https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages](https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages)