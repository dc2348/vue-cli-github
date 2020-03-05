# AWS CLI를 이용하여 CodeCommit에서 리포지토리 clone하기

###### 준비물 : AWS-CLI 설치 및 구성, Git 설치

AWS-CLI를 이용하여 CodeCommit의 리포지토리를 clone해 오려면 그 권한을 가지고 있는 `자격 증명`이 필요하다. 

## 1. Git 자격 증명 생성
먼저 CodeCommit에 HTTPS로 접속할 수 있는 자격 증명을 AWS IAM에서 생성해주어야한다.

1. [AWS Management Console](https://console.aws.amazon.com)에 로그인(CodeCommit 접속을 위해 Git 자격 증명을 생성 및 사용할 IAM 사용자로 로그인해야 한다.)
2. [IAM Console](https://console.aws.amazon.com/iam/)을 연다.
3. IAM 콘솔의 탐색 창에서 `사용자`를 선택하고 사용자 목록에서 자신의 IAM `사용자 이름`을 선택한다.
4. 사용자 세부 정보 페이지에서 `Security Credentials(보안 자격 증명) 탭`을 선택하고 HTTPS Git credentials for AWS CodeCommit`(AWS CodeCommit에 대한 HTTPS Git 자격 증명)`에서 `자격 증명 생성`을 선택한다.
5. IAM이 생성한 `사용자 이름`과 `비밀번호`를 저장해 놓는다(CodeCommit에 접속하려면 이 정보가 필요하다).

:bulb: 위 단계에서 `비밀번호`를 받드시 저장해 놓아야한다. `비밀번호`는 자격 증명을 생성한 직후에만 확인이 가능하고 그 이후에는 다시 확인이 불가하여, `비밀번호`를 잊어버렸을 경우자격 증명을 신규로 생성해야한다.


## 2. CodeCommit 리포지토리 clone
위에서 Git 자격 증명을 생성하였다면 아래와 같이 `git clone`을 통해 리포지토리를 받아올 수 있다.

```bash
git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx
```
:bulb: 처음 접속하는 경우에는 리포지토리에 대한 사용자 이름과 암호를 묻는 메시지가 표시된다. 이 경우, `1. Git 자격 증명 생성`에서 생성한 사용자 이름과 암호를 입력한다

--- 
# 참고 자료


### 403 에러 발생
일반적인 경우 위에서 설명한 방법대로만 진행하면 CodeCommit에서 clone이 가능하다. 그러나 기업의 경우에는 `MFA 보안강화`가 되어 있는 경우가 있다. 이럴 경우, MFA를 이용하여 `임시접속 자격증명`을 받아와서 저장해 주어야 clone이 가능하다. `임시접속 자격증명` 없이 clone을 시도할 경우 아래와 같은 오류가 발생한다.

```bash
fatal: unable to access 'git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx/': The requested URL returned error: 403
```

이를 해결하기 위해서는 아래 방법을 따라 `임시접속 자격증명`을 생성 및 등록해주어야 한다.

## MFA 토큰을 사용하여 AWS CLI를 통해 내 AWS 리소스에 대한 액세스를 인증 받기

### 1. 임시 자격 증명 받기
`sts get-session-token` AWS CLI 명령을 실행한다.
```bash
aws sts get-session-token --serial-number arn:aws:iam::175816075786:mfa/dc2348 --token-code 123456

// arn:aws:iam::175816075786:mfa/dc2348 : 할당된 MFA 디바이스
// 123456 : MFA 토큰 6자리
```
성공하면 임시 자격 증명과 만료 시간을 받아온다.
```bash
// 결과 예시
{
    "Credentials": {
        "SecretAccessKey": "secret-access-key",
        "SessionToken": "temporary-session-token",
        "Expiration": "expiration-date-time",
        "AccessKeyId": "access-key-id"
    }
}
```

### 2. 받아온 임시 자격 증명 저장하기
`CodeCommitProfile`이라는 이름의 profile을 추가한다.

1. `.aws/config` 파일에 추가
    ```bash
    [profile CodeCommitProfile]
    region = ap-northeast-2
    output = json
    ```
2. `.aws/credentials` 파일에 추가
    ```bash
    [CodeCommitProfile]
    aws_access_key_id=받아온AccessKeyId
    aws_secret_access_key=받아온SecretAccessKey
    aws_session_token=받아온SessionToken
    ```

### 3. Git 자격 증명 헬퍼에 AWS 자격 증명 프로필 적용하기
대부분의 사용자는 `1. Git 자격 증명 생성` 단계를 따라 쉽게 진행할 수 있다. 하지만 루트 계정, 연합된 액세스 또는 임시 자격 증명을 사용하여 CodeCommit에 연결하는 경우, `AWS CLI에 포함된 자격 증명 헬퍼`를 사용해야 한다.


###### 1) CodeCommit 명령어 설치 확인
아래 명령을 실행하여 AWS CLI용 codecommit 명령어가 설치되었는지 확인한다.

```bash
aws codecommit help
```

###### 2) git config 설정
AWS 자격 증명 프로필과 함께 Git 자격 증명 헬퍼를 사용하도록 아래 명령어를 실행한다.
```bash
git config --global credential.helper "!aws codecommit credential-helper --profile CodeCommitProfile $@"
git config --global credential.UseHttpPath true
```
`.gitconfig` 파일에 다음 사항을 작성된다.
```
// .gitconfig 파일

[credential]
	helper = !aws codecommit credential-helper --profile CodeCommitProfile $@
	UseHttpPath = true 
```

### 3. CodeCommit 리포지토리 clone
```bash
git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx
```


### :bookmark_tabs: 참조(references)
- [https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-gc.html](https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-gc.html)
- [https://aws.amazon.com/ko/premiumsupport/knowledge-center/authenticate-mfa-cli/](https://aws.amazon.com/ko/premiumsupport/knowledge-center/authenticate-mfa-cli/)
- [https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-https-windows.html](https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-https-windows.html)
