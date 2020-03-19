# AWS 사용 경험

## DB
### DynamoDB
#### Amazon DynamoDB란
- 빠르고 유연한 비관계형 데이터베이스

##### :bulb: NoSQL
- 가용성과 확장성이 높고 고성능에 최적화된 비관계형 데이터베이스 시스템
- 관계형 모델 대신 키-값 페어나 문서 스토리지 같은 대안적 모델을 데이터 관리에 사용

##### :bulb: RDBMS vs Amazon DynamoDB
| 특성 | RDBMS | Amazon DynamoDB |
|--|--|--|
| 워크로드 | - 데이터 웨어하우징<br>- OLAP(Online Analytical Processing) | **웹 규모의 애플리케이션**<br>- 소셜 네트워크<br>- 게이밍<br>- 미디어 공유<br>- IoT(사물 인터넷) 등 
| 데이터 모델 | - 데이터가 테이블, 행 및 열로 정규화되는 잘 정의된 스키마가 필요<br>- 테이블, 행, 인덱스 및 기타 데이터베이스 간의 모든 관계 정의 필요| - **스키마가 없음**<br>- 즉, 테이블을 생성할 때 기본 키 외에는 속성이나 데이터 형식을 정의할 필요가 없음|
| 데이터 구조 |  - 테이블에는 데이터의 **행**이 포함됨<br> - 행은 **열**로 구성됨 | - 테이블에는 **항목**이 포함됨<br> - 항목은 **속성**으로 구성됨 |
| 데이터베이스 액세스 도구 |  - 명령줄 인터페이스(CLI)를 제공하므로 특별 SQL 문을 입력하고 결과를 즉시 확인 | - 대부분의 경우에는 **애플리케이션 코드**를 작성.<br>- 그러나 **AWS Management 콘솔** 또는 **AWS CLI**(AWS Command Line Interface)를 사용하여 DynamoDB에 특별 요청을 보내고 결과를 볼 수도 있다. |
| 데이터베이스에 연결 | - 애플리케이션은 데이터베이스와의 네트워크 연결을 구축하고 유지합니다.<br> - 애플리케이션은 종료될 때 연결을 끊습니다. | - DynamoDB는 **웹 서비스**이며, 이와 상호 작용은 상태 비저장입니다.<br>- 애플리케이션은 지속적인 네트워크 연결을 유지할 필요가 없습니다.<br>- 그 대신 DynamoDB와의 상호 작용은 **HTTP(S)** 요청 및 응답을 사용하여 이루어집니다. |
| 데이터 읽기 | - `SELECT` (with `WHERE`) |- `GetItem` : 단일 항목을 가져옴<br>- `Query` : 특정 파티션 키가 있는 모든 항목을 가져옴<br>- `Scan` : 지정한 테이블의 모든 항목을 가져옴 |
| 데이터 수정 | - `UPDATE` (with `SET`, `WHERE`) |- `UpdateItem`
| 데이터 삭제 | - `DELETE` (with `SET`, `WHERE`) |- `DeleteItem`


#### 개념 확인 필요 사항
- 기본 키
    - 단일 속성 파티션 키
    - 복합 파티션-정렬 키
        - 파티션 키 요소
        - 정렬 키 요소
- 쿼리
    - 글로벌 보조 인덱스
    - 로컬 보조 인덱스

#### 참조
- [https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/Introduction.html](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/Introduction.html)
## AWS 용어정리
- 완전관리형 클라우드 서비스
    - AWS API를 통해 엑세스 하는 서비스