export const Controls = (props: {
  value: number;
  onChange: (value: number) => void;
  label: string;
}) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <label className="w-32">{props.label}</label>
      <input
        className="flex-grow px-2 py-1 rounded border border-slate-400"
        value={props.value}
        onChange={({ target }) => props.onChange(+target.value)}
        type="range"
        max={300}
      />
    </div>
  );
};