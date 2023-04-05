import { Chart } from "./Chart";
import { Grid } from "./Grid";

export const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="-mb-80 z-20">
        <Chart />
      </div>
      <div className="z-10">
        <Grid />
      </div>
    </div>
  );
}
