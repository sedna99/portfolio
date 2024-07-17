import { ChildrenProps } from "@/types";

const Container = ({ children }: ChildrenProps) => {
  return <div className="max-w-[960px] w-[100%] relative">
    {children}
  </div>;
};

export default Container;
