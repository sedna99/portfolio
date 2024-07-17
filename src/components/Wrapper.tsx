import { ChildrenProps } from "@/types";

const Wrapper = ({ children }: ChildrenProps) => {
  return <div className="flex w-[100%] items-center justify-center relative">
    {children}</div>;
};

export default Wrapper;