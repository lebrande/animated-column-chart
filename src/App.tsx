import { useState } from "react";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { Grid } from "./Grid";

export const App = () => {
  const [value1, setValue1] = useState<number>(100);
  const [value2, setValue2] = useState<number>(100);
  const [value3, setValue3] = useState<number>(100);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute top-10 left-10 right-10 bg-slate-300 rounded p-4 z-30 mb-20 space-y-8">
        <div className="accent-blue-700">
          <Controls
            onChange={setValue1}
            value={value1}
            label="value 1"
          />
        </div>
        <div className="accent-pink-700">
          <Controls
            onChange={setValue2}
            value={value2}
            label="value 2"
          />
        </div>
        <div className="accent-green-700">
          <Controls
            onChange={setValue3}
            value={value3}
            label="value 3"
          />
        </div>
      </div>
      <div className="absolute bottom-36 left-0 right-0 z-20">
        <Chart
          value1={value1}
          value2={value2}
          value3={value3}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 ">
        <Grid />
      </div>
    </div>
  );
}
