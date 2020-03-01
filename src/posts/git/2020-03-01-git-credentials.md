# Git 아이디와 패스워드 없이 Push하기

## Credential 저장소
SSH 프로토콜을 사용하여 리모트 저장소에 접근할 때 Passphase 없이 생성한 SSH Key를 사용하면 사용자이름과 암호를 입력하지 않고도 안전하게 데이터를 주고받을 수 있다. 반면 HTTP 프로토콜을 사용하는 경우는 매번 사용자이름과 암호를 입력해야 한다.

다행히도 Git은 이렇게 매번 인증정보(Credential)를 입력하는 경우 인증정보를 저장해두고 자동으로 입력해주는 시스템을 제공한다. Git Credential 기능이 제공하는 옵션은 아래와 같다.


- 일단 기본적으로 아무런 설정도 하지 않으면 어떤 암호도 저장하지 않는다. 이 경우 인증이 필요한 때 매번 사용자이름과 암호를 입력해야 한다.

- `cache` 모드로 설정하면 일정 시간 동안 메모리에 사용자이름과 암호 같은 인증정보를 기억한다. 이 정보를 Disk에 저장하지는 않으며 메모리에서도 15분 까지만 유지한다.

- `store` 모드로 설정하면 인증정보를 Disk의 텍스트 파일로 저장하며 계속 유지한다. 계속 유지한다는 말은 리모트의 인증정보를 변경하지 않는 한 다시 인증정보를 입력하지 않아도 접근할 수 있다는 말이다. “store” 모드를 사용할 때 주의할 점은 인증정보가 사용자 홈 디렉토리 아래에 일반 텍스트 파일로 저장된다는 점이다.

- Mac에서 Git을 사용하는 경우 `osxkeychain` 모드를 사용하면 Mac에서 제공하는 Keychain 시스템에 사용자이름과 암호를 현재 로그인 계정에 속하게 저장한다. “store” 모드하면 인증정보를 Disk에 저장하고 인증정보가 만료되지 않는 점은 같지만, Safari 브라우저가 인증정보를 저장하는 것과 같은 수준으로 암호화해서 저장한다는 점이 다르다.

- Windows 환경에서는 `Git Credential Manager for Windows.` 라는 Helper가 있다. “osxkeychain” Helper와 비슷하게 동작하며 Windows Credential Store를 사용하여 안전하게 인증정보를 저장한다. [https://github.com/Microsoft/Git-Credential-Manager-for-Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows) 에서 다운로드 받을 수 있다.


## 모드 설정하기
위에서 설명한 여러 모드 중 하나를 아래와 같이 설정할 수 있다.

```bash
git config credential.helper "$helper $options"
```

## cache
###### git-credential-cache 헬퍼
- 비밀번호를 일시적으로 저장소에 저장한다.

###### 상세설명
`cache` 명령어는 Git 프로그램에서 나중에 사용할 수 있도록 자격 증명을 메모리에 캐시한다. 저장된 자격 증명은 절대 디스크를 건드리지 않으며 구성 가능한 시간 초과 후 잊어 버린다. 캐시는 Unix 도메인 소켓을 통해 액세스 할 수 있으며 파일 시스템 권한으로 현재 사용자로 제한된다.

###### 사용법
```bash
git config credential.helper 'cache [<options>]'
```

###### Option
- `--timeout <seconds>` :  캐시를 유지할 시간(초). (기본값 : 900).

###### 사용예시
1. 기본 사용법
- 캐시 명령어 실행
```bash
git config credential.helper cache
```
- 캐시 명령어를 실행 후에 첫 번째로 푸시 명령어를 수행 할 때 아이디와 패스워드를 최초 한번 입력해준다.
```bash
git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>
```
- 5분 후 다시 푸시를 실행할 경우 아이디와 패스워드를 입력하지 않고 푸시가 가능하다.
```bash
git push http://example.com/repo.git // 푸시완료
```

2. 캐시 시간 설정
- 옵션을 추가하여 캐시를 유지할 시간을 설정 할 수 있다.
```bash
git config credential.helper 'cache --timeout=300' // 캐시 시간을 5 분으로 설정
```

:bulb: `credential-cache` 오류가 날 때 해결 법
```bash
git: 'credential-cache' is not a git command. See 'git --help'.
```
- [https://stackoverflow.com/questions/11693074/git-credential-cache-is-not-a-git-command](https://stackoverflow.com/questions/11693074/git-credential-cache-is-not-a-git-command)


<br>

### :bookmark_tabs: 참조(references)
- [https://git-scm.com/docs/git-config](https://git-scm.com/docs/git-config)
- [https://git-scm.com/docs/gitcredentials](https://git-scm.com/docs/gitcredentials)
- [https://git-scm.com/docs/git-credential-cache](https://git-scm.com/docs/git-credential-cache)
- [https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
- [https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Credential-%EC%A0%80%EC%9E%A5%EC%86%8C](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Credential-%EC%A0%80%EC%9E%A5%EC%86%8C)
- [https://dotnet.microsoft.com/download/dotnet-framework](https://dotnet.microsoft.com/download/dotnet-framework)