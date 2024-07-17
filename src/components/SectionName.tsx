type SectionNameProps = {
  name: string;
};

const SectionName = (props: SectionNameProps) => {
  const { name } = props;
  return <p className="text-blue-400 font-bold text-3xl mb-5">{name}</p>;
};

export default SectionName;
