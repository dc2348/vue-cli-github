# AWS CLI 사용하기
이 문서는 Windows 10을 기준으로 작성되었습니다.

## 1. AWS CLI 설치
AWS CLI를 설치하는 방법에는 2가지가 있다.
1. MSI 설치 관리자를 사용하여 설치
2. Python 및 pip를 사용하여 설치

이 글에서는 MSI 설치 관리자를 이용한 방법에 대해 설명한다.


### MSI 설치 관리자를 이용하여 설치
- [설치 안내 페이지](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-windows.html#install-msi-on-windows)로 이동한다.
- 자신의 버전에 맞는 Windows용 AWS CLI MSI 설치 관리자 파일을 다운로드 받는다
    - ![aws-2020-01-22-01](/posts/images/aws/aws-2020-01-22-01.jpg)
- 설치를 진행한다.
:exclamation:  Widnows에서 설치할 경우 파일 설치 경로는 띄어쓰기가 없는 것이 좋다. ex) `Program Files` 경로 포함 시 추후 오류가 발생할 수 있음
:bulb: MSI 설치 관리자로 설치를 할 경우 운영 체제의 PATH 환경 변수에 경로가 자동 추가된다.

###  설치 확인
``` bash
aws --version
```

###### 참고) Windows에서 프로그램을 찾을 수 없는 경우 
- 명령 프롬프트를 닫고 다시 열어 본다.
-  설치 디렉터리를 PATH 환경 변수에 수동으로 추가해 본다.
<br>

## 2. AWS CLI 구성
AWS CLI가 AWS와 상호작용을 하기 위해서는 몇가지 설정이 필요하다.
1. 보안 자격 증명
2. 기본 출력 형식 
3. 기본 AWS 리전

### 빠르게 구성하기
`aws configure` 명령 실행. 이 명령어는 AWS CLI 설치를 설정할 수 있는 가장 빠른 방법이다.
``` bash
aws configure
```
위 명령어를 실행하면 아래 네 가지 정보를 물어본다.
1. 액세스 키
2. 비밀 액세스 키
3. AWS 리전
4. 출력 형식

###### 예시
``` bash
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE // 액세스 키
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY //비밀 액세스 키
Default region name [None]: ap-northeast-2 // AWS 리전
Default output format [None]: json // 출력 형식
```


위 네 가지 값은 아래 설명에 따라 구할 수 있다.

<br>

##### 1. 액세스 키 및 비밀 액세스 키 생성

1. AWS Management 콘솔에 로그인한 다음 [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/)에서 IAM 콘솔을 엽니다.
2. 탐색 창에서 사용자를 선택합니다.
3. 액세스 키를 생성할 사용자의 이름을 선택한 다음 Security credentials(보안 자격 증명) 탭을 선택합니다.
4. 액세스 키 섹션에서 Create access key(액세스 키 생성)를 선택합니다.
5. 새 액세스 키 페어를 보려면 표시를 선택합니다. 이 대화 상자를 닫은 후에는 보안 액세스 키에 다시 액세스할 수 없습니다. 자격 증명은 다음과 비슷합니다.
```bash
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

##### 2. AWS 리전
요청을 전송할 서버가 있는 AWS 리전을 식별한다. 이 리전은 일반적으로 가장 가까운 리전이지만 어떤 리전이든 될 수 있다. 
`아시아 태평양(서울)` 리전을 사용할 경우 아래와 같이 입력하면 된다.
``` bash
Default region name [None]: ap-northeast-2
```

##### 3. 출력 형식
다음 목록에 있는 값 중 하나일 수 있다
- json
- yaml
- text
- table

`json` 출력 형식을 사용할 경우 아래와 같이 입력해주면 된다.

``` bash
Default output format [None]: json
```
:bulb: 출력 형식을 지정하지 않으면 json이 기본값으로 사용됨
<br>

여기까지 설정을 완료하면 `CLI 구성파일` 및 `CLI 자격 증명 파일`이 생성된 것을 확인할 수 있다.
이 두 파일은 `aws configure` 명령을 실행할 때 업데이트되는 파일들 중 하나이다 

- CLI 구성파일 : Windows의 경우 `C:\Users\USERNAME\.aws\config`에 위치
    ```
    // 파일 내용 예시
    [default]
    region = ap-northeast-2
    output = json
    ```
- CLI 자격 증명 파일 : Windows의 경우 `C:\Users\USERNAME\.aws\credentials`에 위치
    ```
    // 파일 내용 예시
    [default]
    aws_access_key_id = AKIAIOSFODNN7EXAMPLE
    aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    ```
:bulb:  AWS CLI에서 위에서 입력한 정보를 `default` 프로파일에 저장한다.(`default` 프로파일은 사용할 프로파일을 `--profile` 옵션을 주어 따로 지정하지 않고 AWS CLI 명령어를 실행할 때 사용되는 프로파일이다)

--- 
## 참고 자료

### 구성 설정 및 우선 순위
AWS CLI는 여러 자격 증명 공급자를 사용하여 AWS 자격 증명을 찾습니다. 각 자격 증명 공급자는 시스템 또는 사용자 환경 변수, 로컬 AWS 구성 파일 또는 명령줄에서 파라미터로 명시적으로 선언된 위치 등 다양한 장소에서 자격 증명을 찾습니다. AWS CLI는 다음 순서로 공급자를 호출하고 사용할 자격 증명 세트를 찾은 경우 중지하여 자격 증명 및 구성 설정을 찾습니다.
명령줄 옵션 – 명령줄의 파라미터로 --region, --output 및 --profile을 지정할 수 있습니다.

1. 환경 변수
2. CLI 자격 증명 파일
3. CLI 구성 파일
4. 컨테이너 자격 증명
5. 인스턴스 프로필 자격 증명
<br>

### 설치 경로 찾기
`where` 명령어는 시스템 PATH에서 지정된 프로그램을 찾은 위치를 표시
``` bash
where aws
```
<br>

---
### :bookmark_tabs: 참조(references)
- [https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-windows.html](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-windows.html)
- [https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html)