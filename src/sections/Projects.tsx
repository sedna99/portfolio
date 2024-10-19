import SectionName from "@/components/SectionName";

type ProjectCardProps = {
  name: string;
  date: string;
  subname: string;
  descriptions: string[];
  isLast?: boolean;
};

const projects = [
  {
    name: "CVS Server 유지보수",
    date: "2024.10 - 진행중",
    subname: "CVS, CBN, JPM 서버 유지보수 및 기능개선",
    descriptions: [
      "EKS, Opensearch 등을 사용한 AWS 서비스 버전 관리 및 유지보수",
      "비즈니스 로직 유지보수 및 기능개선"
    ]
  },
  {
    name: "Vultr 클라우드 이전",
    date: "2024.09 - 2024.09",
    subname: "Vultr 클라우드 이전 프로젝트",
    descriptions: ["AWS에서 Vultr로의 모든 서비스 이전 작업"],
  },
  {
    name: "Webslot 연동 프로젝트 관리",
    date: "2024.04 - 2024.09",
    subname: "Webslot 연동 프로젝트",
    descriptions: [
      "Nslot 게임에 타사에서 개발한 Webslot 게임 연동작업 프로젝트 PM역할 진행",
      "전체적인 일정 관리, 타사와의 연동/이슈 사항 정리 및 의사소통 담당",
      "SQL Server Enterprise -> SQL Server Standard로의 DB 이전 작업",
      "AWS 인프라 세팅 및 관리 담당",
    ],
  },
  {
    name: "채널링 정산 서비스 리뉴얼",
    date: "2024.01 - 2024.09",
    subname: "채널링 서비스 정산 관리 프로젝트",
    descriptions: [
      "Java(Spring Boot)를 기반으로 만들어진 백엔드 서버 수정 작업, 기능 추가 작업",
      "Javascript(React.js)로 만들어진 프론트엔드 페이지 기능 변경 작업, 기능 추가 작업",
      "CRA기반의 프로젝트에서 Vite기반의 프로젝트로 전환 및 Typescript 도입",
      "Mysql 데이터베이스 구조 변경 작업 및 Mybatis 쿼리 성능 개선",
      "Jenkins를 통한 CI/CD 구축",
      "Vault를 연동하여 민감한 환경변수들을 안전하게 관리",
    ],
  },
  {
    name: "CMS 이전 및 고도화",
    date: "2023.12 - 2024.09",
    subname: "CMS 고도화",
    descriptions: [
      "Java(Spring Boot), PHP(CI, Laravel)를 기반으로 만들어진 백엔드 서버 Node.js(Nest.js)로 이전 작업",
      "jsp로 만들어진 프론트엔드 페이지를 Typescript, React.js(Next.js)로 리뉴얼 작업",
      "CMS1(PHP), CMS2(JAVA) 여러가지로 파편화 되어있던 데이터베이스를 하나로 합치며, 필요없는 레거시 테이블 삭제 작업 진행",
      "Docker를 사용하여 컨테이너 기반의 서비스로 변경",
      "Jenkins를 활용하여 CI/CD 구축",
      "Vault를 연동하여 민감한 환경변수들을 안전하게 관리하도록 변경",
      "NSlot/NPoker 관리 페이지 리뉴얼 및 고도화",
      "비용 효율화를 위한 crontab, Java scheduler로 동작하던 배치서비스를 Spring Batch로 분리",
    ],
  },
  {
    name: "채널링 서비스 API 서버 개발",
    date: "2023.11 - 2024.09",
    subname: "Nplayshop 채널링 서비스 프로젝트",
    descriptions: [
      "Typescript, Node.js(Nest.js)를 기반으로 한 API 서버 개발",
      "Nplayshop과의 회원 채널링 서비스 개발",
      "실시간 게임 데이터 연동 기능 개발",
    ],
  },
  {
    name: "NPoker & NSlot 게임 서비스 정상화 프로젝트",
    date: "2023.08 - 2023.11",
    subname: "NPoker 서비스",
    descriptions: [
      "모든 AWS 서비스가 백업 없이 삭제되어있는 환경에서 서비스 정상화",
      "AWS의 결제내역을 분석하여 AWS 인프라 역산 및 구성",
      "기존 PHP(CI, Laravel), JAVA(Spring Boot) 기반의 코드 수정 및 유지보수",
      "NSlot 게임 서버 구성에서 사용되어있던 apache서버 분석 및 정상화",
      "CMS, NPLAYSHOP, API, NPASS, NLOBBY, INFRA 각 서버 정상화 및 서버간 연동 정상화",
      "웹 서비스가 여러가지로 파편화 되어있어, 관리 효율화를 위해 Jenkins를 활용한 CI/CD 자동화 도입",
    ],
  },
  {
    name: "Soundwix & Quiz",
    date: "2023.07 - 2023.08",
    subname: "음원 합성, 퀴즈 웹 서비스",
    descriptions: [
      "Javascript(React.js)를 기반의 Soundwix 프론트엔드 페이지 개발",
      "Javascript(React.js)를 기반의 Quiz 관리자 페이지 수정 작업",
      "PHP로 기반으로 만들어진 Quiz 백엔드 서버를 Node.js(Nest.js)로 리뉴얼 작업",
      "AWS 인프라 구성",
    ],
  },
  {
    name: "정산관리 시스템",
    date: "2023.02 - 2023.06",
    subname: "웹 기반 정산관리 시스템",
    descriptions: [
      "MLM 구조의 정산관리 시스템의 전반적인 구조 설계",
      "Typescript, React.js 기반의 정산관리 시스템 관리자페이지 Frontend 개발",
      "Typescript, Node.js(Nest.js), Mysql 기반의 정산관리 시스템 Backend 개발",
      "PM으로서 업무분담, 일정 관리 및 기획업무 담당",
    ],
  },
  {
    name: "MPP Wallet",
    date: "2022.12 - 2023.02",
    subname: "블록체인 지갑 어플리케이션",
    descriptions: [
      "Typescript, Node.js(Express.js) 기반의 지갑 어플리케이션 Backend개발",
      "web3.js를 활용하여 Polygon(MATIC) 블록체인 네트워크와의 기능 연동",
      "Typescript(React.js)를 기반으로한 어플리케이션 관리자 페이지 개발",
      "PM으로서 업무분담, 일정 관리 및 기획업무 담당",
      "AWS 인프라 설계 및 구축",
    ],
  },
  {
    name: "Project A",
    date: "2022.04 - 2022.12",
    subname: "블록체인 지갑 어플리케이션",
    descriptions: [
      "블록체인 지갑 어플리케이션 프로젝트의 전반적인 시스템 구조 설계",
      "Dart(Flutter) 기반의 분산형 블록체인 지갑 어플리케이션 개발",
      "Web3Dart를 활용한 블록체인 네트워크와의 기능 연동 진행",
      "PHP(Laravel)기반의 Backend 개발, Vue.js기반의 관리 페이지 개발",
      "PM으로서 업무분담 및 일정관리 진행",
      "AWS 인프라 설계 및 구축",
    ],
  },
  {
    name: "LG U+ 무인 키오스크 솔루션",
    date: "2020.06 - 2021.04",
    subname: "LG U+ 무인 키오스크 솔루션",
    descriptions: [
      "Typescript, Node.js(Express.js) 기반의 백엔드 개발",
      "Typescript, React.js, React-Native를 사용하여 프론트엔드 개발",
      "LG U+의 Legacy Java API, ESB(Enterprise Service Bus)와의 연동 모듈 개발",
    ],
  },
  {
    name: "수협 방송 사이니지 솔루션",
    date: "2020.01 - 2020.08",
    subname: "수협 실시간 사이니지 솔루션",
    descriptions: [
      "Typescript 도입으로 코드의 가독성 및 유지보수성 향상",
      "Typescript, Node.js(Express.js) 백엔드 개발",
      "Typescript, React.js, React-Native 기반의 프론트 엔드 개발",
      "GraphQL 도입으로 overfetching 방지 및 생산성 향상",
      "HLS 프로토콜연동을 통한 수협 라이브 방송 송출기능 개발",
      "FTP 서버와 연동을 통한 컨텐츠 업로드기능 개발",
    ],
  },
  {
    name: "실시간 배차 관리 솔루션",
    date: "2019.02 - 2019.12",
    subname: "딥러닝을 이용한 실시간 배차관리 프로젝트",
    descriptions: [
      "Tensorflow 기반의 Keras를 활용하여 BIS의 노선, 시간대별 운행시간 데이터를 활용한 노선, 시간대별 버스 운행시간 예측 모듈 개발",
      "지속적으로 추가되는 데이터를 활용하여 예측된 결과와 실제 결과와의 차이를 반영하여 지속적인 학습을 할 수 있도록 인프라 개발",
    ],
  },
  {
    name: "얼굴인식 & 동작인식",
    date: "2018.02 - 2019.06",
    subname: "딥러닝을 이용한 얼굴인식 모듈",
    descriptions: [
      "Tensorflow 기반의 Keras를 활용한 Face Detection, Emotion Recognition, Gaze Estimation 서비스 개발",
      "Pytorch를 활용하여 Hand Detection, Gesture Recognition 서비스 개발",
      "Do-order 솔루션과 연동하여 광고를 시청 중인 사람의 정보 수집 및 인터랙션 모듈 개발",
    ],
  },
  {
    name: "Do-order",
    date: "2017.06 - 2021.04",
    subname: "실시간 사이니지 솔루션",
    descriptions: [
      "React.js, React-Native와 Node.js(Express.js)기반의 솔루션 개발",
      "Mysql, MongoDB를 데이터베이스로 사용",
      "Redis-cluster를 활용한 분산 서비스 환경에서의 클라이언트와 web-socket 연결 관리 모듈 개발",
      "사이니지 클라이언트에서 발생하는 각종 Error 수집 및 관리 모듈 개발",
      "사이니지 웹 클라이언트와의 Socket 관리를 통한 실시간 서비스 개발 (방문자수 확인, 대기시간 연동 및 사용자, 관리자의 입력에 반응하는 실시간 서비스)",
      "다양한 사이니지 템플릿 개발",
      "이슈 대응 및 서버 관리",
    ],
  },
];

const ProjectCard = ({
  name,
  subname,
  date,
  descriptions,
  isLast,
}: ProjectCardProps) => {
  return (
    <div className={`flex w-[90%] py-2 ${isLast ? "" : "mb-7"}`}>
      <div className="w-[35%] flex flex-col justify-center">
        <h1 className="text-base font-bold">{name}</h1>
        <p className="text-sm tracking-[-0.5px] text-gray-500">{subname}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      <div className="w-[65%] word-break">
        {descriptions.map((description, index) => (
          <p key={index}>• {description}</p>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center w-[100%]">
      <SectionName name="PROJECTS" />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          isLast={index === projects.length - 1}
        />
      ))}
    </div>
  );
};

export default Projects;
