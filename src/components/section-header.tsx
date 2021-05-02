type SectionHeaderProps = {
  title: string;
};

function SectionHeader({title}: SectionHeaderProps): JSX.Element {
  return (
    <h1 className="block min-w-max mb-4 sm:mb-5 md:mb-10 text-center text-shadow-md text-sm sm:text-2xl md:text-3xl lg:text-4xl text-yellow-300">
      {title}
    </h1>
  );
}

export {SectionHeader};
