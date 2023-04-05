export const Chart = () => {
  return (
    <div className="flex flex-col items-center border border-green-500">
      <TopSurface />
      <FrontSurface />
    </div>
  );
};

const TopSurface = () => {
  return (
    <div className="h-16 w-[4.7rem] bg-white skew-x-[-30deg] rotate-[30deg] -mb-3.5" />
  );
}

const FrontSurface = () => {
  return (
    <div className="flex">
      <div className="h-56 w-16 bg-red-500 skew-y-[30deg]" />
      <div className="h-56 w-16 bg-blue-500 skew-y-[-30deg]" />
    </div>
  );
}