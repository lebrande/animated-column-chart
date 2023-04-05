import { useState } from "react";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { Grid } from "./Grid";

export const App = () => {
  const [value, setValue] = useState<number>(50);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute top-10 left-10 right-10 bg-slate-300 rounded p-4 z-30 mb-20">
        <Controls
          onChange={setValue}
          value={value}
        />
      </div>
      <div className="absolute bottom-36 left-0 right-0 z-20">
        <Chart value={value} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 ">
        <Grid />
      </div>
    </div>
  );
}
