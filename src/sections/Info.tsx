import resumePhoto from "@/assets/resume_photo.jpg";
import { GithubIcon, MailIcon } from "@/components/Icons";

const Info = () => {
  return (
    <div className="flex w-[100%] max-w-8xl h-[250px] items-center place-content-between px-60 py-10">
      <div className="font-sans">
        <h1 className="text-blue-400 font-bold text-4xl mb-1">이 종 성</h1>
        <p className="text-gray-400 font-bold text-2xl mb-4">
          Frontend/Backend Developer
        </p>
        <div className="flex items-center mb-2">
          <MailIcon className="mr-3" />
          <a href="mailto:sedna9@naver.com" target="_blank">
            sedna9@naver.com
          </a>
        </div>
        <div className="flex items-center">
          <GithubIcon className="mr-3" />
          <a href="https://github.com/sedna99" target="_blank">
            https://github.com/sedna99
          </a>
        </div>
      </div>
      <div className="h-[100%] relative flex items-center justify-center">
        <img className="h-[100%]" src={resumePhoto} alt="Resume" />
      </div>
    </div>
  );
};

export default Info;
