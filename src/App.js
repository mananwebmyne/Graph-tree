import { graphData } from "./data";
import { Graph } from "react-d3-graph";
import { graphConfig } from "./graphConfig";

export default function App() {
  return (
    <div>
      <Graph id="graph1" data={graphData} config={graphConfig} />
    </div>
  );
}
