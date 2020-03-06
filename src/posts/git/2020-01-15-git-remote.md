
# 리모트 저장소란
리모트 저장소는 인터넷이나 네트워크 등에 있는 원격 저장소를 말한다. 간단히 말해서 다른 사람들과 함께 일한다는 것은 리모트 저장소를 관리하면서 데이터를 거기에 Push 하고 Pull 하는 것이다.

# 리모트 저장소 확인하기

###### 리모트 저장소의 단축 이름 보기
```bash
git remote
```
- 이 명령은 리모트 저장소의 단축 이름을 보여준다. 저장소를 Clone 하면 `origin`이라는 리모트 저장소가 자동으로 등록되기 때문에 `origin`이라는 이름을 볼 수 있다.
- 리모트 저장소가 여러 개 있다면 이 명령은 등록된 전부를 보여준다. 여러 사람과 함께 작업하는 리모트 저장소가 여러개라면 아래와 같은 결과를 얻을 수도 있다.


###### 리모트 저장소의 단축 이름과 URL 함께보기
```bash
git remote -v
```

# 리모트 저장소 추가하기

```bash
git remote add <단축이름> <url>
```
기존 워킹 디렉토리에 새 리모트 저장소를 쉽게 추가할 수 있다.

# 리모트 저장소에 Push 하기

```bash
git push <리모트 저장소 이름> <브랜치 이름>
```
- 프로젝트를 공유하고 싶을 때 Upstream 저장소에 Push 할 수 있다.
- 예시로, `git push origin master` 명령어는 `master 브랜치를 origin 서버에 Push 한다.`라는 뜻을 의미한다.(다시 말하지만 Clone 하면 보통 자동으로 origin 이름이 생성된다) 


### :bookmark_tabs: 참조(references)
https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EC%A0%80%EC%9E%A5%EC%86%8C