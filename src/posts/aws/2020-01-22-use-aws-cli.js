export default {
    title: 'AWS CLI 사용하기',
    content: `
# AWS CLI 사용하기
## AWS CLI 설치

### AWS CLI 설치
###### MSI 설치 관리자를 이용
- Windows용 AWS CLI MSI 설치 관리자(64비트) 다운로드

### 설치 확인
\`\`\`
aws --version
\`\`\`

### 설치 경로 찾기
\`\`\`
where aws
\`\`\`
- where 명령은 시스템 PATH에서 지정된 프로그램을 찾은 위치를 표시


## AWS CLI 구성
### 빠르게 구성하기
\`\`\`
aws configure
\`\`\`
명령어 실행 후 아래 4가지 정보 입력
\`\`\`
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE // 액세스 키
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY // 보안 액세스 키(비밀 액세스 키)
Default region name [None]: us-west-2 // AWS 리전
Default output format [None]: json // 출력 형식
\`\`\`
\`default\` 프로파일에 저장(사용할 프로파일을 명시적으로 지정하지 않는 AWS CLI 명령이 실행될 때마다 사용됨)


###### 액세스 키 및 비밀 액세스 키 생성

1. AWS Management 콘솔에 로그인한 다음 https://console.aws.amazon.com/iam/에서 IAM 콘솔을 엽니다.
2. 탐색 창에서 사용자를 선택합니다.
3. 액세스 키를 생성할 사용자의 이름을 선택한 다음 Security credentials(보안 자격 증명) 탭을 선택합니다.
4. 액세스 키 섹션에서 Create access key(액세스 키 생성)를 선택합니다.
5. 새 액세스 키 페어를 보려면 표시를 선택합니다. 이 대화 상자를 닫은 후에는 보안 액세스 키에 다시 액세스할 수 없습니다. 자격 증명은 다음과 비슷합니다.
- 액세스 키 ID: AKIAIOSFODNN7EXAMPLE
- 보안 액세스 키: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

###### 리전
\`\`\`
ap-northeast-2 // 아시아 태평양(서울)
\`\`\`

###### 출력
\`\`\`
json
or yaml
or text
or table
\`\`\`
- 출력 형식을 지정하지 않으면 json이 기본값으로 사용됨

### 구성 설정 및 우선 순위
AWS CLI는 여러 자격 증명 공급자를 사용하여 AWS 자격 증명을 찾습니다. 각 자격 증명 공급자는 시스템 또는 사용자 환경 변수, 로컬 AWS 구성 파일 또는 명령줄에서 파라미터로 명시적으로 선언된 위치 등 다양한 장소에서 자격 증명을 찾습니다. AWS CLI는 다음 순서로 공급자를 호출하고 사용할 자격 증명 세트를 찾은 경우 중지하여 자격 증명 및 구성 설정을 찾습니다.
명령줄 옵션 – 명령줄의 파라미터로 --region, --output 및 --profile을 지정할 수 있습니다.

1. 환경 변수
2. CLI 자격 증명 파일
3. CLI 구성 파일
4. 컨테이너 자격 증명
5. 인스턴스 프로필 자격 증명

## 참조
https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-windows.html
https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html
`
};
