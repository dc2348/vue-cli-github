# AWS CLI를 이용하여 CodeCommit Clone하기

AWS-CLI를 이용하여 CodeCommit의 리포지토리를 Clone해 오려면 그 권한을 가지고 있는 자격증명 확인이 필요하다. 자격증명 없이 Clone을 시도할 경우 아래와 같은 오류가 발생한다
```bash
fatal: unable to access 'git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx/': The requested URL returned error: 403
```
이를 해결하기 위해서는 아래 방법을 따라 Git 자격 증명을 생성한 후 설정파일에 저장해주어야 한다.

## 1. CodeCommit에 대한 HTTPS 접속을 위한 Git 자격 증명 생성
먼저 CodeCommit에 HTTPS로 접속할 수 있는 자격 증명을 AWS IAM에서 생성해주어야한다.

1. [AWS Management Console](https://console.aws.amazon.com)에 로그인(CodeCommit 접속을 위해 Git 자격 증명을 생성 및 사용할 IAM 사용자로 로그인해야 한다.)
2. [IAM Console](https://console.aws.amazon.com/iam/)을 연다.
3. IAM 콘솔의 탐색 창에서 `사용자`를 선택하고 사용자 목록에서 자신의 IAM `사용자 이름`을 선택한다.
4. 사용자 세부 정보 페이지에서 `Security Credentials(보안 자격 증명) 탭`을 선택하고 HTTPS Git credentials for AWS CodeCommit`(AWS CodeCommit에 대한 HTTPS Git 자격 증명)`에서 `자격 증명 생성`을 선택한다.
5. IAM이 생성한 `사용자 이름`과 `비밀번호`를 저장해 놓는다( CodeCommit에 접속하려면 이 정보가 필요하다).
저장 방법은 팝업에 노출되는 사용자 이름과 비밀번호를 따로 `복사 후 붙여넣기`하여 별도로 관리하거나 `자격 증명 다운로드`를 선택하여 .CSV 파일로 이 정보를 다운로드하는 두 가지가 있다.

###### :bulb: 위 단계에서 `비밀번호`를 받드시 저장해 놓아야한다. `비밀번호`는 자격 증명을 생성한 직후에만 확인이 가능하고 그 이후에는 다시 확인이 불가하여, `비밀번호`를 잊어버렸을 경우자격 증명을 신규로 생성해야한다.

## 2. MFA 를 사용하여 임시접속 자격증명을 받아오기
위에서 자격 증명을 생성하였으면, AWS-CLI를 통해 해당 자격 증명을 세션 토큰 형태로 받아온다.

###### 세션토큰 받아오기
```bash
aws sts get-session-token --serial-number arn:aws:iam::175816075786:mfa/dc2348 --token-code 123456

// arn:aws:iam::175816075786:mfa/dc2348 : 할당된 MFA 디바이스
// 123456 : MFA의 6자리숫자
```
- 성공하면 AccessKeyId, SecretAccessKey, SessionToken, Expiration 이라는 4가지 값을 받아온다

###### codecommit 용 profile 추가

1. `config` 파일
    ```bash
    [profile codecommitprofile]
    region = ap-northeast-2
    output = json
    ```
2. `credentials` 파일에  IAM 설정정보를  추가
    - codecommitprofile라는 이름 추가
    ```bash
    [codecommitprofile]
    aws_access_key_id=받아온AccessKeyId
    aws_secret_access_key=받아온SecretAccessKey
    aws_session_token=받아온SessionToken
    ```

## git config 설정

```bash
git config --global credential.helper "!aws codecommit credential-helper --profile codecommitprofile $@"
git config --global credential.UseHttpPath true
```

## git clone
```bash
git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx
```


### :bookmark_tabs: 참조(references)
- [https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-gc.html](https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-gc.html)