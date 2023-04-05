export const Controls = (props: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex justify-between items-center gap-10">
      <label>Value</label>
      <input
        className="flex-grow px-2 py-1 rounded border border-slate-400"
        value={props.value}
        onChange={({ target }) => props.onChange(+target.value)}
        type="range"
        max={500}
      />
    </div>
  );
};