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
    title: "Devops",
    skills: [
      "MySQL, MariaDB, MongoDB",
      "Jenkins, Gitlab CI, Github Actions",
      "AWS, Docker, Harbor, HashiCorp Vault, ELK",
      "Nginx, Apache, Tomcat",
      "Ubuntu, CentOS, Amazon Linux, Windows Server",
    ],
  },
];

const SkillCard = ({ title, skills, isLast }: SkillCardProps) => {
  return (
    <div className={`flex flex-wrap items-center justify-between ${!isLast ? "mb-5" : ""}`}>
      <div className="flex items-center text-2xl w-[30%]">{title}</div>
      <div className="w-[70%] text-md">
        {skills.map((skill, index) => (
          <p key={index}>
            • {skill}
          </p>
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="w-[100%]">
      <SectionName name="SKILLS" />
      {skills.map((skill, index) => (
        <SkillCard key={index} title={skill.title} skills={skill.skills} isLast={skills.length === index + 1} />
      ))}
    </div>
  );
};

export default Skills;