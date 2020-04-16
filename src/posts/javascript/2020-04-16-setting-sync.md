# Settings Sync를 이용한 VSCode간 플러그인 동기화

<br>

## Setting Sync 설치하기
1. VSCode에서 확장 탭을 연다. (단축키 : `Ctrl` + `Shift` + `X`)
2. 검색창에 `Setting Sync`를 검색한다.
3. `Setting Sync`를 설치한다.

![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-01.jpg)

<br>

## Setting Sync 설정하기
1. VSCode 팔레트 창을 연다. (단축키 : `Ctrl` + `Shift` + `P`)
2. 검색창에 `Sync: Download Settings`를 입력하여 나오는 `Sync: 다운로드 설정`를 클릭하여 연다.
![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-02.jpg)

3. 그럼 아래와 같은 `Welcom to Settings Sync`라는 탭이 열린다.
![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-03.jpg)

4. 위 화면의 `LOGIN WITH GITHUB` 버튼을 클릭하여 본인의 github 계정으로 로그인한다.
5. 아래와 같은 성공 메시지를 받으면 브라우저 탭을 닫아주면 된다.
![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-04.jpg)

6. (`Settings Sync`를 처음 사용하는 것이라면) 자동으로 GIST가 생성된다.
    - github.com에서 your gist 메뉴로 들어가면 cloudSettings라는 이름으로 생성된 gists를 확인할 수 있다.
    - 만약 이때 자동으로 생성이 되지 않았더라도 업로드할 때 gist가 없으면 생성해주기 때문에 다음 단계로 넘어가도 괜찮다.
    ![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-05.jpg)

7. (`Settings Sync`를 사용한적이 있다면) `Select Yor Existing Gist`라는 탭이 열리며 기존에 있던 GIST를 선택할 수 있는 창이 VSCode에 표시된다.
![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-06.jpg)

<br>

## Setting Sync 업로드하기
1. 단축키 `Shift` + `Alt` + `U`를 누른다.
2. 출력창에 결과가 표시된다.
![setting-sync](/posts/images/javascript/2020-04-16-setting-sync-07.jpg)

<br>

## Setting Sync 다운로드하기
1. 단축키 `Shift` + `Alt` + `D`를 누른다.


---
### :bookmark_tabs: 참조(references)
- [https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)