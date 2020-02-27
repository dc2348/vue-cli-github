export default {
    title: 'AWS CLI를 이용하여 CodeCommit Clone하기',
    summary: 'AWS CLI를 이용하여 CodeComit을 사용하는 방법',
    date:  '2020-01-23 16:00:00 +0900',
    content: `
# AWS CLI를 이용하여 CodeCommit Clone하기

## CodeCommit에 대한 HTTPS 접속을 위한 Git 자격 증명 생성

1. AWS Management 콘솔에 로그인한 다음 https://console.aws.amazon.com/iam/에서 IAM 콘솔을 엽니다.
2. CodeCommit 접속을 위해 Git 자격 증명을 생성 및 사용할 IAM 사용자로 로그인해야 합니다.
3. IAM 콘솔의 탐색 창에서 사용자를 선택하고 사용자 목록에서 해당 IAM 사용자를 선택합니다.
4. 사용자 세부 정보 페이지에서 Security Credentials(보안 자격 증명) 탭을 선택하고 HTTPS Git credentials for AWS CodeCommit(AWS CodeCommit에 대한 HTTPS Git 자격 증명)에서 생성을 선택합니다.
5. IAM이 생성한 사용자 이름과 암호를 복사하는 방법은 로컬 컴퓨터에 있는 안전한 파일에 표시, 복사 후 붙여넣기하거나 자격 증명 다운로드를 선택하여 .CSV 파일로 이 정보를 다운로드하는 두 가지가 있습니다. CodeCommit에 접속하려면 이 정보가 필요합니다.

###### 이때가 사용자 이름과 암호를 저장할 수 있는 유일한 기회입니다. 이 정보를 저장하지 않는 경우, 사용자 이름은 IAM 콘솔에서 복사할 수 있지만 암호는 찾을 수 없습니다. 그러므로 암호를 재설정한 후 저장해야 합니다.

## MFA 를 사용하여 임시접속 자격증명을 받아오기

###### 세션토큰 받아오기
\`\`\`
aws sts get-session-token --serial-number arn:aws:iam::175816075786:mfa/dc2348 --token-code 123456

// arn:aws:iam::175816075786:mfa/dc2348 : 할당된 MFA 디바이스
// 123456 : MFA의 6자리숫자
\`\`\`

성공하면 AccessKeyId, SecretAccessKey, SessionToken, Expiration 이라는 4가지 값을 받아온다

###### codecommit 용 profile 추가

1. config 파일
\`\`\`
[profile codecommitprofile]
region = ap-northeast-2
output = json
\`\`\`
2. credentials 파일에  IAM 설정정보를  추가

codecommitprofile라는 이름 추가

\`\`\`
[codecommitprofile]
aws_access_key_id=받아온AccessKeyId
aws_secret_access_key=받아온SecretAccessKey
aws_session_token=받아온SessionToken
\`\`\`

## git config 설정

\`\`\`
git config --global credential.helper "!aws codecommit credential-helper --profile codecommitprofile $@"
git config --global credential.UseHttpPath true
\`\`\`

## git clone
\`\`\`
git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/xxxxxx
\`\`\`


### :bookmark_tabs: 참조(references)
https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/setting-up-gc.html
`
};