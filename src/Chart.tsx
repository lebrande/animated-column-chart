export const Chart = () => {
  return (
    <div className="flex flex-col items-center border border-green-500">
      <TopSurface />
      <FrontSurface />
    </div>
  );
};

const TopSurface = () => {
  const sizeClassNames = 'h-16 w-[4.7rem]';
  const transformClassNames = 'skew-x-[-30deg] rotate-[30deg] -mb-3.5';
  const gradientClassNames = 'bg-gradient-to-br from-indigo-950 via-blue-950 to-blue-800';

  return (
    <div className={`${sizeClassNames} ${transformClassNames} ${gradientClassNames}`} />
  );
}

const FrontSurface = () => {
  const sizeClassNames = 'h-56 w-16';
  const gradientClassNames = 'bg-gradient-to-b from-indigo-950 to-blue-800';

  return (
    <div className="flex">
      <div className={`${sizeClassNames} skew-y-[30deg] ${gradientClassNames}`} />
      <div className={`${sizeClassNames} skew-y-[-30deg] ${gradientClassNames}`} />
    </div>
  );
}