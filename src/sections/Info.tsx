import resumePhoto from "@/assets/resume_photo.jpg";
import { GithubIcon, MailIcon } from "@/components/Icons";

export type IconUrlDescProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  desc: string;
};

const IconUrlDesc = ({ Icon, desc, url }: IconUrlDescProps) => {
  return (
    <div className="flex items-center mb-2">
      <Icon className="mr-3" />
      <a href={url} target="_blank">{desc}</a>
    </div>
  );
}

const Info = () => {
  return (
    <div className="flex w-[100%] max-w-8xl h-[250px] items-center place-content-between">
      <div className="font-sans">
        <h1 className="text-blue-400 font-bold text-4xl mb-1">이 종 성</h1>
        <p className="text-gray-400 font-bold text-2xl mb-4">
          Frontend/Backend Developer
        </p>
        <IconUrlDesc Icon={MailIcon} url={"mailto:sedna9@naver.com"} desc={"sedna9@naver.com"}/>
        <IconUrlDesc Icon={GithubIcon} url={"https://github.com/sedna99"} desc={"https://github.com/sedna99"} />
      </div>
      <div className="h-[100%] relative flex items-center justify-center">
        <img className="h-[100%]" src={resumePhoto} alt="Resume" />
      </div>
    </div>
  );
};

export default Info;
