# Serverless Architectures with AWS Lambda 한글 번역

# AWS Lambda를 사용한 서버리스 아키텍처
## 개요 및 모범 사례

##### November 2017

![aws](/posts/images/aws/aws-logo.png)

## Notices
이 문서는 정보 제공 목적으로만 제공된다. 예고 없이 변경될 수 있는 본 문서의 발행일 현재 AWS의 현재 제품 오퍼링 및 프랙티스를 나타낸다. 고객은 명시적이든 암시적이든 어떤 종류의 보증 없이 "있는 그대로" 제공되는 AWS의 제품이나 서비스의 사용과 이 문서의 정보에 대한 자체적인 독립적인 평가를 할 책임이 있다. 이 문서는 AWS, 계열사, 공급업체 또는 면허소지자의 보증, 진술, 계약약정, 조건 또는 보장을 작성하지 않는다. 고객에 대한 AWS의 책임과 책임은 AWS 계약에 의해 관리되며, 본 문서는 AWS와 고객 간의 계약의 일부도, 수정도 하지 않는다.


## Abstract
AWS Lambda는 2014년 AWS re:Invent에서 출시된 이후 가장 빠르게 성장하고 있는 AWS 서비스 중 하나이다. 그것의 도착과 함께, 새로운 애플리케이션 아키텍처 패러다임이 만들어 졌다. AWS는 이제 서버를 관리할 필요 없이 전체 애플리케이션 스택을 구축할 수 있는 다양한 서비스를 제공한다. 웹 또는 모바일 백엔드, 실시간 데이터 처리, 챗봇 및 가상 도우미, IoT(Internet of Things) 백엔드 등의 사용 사례를 모두 완벽하게 서버 없이 사용할 수 있다. 서버 없는 애플리케이션의 논리 계층의 경우 AWS Lambda를 사용하여 비즈니스 로직을 실행할 수 있다. 개발자들과 조직들은 AWS Lambda가 기존의 서버 기반 환경에서 애플리케이션을 배포할 때 가능한 것보다 훨씬 더 빠른 개발 속도와 실험을 가능하게 한다는 것을 발견하고 있다.

이 백서는 AWS Lambda에 대한 광범위한 개요, 그 특징, 그리고 AWS에 자체적인 서버 없는 애플리케이션을 구축하기 위한 다양한 권장 사항 및 모범 사례를 제공하기 위한 것이다.

## Introduction - What Is Serverless?(소개 - 서버리스란?)
서버리스(serverless)는 아주 자주 서버리스 응용프로그램을 가리킨다. 서버리스 애플리케이션은 서버를 프로비저닝하거나 관리할 필요가 없는 애플리케이션이다. OS(운영 체제) 액세스 제어, OS 패치 적용, 프로비저닝, 올바른 크기 조정, 확장, 가용성 등의 책임 대신 핵심 제품 및 비즈니스 논리에 집중할 수 있다. 서버리스 플랫폼에서 애플리케이션을 구축함으로써, 플랫폼이 이러한 책임을 대신 관리한다.

서비스나 플랫폼을 서버리스로 간주하려면 다음과 같은 기능을 제공해야 한다.

- 서버 관리 없음 – 서버를 프로비저닝하거나 유지할 필요가 없음 설치, 유지 관리 또는 관리할 소프트웨어나 런타임이 없다.
- 유연한 확장 – 개별 서버의 단위가 아닌 소비 단위(예: 처리량, 메모리)를 전환하여 자동으로 또는 용량을 조정할 수 있다.
- 고가용성(HA) – 서버리스 애플리케이션은 가용성과 내결함성이 내장되어 있음 애플리케이션을 실행하는 서비스는 기본적으로 이러한 기능을 제공하므로 이러한 기능을 설계할 필요가 없다.
- 유휴 용량 없음 – 유휴 용량에 대해 비용을 지불하지 않아도 됨 컴퓨팅 및 스토리지와 같은 것을 위해 용량을 사전 프로비저닝하거나 초과 프로비저닝할 필요가 없다. 당신의 코드가 실행되고 있지 않을 때는 요금이 부과되지 않는다.

AWS Cloud는 서버리스 애플리케이션의 구성요소가 될 수 있는 다양한 서비스를 제공한다. 여기에는 다음을 위한 기능이 포함된다.

- Compute – AWS Lambda
- APIs – Amazon API Gateway
- Storage – Amazon Simple Storage Service (Amazon S3)
- Databases –Amazon DynamoDB
- Interprocess messaging – Amazon Simple Notification Service (Amazon SNS) and Amazon Simple Queue Service (Amazon SQS)
- Orchestration – AWS Step Functions and Amazon CloudWatch Events
- Analytics – Amazon Kinesis

이 백서는 당신의 코드가 실행되는 서버리스 애플리케이션의 컴퓨팅 계층인 AWS Lambda, 그리고 Lambda로 서버리스 애플리케이션을 구축하고 유지보수할 때 Best Practice를 가능하게 하는 AWS 개발자 도구와 서비스에 초점을 맞출 것이다.

## AWS Lambda—the Basics(AWS 람다-기본 원리)
Lambda는 함수를 기반으로 서버 없이 프로비저닝할 수 있는 대규모 컴퓨팅 제품이다. 그것은 당신의 애플리케이션에 클라우드 논리 계층을 제공한다. 람다 함수는 AWS나 서드 파티 서비스 지원에서 발생하는 다양한 이벤트에 의해 트리거될 수 있다. 그것들은 당신이 반응적이고 이벤트 중심적인 시스템을 만들 수 있게 해준다. 대응해야 할 동시 이벤트가 여러 개 있을 때, 람다는 단순히 함수의 복사본을 병렬로 더 많이 실행한다. 람다 함수는 작업 부하 크기에 따라 정확하게 확장되며, 개별 요청에 따라 감소한다. 따라서 유휴 서버나 컨테이너를 보유할 가능성은 극히 낮다. Lambda 함수를 사용하는 아키텍처는 낭비되는 용량을 줄이도록 설계되었다.

람다는 서버리스 FaaS(Function-as-a-Service)의 일종으로 설명할 수 있다. FaaS는 이벤트 기반 컴퓨팅 시스템을 구축하기 위한 하나의 접근 방식이다. 그것은 개발와 실행의 단위로서의 함수에 의존한다. 서버리스 FaaS는 프로그래밍 모델에 가상 머신이나 컨테이너가 없고 벤더가 프로비저닝 없는 확장성과 기본 제공 안정성을 제공하는 FaaS의 일종이다.

그림 1은 이벤트 기반 컴퓨팅, FaaS 및 서버리스 FaaS의 관계를 보여준다.

![aws](/posts/images/aws/aws-2020-03-20-01.jpg)

그림 1: 이벤트 기반 컴퓨팅, FaaS 및 서버 없는 FaaS 간의 관계

Lambda를 사용하면 거의 모든 유형의 애플리케이션 또는 백엔드 서비스에 대한 코드를 실행할 수 있다. Lambda는 당신의 코드를 실행하고 고가용성(HA)으로 확장한다.

생성하는 각 람다 함수는 실행할 코드, 코드의 실행 방법을 정의하는 구성, 그리고 선택적으로 이벤트를 감지하고 발생 시 함수를 호출하는 하나 이상의 이벤트 소스를 포함한다. 이 요소들은 다음 절에서 더 자세히 다룬다.

이벤트 소스의 한 가지 예로 API Gateway는, API Gateway로 생성된 API 메서드가 HTTPS 요청을 수신할 때마다 Lambda 함수를 호출할 수 있다. 또 다른 예로는, SNS 주제에 새로운 메시지가 게시될 때마다 람다 함수를 호출할 수 있는 능력을 가진 Amazon SNS가 있다. 많은 이벤트 소스 옵션이 Lambda 함수를 트리거할 수 있다. 전체 목록은 [이 문서](를 참조하십시오. Lambda는 Lambda 함수를 직접 호출하는 함수이 포함된 RESTful 서비스 API도 제공함. 다른 이벤트 소스를 구성하지 않고 이 API를 사용하여 코드를 직접 실행할 수 있다.
이벤트 소스의 한 가지 예로 API Gateway는, API Gateway로 생성된 API 메서드가 HTTPS 요청을 수신할 때마다 Lambda 함수를 호출할 수 있다. 또 다른 예로는, SNS 주제에 새로운 메시지가 게시될 때마다 람다 기능을 호출할 수 있는 능력을 가진 Amazon SNS가 있다. 많은 이벤트 소스 옵션이 Lambda 함수를 트리거할 수 있다. 전체 목록은 [이 문서](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-services.html)를 참조하십시오. Lambda는 Lambda 함수를 [직접 호출하는 기능](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/API_Invoke.html)이 포함된 RESTful 서비스 API도 제공함. 다른 이벤트 소스를 구성하지 않고 이 API를 사용하여 코드를 직접 실행할 수 있다.

이벤트 소스를 Lambda 함수와 통합하거나, 이벤트를 감지하여 자신의 함수에 전달하는 인프라를 관리하거나, 전달되는 이벤트 수에 맞게 Lambda 함수를 확장하는 작업을 관리할 필요가 없다. 응용 프로그램 논리에 초점을 맞추고 논리 실행을 유발하는 이벤트 소스를 구성할 수 있다.


Lambda 기능은 그림 2와 같은 (단순화된) 아키텍처 내에서 실행된다.

![aws](/posts/images/aws/aws-2020-03-20-02.jpg)

그림 2: 실행 중인 Lambda 함수의 단순화된 아키텍처

일단 당신이 당신의 함수에 대한 이벤트 소스를 구성하면, 당신의 코드는 이벤트가 발생할 때 호출된다. 당신의 코드는 어떠한 비즈니스 논리도 실행할 수 있고, 외부 웹 서비스에도 접속할 수 있고, 다른 AWS 서비스와 통합될 수 있으며, 당신의 어플리케이션에 필요한 다른 어떤 것도 할 수 있다. Lambda를 사용할 때 선택한 언어에 익숙한 모든 함수과 소프트웨어 설계 원칙이 적용된다. 또한 람다 함수와 이벤트 소스를 통합하여 서버리스 어플리케이션에서 시행되는 내재된 디커플링 때문에 람다 함수를 사용하여 마이크로 서비스를 구축하는 것은 자연스러운 일이다.

서버리스 원칙과 람다에 대한 기본적인 이해로, 당신은 몇 가지 코드를 쓸 준비가 되어 있을 것이다. 다음 리소스는 Lambda를 즉시 시작하는 데 도움이 될 것이다.

- Hello World 튜토리얼: http://docs.aws.amazon.com/lambda/latest/dg/get-started-create- function.html
- 샘플 애플리케이션 구축을 위한 서버리스 워크샵 및 워크스루: https://github.com/awslabs/aws-serverless-workshops

## AWS Lambda—Diving Deeper(AWS 람다-집중 분석)
이 백서의 나머지 부분은 Lambda의 구성 요소와 특징을 이해하는 데 도움이 되며, Lambda를 사용하여 서버리스 애플리케이션을 구축하고 소유하는 다양한 측면에 대한 모범 사례가 뒤따른다.
 
소개에서 설명한 람다의 주요 구성 요소인 함수 코드, 이벤트 소스, 함수 구성을 각각 추가적으로 확장하고 설명하는 것으로 심층 분석을 시작합시다.

### Lambda Function Code(람다 함수 코드)
핵심은 Lambda를 사용하여 코드를 실행하는 것이다. 이것은 람다(Java, Node.js, Python 또는 C#)가 지원하는 언어로 작성한 코드일 수 있으며, 작성한 코드와 함께 업로드한 모든 코드 또는 패키지가 될 수 있다. 함수 코드 패키지의 일부로 런타임 환경 위에서 실행할 수 있는 라이브러리, 아티팩트 또는 컴파일된 기본 바이너리를 자유롭게 가져올 수 있다. 원한다면 AWS Lambda 런타임 환경에서 지원 언어 중 하나에서 해당 코드를 스테이징하고 호출하기만 하면 다른 프로그래밍 언어(PHP, Go, SmallTalk, Ruby 등)로 작성한 코드도 실행할 수 있다(본 [튜토리얼](https://aws.amazon.com/ko/blogs/compute/scripting-languages-for-aws-lambda-running-php-ruby-and-go/) 참조).

Lambda 런타임 환경은 Amazon Linux AMI를 기반으로 하므로(여기서 현재 환경 세부사항 참조), 일치하는 환경 내에서 Lambda 내부에서 실행하려는 구성 요소를 컴파일하고 테스트해야 한다. Lambda 내에서 실행하기 전에 이러한 유형의 테스트를 수행하는 데 도움이 되도록, AWS는 Lambda 함수의 로컬 테스트를 가능하게 하는 AWS SAM Local이라는 도구를 제공한다. 우리는 이 백서의 서버리스 개발 모범 사례 섹션에서 이러한 툴에 대해 논의한다.


#### The Function Code Package(함수 코드 패키지)
함수 코드 패키지에는 코드를 실행할 때 로컬에서 사용할 수 있는 모든 자산이 포함되어 있다. 패키지는 최소한 함수이 호출될 때 Lambda 서비스를 실행할 코드 함수를 포함한다. 그러나 실행 시 코드가 참조할 다른 자산(예: 코드가 가져올 추가 파일, 클래스 및 라이브러리, 실행할 이진 파일 또는 호출 시 코드가 참조할 수 있는 구성 파일)도 포함할 수 있다. 함수 코드 패키지의 최대 크기는 본 출판 당시 50MB의 압축과 250MB의 추출이다. (AWS Lambda 제한의 전체 목록은 이 설명서를 참조하십시오.)

AWS Management Console을 통해 또는 CreateFunction API를 사용하여 Lambda 함수를 생성할 때 패키지를 업로드한 S3 버킷과 개체 키를 참조할 수 있다. 또는 함수를 생성할 때 코드 패키지를 직접 업로드할 수 있다. Lambda는 당신의 코드 패키지를 서비스에 의해 관리되는 S3 버킷에 저장할 것이다. 업데이트된 코드를 기존 Lambda 함수에 게시할 때도 동일한 옵션을 사용할 수 있다(UpdateFunctionCode API를 통해).

이벤트가 발생하면, 당신의 코드 패키지는 S3 버킷에서 다운로드되고, 람다 런타임 환경에 설치되고, 필요에 따라 호출된다. 이것은 Lambda가 관리하는 환경 내에서 당신의 함수를 트리거하는 이벤트의 수에 의해 요구되는 규모에서 온디맨드 방식으로 발생한다.

#### The Handler(핸들러)
Lambda 함수가 호출되면, 코드 실행은 **핸들러**라고 불리는 것에서 시작된다. 핸들러는 사용자가 생성하여 패키지에 포함시킨 특정 코드 메소드(Java, C#) 또는 함수(Node.js, Python)이다. Lambda 함수를 생성할 때 처리기를 지정하십시오. Lambda가 지원하는 각 언어는 함수 핸들러를 패키지 내에서 정의하고 참조할 수 있는 메소드에 대한 고유한 요구사항을 가지고 있다.

다음 링크는 지원되는 각 언어를 시작하는 데 도움이 될 것이다.

|언어|핸들러 정의 예제|
|--|--|
|[Java](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-java.html)|`MyOutput output handlerName(MyEvent event, Context context) {... }`|
|[Node.js](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-nodejs.html)|`exports.handlerName = function(event, context, callback) { ... // callback parameter is optional }`|
|[Python](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-python.html)|`def handler_name(event, context): ... return some_value `|
|[C#](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-csharp.html)|`myOutput HandlerName(MyEvent event, ILambdaContext context) { ... }`|

핸들러가 Lambda 함수 내에서 성공적으로 호출되면 런타임 환경은 사용자가 작성한 코드에 속한다. Lambda 기능은 핸들러에서 시작하는 코드에 따라 적합한 것으로 보이는 로직을 자유롭게 실행할 수 있다. 이것은 당신의 핸들러가 당신이 업로드한 파일과 클래스 내의 다른 메소드와 함수를 호출할 수 있다는 것을 의미한다. 코드는 업로드한 타사 라이브러리를 가져오고 업로드한 기본 바이너리를 설치하고 실행할 수 있다(Amazon Linux에서 실행할 수 있는 한). 또한 다른 AWS 서비스와 상호 작용하거나, 의존하는 웹 서비스 등에 API 요청을 할 수 있다.

#### The Event Object(이벤트 객체)
Lambda 함수가 지원되는 언어 중 하나로 호출되면 핸들러 함수에 제공되는 파라미터 중 하나가 **이벤트 객체**다. 이벤트는 어떤 이벤트 소스를 만들었느냐에 따라 구조와 내용이 다르다. 이벤트 매개 변수의 내용에는 Lambda 함수가 로직를 추진하는 데 필요한 모든 데이터와 메타데이터가 포함된다. 예를 들어, API Gateway에 의해 생성된 이벤트는 API 클라이언트가 만든 HTTPS 요청과 관련된 세부 정보(예: 경로, 쿼리 문자열, 요청 본문)를 포함하지만, 새로운 객체를 만들 때 Amazon S3에서 생성된 이벤트는 버킷과 새 객체에 대한 세부 정보를 포함할 것이다.

#### The Context Object(컨텍스트 객체)
당신의 람다 함수에는 또한 **컨텍스트 객체**가 제공된다. 컨텍스트 객체는 당신의 함수 코드가 람다 실행환경과 상호작용을 할 수 있게 해준다. 컨텍스트 객체의 내용과 구조는 당신의 람다 함수가 사용하고 있는 언어 런타임에 따라 다양하지만, 최소한 다음 내용을 포함할 것이다.

- AWS RequestId – Lambda 함수의 특정 호출 추적에 사용(오류 보고 또는 AWS 지원팀에 문의할 때 중요)
- Remaining time(남은 시간) – 함수 timeout이 발생하기 전까지 남아 있는 시간(밀리초)(Lambda 함수는 이 게시물 기준으로 최대 300초까지 실행될 수 있지만, 더 짧은 timeout 구성할 수 있음).
- Logging(로깅) – 각 언어 런타임은 로그 문을 Amazon CloudWatch 로그로 스트리밍할 수 있는 기능을 제공한다. 컨텍스트 객체에는 로그 보고서를 보낼 CloudWatch Logs 스트림에 대한 정보가 들어 있다. 각 언어 런타임에서 로깅을 처리하는 방법에 대한 자세한 내용은 다음을 참조하십시오.
    - [Java](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/java-logging.html)
    - [Node.js](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/nodejs-logging.html)
    - [Python](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/python-logging.html)
    - [C](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/csharp-logging.html)

#### Writing Code for AWS Lambda—Statelessness and Reuse(AWS Lambda—Statelessness and Reuse를 위한 코드)
Lambda의 코드를 작성할 때 중앙 테넌트를 이해하는 것이 중요하다: 당신의 코드는 상태에 대한 가정을 만들 수 없다. 람다가 새로운 함수 컨테이너를 만들어 처음 호출하는 시기를 완벽하게 관리하기 때문이다. 컨테이너는 여러 가지 이유로 처음으로 호출될 수 있다. 예를 들어, Lambda 함수를 트리거하는 이벤트는 이전에 당신의 함수를 위해 생성된 컨테이너의 수를 넘어 동시에 증가하고, 이벤트는 몇 분 만에 처음으로 Lambda 함수를 트리거하는 등 람다는 실제 수요를 충족시키기 위해 함수 컨테이너를 위아래로 확장하는 역할을 하지만, 당신의 코드는 그에 따라 작동할 수 있어야 한다. Lambda는 이미 이동 중인 특정 호출의 처리를 방해하지 않지만, 당신의 코드는 그 정도의 변동성을 설명할 필요는 없다.

이것은 당신의 코드가 한 호출에서 다음 호출로 상태가 유지될 것이라는 가정을 할 수 없다는 것을 의미한다. 그러나 함수 컨테이너가 생성되어 호출될 때마다 활성 상태를 유지하며 종료되기 최소 몇 분 동안 후속 호출에 사용할 수 있다. 최소한 한 번 이상 활성화되어 호출된 컨테이너에서 후속 호출이 발생할 경우, 우리는 호출이 따뜻한 컨테이너에서 실행되고 있다고 말한다.
함수 코드 패키지를 생성하고 처음으로 호출해야 하는 Lambda 함수에 대한 호출이 발생하면 호출이 콜드 스타트를 경험하고 있다고 우리는 말한다.

![aws](/posts/images/aws/aws-2020-03-20-03.jpg)

그림 3: 온수 기능 컨테이너 및 저온 기능 컨테이너의 호출

당신의 코드가 실행되고 있는 로직에 따라, 당신의 코드가 따뜻한 컨테이너를 어떻게 이용할 수 있는지를 이해하는 것은 람다 안에서 더 빠른 코드 실행을 야기할 수 있다. 결과적으로, 이것은 더 빠른 응답과 더 낮은 비용을 초래한다. 따뜻한 컨테이너를 활용하여 람다 기능 성능을 향상시키는 방법에 대한 자세한 내용과 예는 이 백서의 뒷부분의 모범 사례 섹션을 참조하십시오.

전체적으로 람다가 지원하는 각 언어는 패키지 소스 코드와 최적화를 위한 가능성을 위한 자체 모델을 가지고 있다. 지원되는 각 언어를 시작하려면 [이 페이지](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/gettingstarted-features.html)를 방문하십시오.

### Lambda Function Event Sources(람다 함수 이벤트 소스)
이제 Lambda 함수의 코드에 들어가는 것이 무엇인지 알았으니, 당신의 코드를 호출하는 이벤트 소스, 즉 트리거를 살펴보자. Lambda는 당신의 기능을 직접 호출할 수 있는 Invoke API를 제공하지만, 당신은 그것을 테스트와 운영 목적으로만 사용할 가능성이 높다. 대신, 당신은 당신의 람다 함수를 필요에 따라 당신의 기능을 호출할 AWS 서비스 내에서 발생하는 이벤트 소스와 연관시킬 수 있다. 이벤트 소스를 Lambda 기능과 통합하는 소프트웨어를 작성, 확장 또는 유지할 필요가 없다.


#### Invocation Patterns
Lambda 함수를 호출하는 두 가지 모델이 있다:
- Push Model - 다른 AWS 서비스 내에서 특정 이벤트가 발생할 때마다 Lambda 함수가 호출된다(예: 새 객체가 S3 버킷에 추가됨).
- Pull Model - Lambda는 데이터 소스를 폴링하고 데이터 소스에 도달하는 모든 새 레코드로 기능을 호출하여 단일 함수 호출(예: Amazon Kinesis 또는 Amazon DynamoDB 스트림의 새 레코드)로 새 레코드를 일괄 처리한다.

또한 Lambda 기능은 동기식 또는 비동기식으로 실행될 수 있다. Lambda 함수를 호출할 때 제공되는 InvocationType 매개변수를 사용하여 이 옵션을 선택하십시오. 이 매개변수에는 세 가지 가능한 값이 있다.
- RequestResponse – 동기식으로 실행
- Event – 비동기식으로 실행
- DryRun – 호출자에게 호출이 허용되는지 테스트하되, 함수는 실행하지 마십시오.

다음 표는 더 인기 있는 이벤트 소스 중 일부가 람다 함수와 어떻게 통합될 수 있는지에 대한 세부 정보를 제공한다. 지원되는 이벤트 소스의 전체 목록은 [여기](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-services.html)에서 찾을 수 있다.

#### Push Model Event Sources
##### Amazon S3
##### Amazon API Gateway
|항목|내용|
|--|--|
|호출 모델|Push|
|호출 유형|Event or RequestResponse|
|Description|API Gateway를 사용하여 생성한 API 메서드는 Lambda 함수를 서비스 백엔드로 사용할 수 있다. API 메소드의 통합 타입으로 Lambda를 선택하면, Lambda 함수가 동기적으로 호출된다(Lambda 함수의 응답이 API 응답 역할을 한다).<br>이 통합 유형을 사용하면 API Gateway가 Lambda 함수의 단순한 프록시 역할도 할 수 있다. API Gateway는 스스로 처리나 변환을 수행하지 않으며 요청의 모든 내용을 Lambda에게 전달한다. <br><br> API가 당신의 함수를 이벤트로 비동기적으로 호출하고 빈 응답으로 즉시 돌아오기를 원하는 경우, 당신은 API Gateway를 AWS Service Proxy로 사용하고 Lambda Invoke API와 통합하여 이벤트 호출 제공요청 헤더를 입력하십시오. 이것은 당신의 API 클라이언트가 요청으로부터 어떠한 정보도 필요하지 않고 당신이 가능한 가장 빠른 응답 시간을 원하는 경우에 좋은 선택이다. (이 옵션은 분석을 위해 웹 사이트 또는 앱의 사용자 상호 작용을 서비스 백엔드로 푸시하는 데 유용하다.)|
|예제 사용 사례|웹 서비스 백엔드(웹 애플리케이션, 모바일 앱, 마이크로서비스 아키텍처 등)<br>레거시 서비스 통합(레거시 SOAP 백엔드를 새로운 최신 REST API로 변환하는 Lambda 함수).<br>HTTPS가 애플리케이션 구성 요소 간에 적절한 통합 메커니즘인 다른 모든 사용 사례.|

##### Amazon SNS

##### AWS CloudFormation

##### Amazon CloudWatch Events

##### Amazon Alexa




#### Pull Model Event Sources

##### Amazon DynamoDB
|항목|내용|
|--|--|
|호출 모델|Pull|
|호출 유형|Request/Response|
|Description|Lambda는 DynamoDB 스트림을 초당 여러 번 폴링하고 마지막 배치 이후 스트림에 게시된 업데이트 배치로 Lambda 기능을 호출할 것이다. 각 호출의 배치 크기를 구성할 수 있다.|
|예제 사용 사례|DynamoDB 테이블에서 변경이 발생할 때 트리거해야 하는 애플리케이션 중심 워크플로우(예: 새 사용자 등록, 주문 작성, 친구 요청 수락 등)<br>DynamoDB 테이블을 다른 영역(재해 복구를 위해) 또는 다른 서비스(백업 또는 분석을 위해 S3 버킷으로 로그로 전송)로 복제|

##### Amazon Kinesis Streams


<br>

### Lambda Function Configuration(람다 함수 구성)
#### Function Memory
#### Versions and Aliases
#### IAM Role
#### Lambda Function Permissions
#### Network Configuration
#### Environment Variables
#### Dead Letter Queues
#### Timeout

## Serverless Best Practices(서버리스 모범 사례)
### Serverless Architecture Best Practices(서버리스 아키텍처 모범 사례)
### Serverless Development Best Practices(서버리스 개발 모범 사례)
## Sample Serverless Architectures(서버리스  아키텍처 샘플)

## Conclusion(결론)

## Contributors(기부자)



#### 참조
- [https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/Introduction.html](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/Introduction.html)
## AWS 용어정리
- 완전관리형 클라우드 서비스
    - AWS API를 통해 엑세스 하는 서비스