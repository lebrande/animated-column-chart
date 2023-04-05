import { motion } from "framer-motion"

type ChartColor = 'blue' | 'pink' | 'green';

export const Chart = (props: {
  value1: number;
  value2: number;
  value3: number;
}) => {
  const {
    value1,
    value2,
    value3,
  } = props;

  const valueTotal = value1 + value2 + value3

  return (
    <div className="relative flex flex-col items-center">
      <TopSurface />

      <FrontSurface value={value1} color="blue" />
      <FrontSurface value={value2} color="pink" />
      <FrontSurface value={value3} color="green" />

      <FrontEdge value={valueTotal} />
      <TopEdge />

      <p className="text-white absolute">{valueTotal}</p>
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
  color: ChartColor;
}) => {
  const { value, color } = props;

  const sizeClassNames = 'h-56 w-16';
  const gradientClassNames: Record<ChartColor, string> = {
    blue: 'bg-gradient-to-b from-indigo-950 to-blue-800',
    green: 'bg-gradient-to-b from-green-950 to-lime-800',
    pink: 'bg-gradient-to-b from-purple-950 to-pink-800',
  };
  const height = value * 64 / 100;

  return (
    <div className="flex">
      <motion.div
        initial={{
          height,
        }}
        animate={{
          height,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`${sizeClassNames} skew-y-[30deg] ${gradientClassNames[color]}`}
      />
      <motion.div
        initial={{
          height,
        }}
        animate={{
          height,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`${sizeClassNames} skew-y-[-30deg] ${gradientClassNames[color]}`}
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
    <motion.div
      initial={{
        height,
      }}
      animate={{
        height,
      }}
      transition={{
        duration: 0.5,
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