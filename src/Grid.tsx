export const Grid = () => {
  return (
    <div>
      <Axis direction="x" />
      <Axis direction="y" />
    </div>
  );
};

const Axis = (props: {
  direction: 'x' | 'y';
}) => {
  const classNames = {
    x: 'skew-x-[-30deg] rotate-[30deg]',
    y: 'skew-x-[30deg] rotate-[-30deg] -mt-96',
  };

  return (
    <div className={`w-96 flex justify-between aspect-square ${classNames[props.direction]}`}>
      {Array(8).fill('').map((_, i) => {
        return (
          <div key={i} className="w-[1px] h-full bg-white/50" />
        );
      })}
    </div>
  );
}