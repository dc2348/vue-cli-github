
# Vue-CLI란

Vue CLI는 Vue.js 개발을 위한 시스템으로 Vue.js 에서 공식적으로 제공하는 CLI이다. Vue CLI는 빠른 Vue.js 개발을 위한 전체 시스템 구성을 도와주는 스캐폴딩 역할을 하며, Vue 생태계 표준을 만드는 것을 목적으로 하고있다.

# Vue-CLI 설치
###### Vue-CLI 설치

```bash
npm i -g @vue/cli
```

###### Vue-CLI 설치 및 버전 확인
```bash
vue --version
```

# vue 프로젝트 생성

###### Vue-CLI를 이용한 Vue 프로젝트 생성
```bash
vue create <project-name>
```

###### 예시) 'vue-cli-github'라는 이름의 프로젝트 생성
```bash
vue create vue-cli-github
```


- 위 명령어를 실행하면 프로젝트 구성에 필요한 요소들을 선택하라는 대화형 커맨드가 출력된다.

```bash
? Please pick a preset:
> default (babel, exlint)
  Manually select features
```
위아래 키보드를 통해 `>` 표시로 선택이 가능하다. 선택 후 엔터를 누르면 다음 단계가 진행된다.
default를 선택하여 기본 요소인 babel과 eslint만 설치를 진행했다.


# 프로젝트 실행

###### 생성된 프로젝트로 이동
```bash
cd vue-cli-github
```

###### 서버 실행
```bash
npm run serve
```

###### 실행 화면
- ![2020-01-03-createRepository-1]({{site.baseurl}}/assets/images/2020-01-15-use-vue-cli-1.jpg)


# 프로젝트 종료
```bash
Ctrl + C
```


# GitHub 리모트 저장소에 Push 하기
###### 현재 git 상태 확인
- vue-cli 프로젝트를 생성한 후 `git status`를 해보면 아래와 같은 상태이다.
    ```bash
    On branch master
    nothing to commit, working tree clean
    ```
- 즉, vue-cli 프로젝트를 생성하였을 경우 기본 git의 상태는 `git init` + `git commit -m "init"`까지가 되어 있는 상태라고 보면 된다.


###### Git 리모트 저장소에 push

이미 생성되어 있는 github 레파지토리에 push하기 위해서는 remote 저장소를 추가한 후 push해주면 된다.
######  remote 저장소 추가
```bash
git remote add origin https://github.com/dc2348/vue-cli-github.git
```
######  remote 저장소에 push
```bash
git push origin master
```

<br>

### :bookmark_tabs: 참조(references)
https://cli.vuejs.org/