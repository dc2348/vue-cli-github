# AWS Storage Services Overview 한글 번역

# AWS 스토리지 서비스 개요

##### August 2019

<br>
<br>

![aws](/posts/images/aws/aws-logo.png)

<br>
<br>

# Notices

이 문서는 정보 제공 목적으로만 제공된다. 예고 없이 변경될 수 있는 본 문서의 발행일 현재 AWS의 현재 제품 오퍼링 및 프랙티스를 나타낸다. 고객은 명시적이든 암시적이든 어떤 종류의 보증 없이 "있는 그대로" 제공되는 AWS의 제품이나 서비스의 사용과 이 문서의 정보에 대한 자체적인 독립적인 평가를 할 책임이 있다. 이 문서는 AWS, 계열사, 공급업체 또는 면허소지자의 보증, 진술, 계약약정, 조건 또는 보장을 작성하지 않는다. 고객에 대한 AWS의 책임과 책임은 AWS 계약에 의해 관리되며, 본 문서는 AWS와 고객 간의 계약의 일부도, 수정도 하지 않는다.

<br>

# Abstract

Amazon Web Services(AWS)는 유연하고 비용 효율적이며 사용하기 쉬운 클라우드 컴퓨팅 플랫폼이다. 이 백서는 설계자와 개발자가 AWS Cloud에서 사용할 수 있는 다양한 스토리지 서비스와 기능을 이해하는 데 도움이 되도록 설계되었다. 각 스토리지 서비스 또는 기능에 대한 개요를 제공하고 사용 패턴, 성능, 내구성 및 가용성, 확장성 및 탄력성, 보안, 인터페이스 및 비용 모델에 대해 설명하며,

<br>

# Introduction

AWS(Amazon Web Services)는 높은 내구성과 가용성으로 저렴한 데이터 스토리지를 제공한다. AWS는 백업, 아카이빙 및 재해 복구 사용 사례를 위한 스토리지 옵션을 제공하고 블록, 파일 및 개체 저장소를 제공한다. 이 백서에서는 다음과 같은 AWS 클라우드 스토리지 서비스 및 기능을 검토한다.

|-|서비스 명|설명|
|------|---|---|
|![aws](/posts/images/aws/aws-2020-03-18-01.jpg)|Amazon Simple Storage Service (Amazon S3)|클라우드에서 확장 가능하고 내구성이 뛰어난 객체 스토리지를 제공하는 서비스.|
|![aws](/posts/images/aws/aws-2020-03-18-02.jpg)|Amazon Glacier|클라우드에서 저비용 고내구성 아카이브 스토리지를 제공하는 서비스.|
|![aws](/posts/images/aws/aws-2020-03-18-03.jpg)|Amazon Elastic File System (Amazon EFS)|Amazon EC2 인스턴스에 확장 가능한 네트워크 파일 스토리지를 제공하는 서비스.|
|![aws](/posts/images/aws/aws-2020-03-18-04.jpg)|Amazon Elastic Block Store (Amazon EBS)|Amazon EC2 인스턴스에 블록 스토리지 볼륨을 제공하는 서비스.|
|![aws](/posts/images/aws/aws-2020-03-18-05.jpg)|Amazon EC2 Instance Storage|Amazon EC2 인스턴스의 임시 블록 스토리지 볼륨.|
|![aws](/posts/images/aws/aws-2020-03-18-06.jpg)|AWS Storage Gateway|클라우드 스토리지와 통합되는 사내 스토리지 어플라이언스.|
|![aws](/posts/images/aws/aws-2020-03-18-07.jpg)|AWS Snowball|클라우드와 대량의 데이터를 주고받는 서비스.|
|![aws](/posts/images/aws/aws-2020-03-18-08.jpg)|Amazon CloudFront|글로벌 콘텐츠 전달 네트워크(CDN)를 제공하는 서비스.|

<br>

# Amazon S3
Amazon Simple Storage Service(Amazon S3)는 개발자 및 IT 팀에게 매우 저렴한 비용으로 안전하고 내구성이 뛰어나며 확장성이 뛰어난 객체 스토리지를 제공한다. 간단한 웹 서비스 인터페이스를 통해 언제든지 웹상의 어디에서나 원하는 양의 데이터를 저장하고 검색할 수 있다. 0 ~ 5TB의 데이터를 포함하는 객체를 작성, 읽기 및 삭제할 수 있다. Amazon S3는 확장성이 뛰어나서 많은 개별 클라이언트 또는 애플리케이션 스레드에 의해 데이터에 대한 동시 읽기 또는 쓰기 액세스를 허용한다.

Amazon S3는 다음과 같은 다양한 사용 사례에 맞게 설계된 다양한 스토리지 클래스를 제공한다.

• 자주 액세스하는 데이터의 범용 저장을 위한 Amazon S3 Standard
• Amazon S3 Standard-Inprequency Access(표준-IA), 수명이 길지만 액세스 빈도가 낮은 데이터
• 저렴한 아카이빙 데이터를 위한 Amazon Glacier

## Usage Patterns
아마존 S3의 일반적인 사용 패턴은 네 가지가 있다.

첫째, 아마존 S3는 정적 웹 콘텐츠와 미디어를 저장하고 배포하는 데 사용된다. 이 콘텐츠는 아마존 S3의 각 개체는 고유한 HTTP URL을 가지고 있기 때문에 아마존 S3에서 직접 전달될 수 있다. 또는 아마존 S3는 아마존 CloudFront와 같은 컨텐츠 전달 네트워크(CDN)의 오리진 스토어 역할을 할 수 있다. 아마존 S3의 탄력성은 특히 극한 수요 급증에 대처하기 위해 대역폭이 필요한 웹 콘텐츠 호스팅에 적합하다. 또한 스토리지 프로비저닝이 필요하지 않기 때문에 Amazon S3는 비디오 및 사진 공유 사이트와 같이 데이터 집약적이고 사용자가 생성한 콘텐츠를 호스팅하는 빠르게 성장하는 웹 사이트에 적합하다.

둘째, 아마존 S3는 전체 정적 웹사이트를 호스팅하는 데 사용된다. Amazon S3는 JavaScript와 같은 형식으로 정적 HTML 파일, 이미지, 비디오, 클라이언트 측 스크립트를 위한 스토리지 등 저렴하고 가용성이 뛰어나며 확장성이 뛰어난 솔루션을 제공한다.

셋째, 아마존 S3는 금융 거래 분석, 클릭스트림 분석, 미디어 트랜스코딩 등의 연산 및 대규모 분석을 위한 데이터 저장소로 사용된다. Amazon S3의 수평적 확장성 때문에 단일 연결에 제약받지 않고 여러 컴퓨팅 노드에서 동시에 데이터에 액세스할 수 있다.

마지막으로 Amazon S3는 중요 데이터의 백업 및 아카이빙을 위한 내구성이 뛰어나고 확장 가능하며 안전한 솔루션으로 자주 사용된다. Amazon S3에 저장된 데이터에 대한 라이프사이클 관리 규칙을 사용하여 콜드 데이터를 Amazon Glacier로 쉽게 이동할 수 있다. 또한 Amazon S3 지역 간 복제를 사용하여 서로 다른 AWS 지역의 S3 버킷 간에 개체를 비동기적으로 자동으로 복사하여 비즈니스 연속성을 위한 재해 복구 솔루션을 제공할 수 있다.

아마존 S3는 모든 저장 상황에 맞지 않는다. 다음 표에는 다른 AWS 스토리지 옵션을 고려해야 하는 스토리지 요구 사항이 나와 있다.

|스토리지 니즈|해결책|AWS 서비스|
|------|---|---|
|파일 시스템|Amazon S3는 평판 네임스페이스를 사용하며 독립형 POSIX 호환 파일 시스템으로 사용하기 위한 것이 아니다. 대신 파일 시스템으로 Amazon EFS를 사용하는 것을 고려해야한다.|Amazon EFS|
|조회가 포함된 구조화된 데이터|아마존 S3는 특정 개체를 검색하는 쿼리 기능을 제공하지 않는다. 당신이 Amazon S3를 사용할 때 당신은 당신이 서비스로부터 검색할 파일의 정확한 버킷 이름과 키를 알아야 한다. 아마존 S3는 그 자체로는 데이터베이스나 검색 엔진으로 사용할 수 없다. 대신 Amazon S3를 Amazon DynamoDB, Amazon CloudSearch 또는 Amazon RDS(Amazon Relational Database Service)와 페어링하여 Amazon S3 버킷 및 개체에 대한 메타데이터를 인덱싱하고 쿼리할 수 있다.|Amazon DynamoDB <br> Amazon RDS <br> Amazon CloudSearch|
|빠르게 변화하는 데이터|매우 자주 업데이트해야 하는 데이터는 Amazon EBS 볼륨, Amazon RDS, Amazon DynamoDB, Amazon EFS 또는 Amazon EC2에서 실행되는 관계형 데이터베이스와 같은 읽기 및 쓰기 지연 시간을 고려하는 스토리지 솔루션에 의해 더 잘 제공될 수 있다.|Amazon EBS <br> Amazon EFS <br> Amazon DynamoDB <br> Amazon RDS|
|아카이브 데이터|긴 RTO(복구 시간 목표)로 간헐적으로 읽기 액세스하는 암호화된 아카이브 스토리지를 필요로 하는 데이터를 Amazon Glacier에 보다 비용 효율적으로 저장할 수 있다.|Amazon Glacier|
|동적 웹 사이트 호스팅|비록 아마존 S3는 정적 콘텐츠 웹 사이트에 이상적이지만, 데이터베이스 상호 작용이나 서버측 스크립팅을 사용하는 동적 웹 사이트는 Amazon EC2 또는 Amazon EFS에서 호스팅되어야 한다.|Amazon EC2 <br> Amazon EFS|

## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model
<br>

# Amazon Glacier
## Usage Patterns
## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model
<br>

# Amazon EFS
Amazon Elastic File 시스템(Amazon EFS)은 EC2 인스턴스에 대한 서비스로서 단순하고 확장 가능하며 탄력적이며 높은 가용성과 내구성이 있는 네트워크 파일 시스템을 제공한다. 엔터프라이즈 애플리케이션을 AWS로 마이그레이션하거나 새로운 애플리케이션을 구축할 수 있도록 하는 네트워크 파일 시스템 버전 4(NFSv4)와 4.1(NFSv4.1)을 지원한다. 우리는 확장성과 병렬성을 포함한 최신 버전에서 발견되는 많은 성능 이점을 활용하기 위해 NFSv4.1을 실행하는 것을 권장한다. 간단한 웹 서비스 인터페이스를 통해 쉽고 빠르게 파일 시스템을 생성하고 구성할 수 있다. 스토리지를 미리 프로비저닝할 필요도 없고 최소한의 수수료나 설치 비용도 없다.
Amazon EFS는 페타바이트까지 확장할 수 있는 네트워크 파일 시스템을 제공하도록 설계되었으며, 이를 통해 EC2 인스턴스에서 지역 내의 데이터까지 대규모로 병렬로 액세스할 수 있다. 또한 한 지역의 여러 가용성 영역에 걸쳐 데이터와 메타데이터를 저장하기 때문에 가용성이 높고 내구성이 높다.

Amazon EFS를 이해하려면 EC2 인스턴스가 EFS 파일 시스템에 액세스할 수 있도록 하는 여러 구성 요소를 검토하는 것이 가장 좋다. AWS 영역 내에 하나 이상의 EFS 파일 시스템을 생성할 수 있다. 각 파일 시스템은 가용성 영역별로 생성되는 마운트 대상을 통해 EC2 인스턴스에 의해 액세스된다. Amazon Virtual Private Cloud를 사용하여 생성한 VPC에서 가용성 영역당 마운트 대상을 하나씩 생성하십시오. Amazon EFS와 EC2 인스턴스 간의 트래픽 흐름은 EC2 인스턴스 및 EFS 마운트 대상과 관련된 보안 그룹을 사용하여 제어된다.
EFS 파일 시스템 개체(파일 및 디렉토리)에 대한 액세스는 사용자 및 그룹 ID에 기반한 표준 유닉스 스타일 읽기/쓰기/실행 권한을 사용하여 제어된다. EFS의 작동 방법에 대한 자세한 내용은 Amazon EFS 사용 설명서를 참조하십시오.

## Usage Patterns
Amazon EFS는 여러 EC2 인스턴스의 데이터에 동시에 액세스하고 초당 상당한 수준의 총 처리량과 입/출력 작업(IOPS)을 요구하는 다중 스레드 애플리케이션 및 애플리케이션의 요구를 충족하도록 설계되었다. 분산 설계로 높은 수준의 가용성, 내구성, 확장성을 실현해 각 파일 작업에 대한 지연 시간 오버헤드가 작다. 이러한 작업당 오버헤드 때문에, 오버헤드가 더 많은 양의 데이터에 대해 상각되기 때문에 일반적으로 평균 입출력(I/O) 크기가 증가함에 따라 전반적인 처리량이 증가한다. 따라서 Amazon EFS는 고성능과 다중 클라이언트 액세스가 모두 필요한 대용량 파일로 구성된 데이터셋을 확장하는 데 이상적이다.

Amazon EFS는 고도로 병렬화된 워크로드를 지원하며 빅데이터 및 분석, 미디어 처리, 콘텐츠 관리, 웹 서비스 및 홈 디렉토리의 성능 요구사항을 충족하도록 설계되어 있다.

Amazon EFS는 모든 저장 상황에 적합하지 않다. 다음 표에는 다른 AWS 스토리지 옵션을 고려해야 하는 스토리지 요구 사항이 나와 있다.

## Performance

|스토리지 니즈|해결책|AWS 서비스|
|------|---|---|
|아카이브 데이터|긴 RTO(복구 시간 목표)로 간헐적으로 읽기 액세스하는 암호화된 아카이브 스토리지를 필요로 하는 데이터를 Amazon Glacier에 보다 비용 효율적으로 저장할 수 있다.|Amazon Glacier|
|관계형 데이터베이스 스토리지|대부분의 경우 관계형 데이터베이스는 단일 노드(EC2 인스턴스 등)에 의해 마운트, 액세스 및 잠금되는 스토리지를 필요로 한다. AWS에서 관계형 데이터베이스를 실행할 때는 Amazon RDS 또는 Amazon EC2를 Amazon EBS PIOPS 볼륨과 함께 활용하는 것을 검토하십시오.|Amazon RDS<br>Amazon EC2<br>Amazon EBS|
|임시 스토리지|스크래치 디스크, 버퍼, 대기열 및 캐시와 같은 요구에 대해 로컬 인스턴스 저장소 볼륨을 사용하는 것을 고려하십시오.|Amazon EC2 Local<br>Instance Store|


## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model

<br>

# Amazon EBS
## Usage Patterns
## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model

<br>

# Amazon EC2 Instance Storage
## Usage Patterns
## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model

<br>

# AWS Storage Gateway
AWS 스토리지 게이트웨이는 사내 소프트웨어 어플라이언스와 클라우드 기반 스토리지를 연결하여 조직의 사내 IT 환경과 AWS 스토리지 인프라 간에 원활하고 안전한 스토리지 통합을 제공한다. 이 서비스를 통해 AWS Cloud에 데이터를 안전하게 저장하여 확장 가능하고 비용 효율적인 스토리지를 구축할 수 있다. AWS Storage Gateway는 기존 애플리케이션과 함께 작동하는 업계 표준 스토리지 프로토콜을 지원한다. Amazon S3 또는 Amazon Glacier에서 암호화된 모든 데이터를 안전하게 저장하면서 자주 액세스하는 데이터를 사내에서 유지함으로써 대기 시간이 짧은 성능을 제공한다. 재해 복구 시나리오의 경우 AWS 스토리지 게이트웨이는 Amazon EC2와 함께 전체 프로덕션 환경을 미러링하는 클라우드 호스팅 솔루션 역할을 할 수 있다.

AWS Storage Gateway 소프트웨어 어플라이언스는 데이터 센터의 호스트에 설치하는 VM(가상 시스템) 이미지로 다운로드하거나 EC2 인스턴스로 다운로드할 수 있다. 게이트웨이를 설치하고 AWS 활성화 프로세스를 통해 AWS 계정과 연결한 후에는 AWS 관리 콘솔을 사용하여 게이트웨이 캐시 볼륨, 게이트웨이 저장소 볼륨 또는 VTL(게이트웨이 가상 테이프 라이브러리)을 생성할 수 있으며, 각 볼륨은 사내 응용 프로그램에서 iSCSI 장치로 마운트할 수 있다.

게이트웨이 연결 볼륨을 사용하면 Amazon S3를 사용하여 기본 데이터를 보관할 수 있으며, 자주 액세스하는 데이터를 위해 일부 데이터를 캐시에 로컬로 보관할 수 있다. 게이트웨이 연결 볼륨은 사내 스토리지 인프라를 확장할 필요성을 최소화하는 동시에 애플리케이션에서 자주 액세스하는 데이터에 대한 낮은 지연 시간을 제공하십시오. 스토리지 볼륨을 최대 32TiB까지 생성하여 사내 애플리케이션 서버에서 iSCSI 장치로 마운트할 수 있다. 게이트웨이 캐시된 볼륨에 대해 구성된 각 게이트웨이는 최대 20개의 볼륨과 150TiB의 총 볼륨 스토리지를 지원할 수 있다. 이러한 볼륨에 쓰여진 데이터는 Amazon S3에 저장되며, 최근에 작성되고 최근에 읽은 데이터의 캐시만 사내 스토리지 하드웨어에 로컬로 저장된다.

게이트웨이 저장 볼륨은 기본 데이터를 로컬에 저장하면서 비동기식으로 AWS에 백업하십시오. 이러한 볼륨은 사내 애플리케이션에 전체 데이터셋에 대한 낮은 지연 시간 액세스를 제공하는 동시에 지속 가능한 오프사이트 백업을 제공하십시오. 스토리지 볼륨을 최대 1TiB까지 생성하여 사내 애플리케이션 서버에서 iSCSI 장치로 마운트할 수 있다. 게이트웨이 저장 볼륨에 대해 구성된 각 게이트웨이는 최대 12개의 볼륨 및 12TiB의 총 볼륨 스토리지를 지원할 수 있다. 게이트웨이 저장 볼륨에 기록된 데이터는 사내 스토리지 하드웨어에 저장되며, Amazon EBS 스냅샷의 형태로 Amazon S3에 비동기식으로 백업된다.

게이트웨이-VTL을 사용하면 가상 미디어 체인저 및 가상 테이프 드라이브로 구성된 iSCSI 기반 가상 테이프 라이브러리를 사용하여 기존 백업 애플리케이션을 표시하여 오프라인 데이터 아카이빙을 수행할 수 있다. AWS Management Console을 사용하여 VTL에 가상 테이프를 생성할 수 있으며, 각 가상 테이프를 100 GiB에서 2.5 TiB로 사이징할 수 있다. VTL은 최대 150TiB의 총 용량으로 최대 1,500개의 가상 테이프를 저장할 수 있다. 가상 테이프가 생성되면 백업 응용 프로그램이 표준 미디어 인벤토리 절차를 사용하여 이를 검색할 수 있다. 일단 만들어진 테이프는 즉시 접속이 가능하며 아마존 S3에 저장된다.

자주 액세스해야 하는 가상 테이프는 VTL에 저장해야 한다. 자주 검색할 필요가 없는 데이터는 Amazon Glacier에 저장되어 있는 VTS(가상 테이프 쉘프)에 아카이브되어 스토리지 비용을 더욱 절감할 수 있다.

## Usage Patterns
조직은 AWS 스토리지 게이트웨이를 사용하여 여러 사용 사례를 지원하고 있다. 이러한 사용 사례에는 기업 파일 공유가 포함되며, 기존 사내 백업 애플리케이션이 Amazon S3, 재해 복구 및 클라우드 기반 계산 리소스에 데이터를 미러링한 후 나중에 Amazon Glacier에 아카이빙할 수 있다.

## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model
<br>

# AWS Snowball
## Usage Patterns
## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model

<br>

# Amazon CloudFront
Amazon CloudFront는 컨텐츠 제공 웹 서비스로, 웹 사이트의 동적, 정적 및 스트리밍 콘텐츠를 전세계적인 에지 로케이션 네트워크에서 이용할 수 있도록 하여 배포 속도를 높인다. 사용자가 Amazon CloudFront와 함께 서비스하고 있는 콘텐츠를 요청하면, 사용자는 가장 낮은 지연 시간(시간 지연)을 제공하는 에지 로케이션으로 라우팅되므로, 사용자가 훨씬 더 멀리 있는 데이터 센터에서 컨텐츠에 액세스했을 때보다 더 나은 성능으로 콘텐츠가 전달된다. 콘텐츠가 이미 가장 짧은 대기 시간으로 에지 로케이션에 있는 경우 Amazon CloudFront는 즉시 컨텐츠를 전송한다. 콘텐츠가 현재 해당 에지 위치에 있지 않은 경우 Amazon CloudFront는 콘텐츠의 최종 버전 소스로 식별한 Amazon S3 버킷 또는 HTTP 서버(예: 웹 서버)에서 컨텐츠를 검색한다. Amazon CloudFront는 사용자가 지정한 기간 동안 에지 로케이션에서 콘텐츠를 캐시한다.

Amazon CloudFront는 HTTP를 통해 제공될 수 있는 모든 파일을 지원한다. 이러한 파일에는 HTML 또는 PHP 페이지와 같은 동적 웹 페이지와 웹 응용 프로그램의 일부인 웹 이미지, 오디오, 비디오, 미디어 파일 또는 소프트웨어 다운로드와 같은 인기 있는 정적 파일이 포함된다. 주문형 미디어 파일의 경우 RTMP(Real-Time Messaging Protocol) 전송을 사용하여 컨텐츠를 스트리밍하도록 선택할 수도 있다. Amazon CloudFront는 또한 HTTP를 통한 라이브 미디어 전달을 지원한다.

Amazon CloudFront는 Amazon S3, Amazon EC2, Elastic Load Balancing, Amazon Route 53과 같은 다른 Amazon 웹 서비스와 작동하도록 최적화되었다.

Amazon CloudFront는 또한 파일의 원본, 최종 버전을 저장하는 비 AWS 원본 서버와 원활하게 작동한다.

## Usage Patterns
CloudFront는 인기 있는 웹 사이트 이미지, 비디오, 미디어 파일 또는 소프트웨어 다운로드와 같이 엣지 전달에서 이익을 얻는 자주 액세스하는 정적 콘텐츠의 배포에 이상적이다. Amazon CloudFront는 또한 HTTP를 통해 동적 웹 애플리케이션을 제공하는 데 사용될 수 있다. 이러한 애플리케이션은 정적 콘텐츠, 동적 콘텐츠 또는 두 가지 요소가 혼합된 전체 사이트를 포함할 수 있다. Amazon CloudFront는 오디오 및 비디오 파일을 웹 브라우저와 모바일 장치로 스트리밍하는 데에도 일반적으로 사용된다. 최종 사용자 사용 패턴을 더 잘 이해하려면 Amazon CloudFront 보고서를 사용하십시오.

만료되기 전에 Amazon CloudFront edge-server 캐시에서 개체를 제거해야 하는 경우, 개체를 무효화하거나 개체 버전 관리를 사용하여 다른 이름을 가진 개체의 다른 버전을 서비스할 수 있다.  또한, 엣지에서 재사용될 가능성이 없는 데이터에 대한 원본 가져오기 비용은 피하면서, 원본 서버에서 자주 액세스하지 않는 데이터를 직접 제공하는 것이 더 나을 수 있지만, 아마존 S3에 대한 원본 페치는 무료다.

## Performance
## Durability and Availability
## Scalability and Elasticity
## Security
## Interfaces
## Cost Model

<br>

# Conclusion

<br>

# Contributors

<br>

---
### :bookmark_tabs: 참조(references)
- [https://d1.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf](https://d1.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf)
