type SectionNameProps = {
  name: string;
};

const SectionName = (props: SectionNameProps) => {
  const { name } = props;
  return <>{name}</>;
};

export default SectionName;
