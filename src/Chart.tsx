export const Chart = (props: {
  value: number;
}) => {
  const { value } = props;

  return (
    <div className="relative flex flex-col items-center">
      <TopSurface />
      <FrontSurface value={value} />
      <FrontEdge value={value} />
      <TopEdge />
      <p className="text-white absolute">{value}</p>
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

const FrontSurface = (props: {
  value: number;
}) => {
  const { value } = props;

  const sizeClassNames = 'h-56 w-16';
  const gradientClassNames = 'bg-gradient-to-b from-indigo-950 to-blue-800';
  const height = value * 64 / 100;

  return (
    <div className="flex">
      <div
        style={{
          height,
        }}
        className={`${sizeClassNames} skew-y-[30deg] ${gradientClassNames}`}
      />
      <div
        style={{
          height,
        }}
        className={`${sizeClassNames} skew-y-[-30deg] ${gradientClassNames}`}
      />
    </div>
  );
}

const FrontEdge = (props: {
  value: number;
}) => {
  const { value } = props;
  const height = value * 64 / 100;

  return (
    <div
      style={{
        height,
      }}
      className="w-px h-56 absolute top-[4.25rem] bg-gradient-to-b from-white/70 via-white/10 to-white/10"
    />
  );
}

const TopEdge = () => {
  const sizeClassNames = 'w-px h-16';
  const transformClassNames = 'absolute origin-bottom top-[0.25rem]';
  const gradientClassNames = 'bg-gradient-to-t from-white/70 via-white/10 to-white/0';

  return (
    <>
      <div className={`${sizeClassNames} ${transformClassNames} ${gradientClassNames} rotate-[60deg]`} />
      <div className={`${sizeClassNames} ${transformClassNames} ${gradientClassNames} rotate-[-60deg]`} />
    </>
  );
}