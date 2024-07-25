import SectionName from "@/components/SectionName";

type ExperienceCardProps = {
  name: string;
  date: string;
  position: string;
  descriptions: string[];
  isLast?: boolean;
};

const experiences = [
  {
    name: "에스제이이앤엠",
    date: "2023.08 - 재직중",
    position: "FE/BE Developer & Cloud Engineer",
    descriptions: [
      "AWS 인프라 설계, 구축 및 운영, 비용관리",
      "PHP, Laravel, CodeIgniter 기반의 레거시 코드 분석, 유지 보수 및 풀스택 개발",
      "Java, jsp, Spring Boot 기반의 레거시 코드 분석, 유지 보수 및 풀스택 개발",
      "Javascript, Typescript, Node.js(Nest.js), React.js 기반의 풀스택 개발",
      "Jenkins CI/CD 구성을 통한 테스트/배포 자동화 파이프라인 구축 및 관리",
      "Vault/Consul를 활용한 Secret Management 서비스 사용 도입 및 관리",
      "Harbor를 활용하여 컨테이너 기반의 서비스 배포 도입 및 관리",
      "사내 Gitlab 구축 및 관리",
      "사내 네트워크 관리",
    ],
  },
  {
    name: "좋은생활건강",
    date: "2023.07 - 2023.08",
    position: "FE/BE Developer & Cloud Engineer",
    descriptions: [
      "Typescript, React.js 기반의 웹 서비스 프론트엔드 개발",
      "Typescript, Node.js(Nest.js) 기반의 웹 서비스 백엔드 개발",
      "AWS 인프라 설계, 구축 및 운영",
    ],
  },
  {
    name: "아스코랩",
    date: "2022.12 - 2023.06",
    position: "FE/BE Developer & Cloud Engineer",
    descriptions: [
      "React-Native 기반의 블록체인 어플리케이션 개발",
      "Web3.js와 Infura 기반의 폴리곤(MATIC) 블록체인 연동 기능 개발",
      "Node.js(Express.js) 기반의 블록체인 어플리케이션 Backend 개발",
      "Typescript, Node.js(Nest.js), React.js 기반의 정산 관리 시스템 기획, FE, BE 설계 및 개발",
      "AWS, NCP 인프라 설계, 구축 및 운영",
      "프로젝트 일정 관리 및 업무 분담",
    ],
  },
  {
    name: "글리치 스튜디오",
    date: "2022.04 - 2022.12",
    position: "FE/BE Developer & Cloud Engineer",
    descriptions: [
      "Dart(Flutter) 기반의 블록체인 어플리케이션 개발",
      "블록체인 어플리케이션 관리 페이지 개발",
      "PHP(Laravel) 기반의 블록체인 Backend 개발",
      "AWS 인프라 설계, 구축 및 운영",
      "사내 네트워크 구성 관리",
      "프로젝트 일정 관리 및 업무 분담",
    ],
  },
  {
    name: "(주)시더",
    date: "2017.06 - 2021.04",
    position: "Frontend/Backend Developer",
    descriptions: [
      "Javascript, Typescript, Node.js(Express.js, hapi.js), React.js 기반의 풀스택 개발",
      "연구용 딥 러닝 프로젝트 진행",
      "AWS 인프라 운영 및 관리",
    ],
  },
];

const ExperienceCard = ({
  name,
  position,
  date,
  descriptions,
  isLast,
}: ExperienceCardProps) => {
  return (
    <div className={`flex w-[90%] my-2 ${isLast ? "" : "mb-7"}`}>
      <div className="w-[35%] flex flex-col justify-center">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-lg tracking-[-0.5px] text-gray-500">{position}</p>
        <p className="text-lg text-gray-600">{date}</p>
      </div>
      <div className="w-[65%]">
        {descriptions.map((description, index) => (
          <p key={index}>• {description}</p>
        ))}
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="relative flex flex-col items-center w-[100%]">
      <SectionName name="EXPERIENCES" />
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          {...experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default Experiences;
