import { ISubTitle } from "@/interfaces";

const SubTitle = ({ title }: ISubTitle) => {
  return (
    <h2 className="text-t-md text-gray-400 mb-4 max-sm:hidden">{title}</h2>
  );
};

export default SubTitle;
