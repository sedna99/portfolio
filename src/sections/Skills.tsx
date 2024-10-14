import SectionName from "@/components/SectionName";

type SkillCardProps = {
  title: string;
  skills: string[];
  isLast?: boolean;
};

const skills = [
  {
    title: "Frontend",
    skills: [
      "Typescript, Javascript",
      "React.js, Vue.js, Jquery",
      "Zustand, Recoil, React-redux, React-query",
      "Vite, CRA, Next.js, Webpack, Babel",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js, Java, PHP",
      "Nest.js, Express.js, Hapi.js, Spring Boot, Spring Batch, Spring Data JPA",
      "Sequelize, TypeORM, QueryDSL, JPA, Mybatis, Bull.js, Mongoose",
      "Jest, Junit",
      "npm, yarn, pnpm, Gradle, Maven",
      "IntelliJ, VSCode, WebStorm",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "MySQL, MariaDB, MongoDB, Redis",
      "Jenkins, Gitlab CI, Github Actions",
      "AWS, Docker, Harbor, HashiCorp Vault, ELK, Kubernetes, Terraform",
      "Nginx, Apache, Tomcat",
      "Ubuntu, CentOS, Amazon Linux, Windows Server",
    ],
  },
  {
    title: "ETC",
    skills: [
      "Bitbucket, Github, Gitlab, Gitea",
      "Trello, Asana, Jira, ClickUp, Mantis, Notion",
      "Confluence, Swagger, Postman",
      "Figma, Zeplin",
    ],
  },
];

const SkillCard = ({ title, skills, isLast }: SkillCardProps) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-between ${
        !isLast ? "mb-5" : ""
      }`}
    >
      <div className="flex items-center text-2xl w-[35%]">{title}</div>
      <div className="w-[65%] text-md">
        {skills.map((skill, index) => (
          <p key={index}>• {skill}</p>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="relative flex flex-col items-center w-[100%]">
      <SectionName name="SKILLS" />
      <div className="flex flex-col w-[90%]">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            skills={skill.skills}
            isLast={skills.length === index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
