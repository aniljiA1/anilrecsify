import mindmapData from "./data/mindmap.json";
import { buildGraph } from "./utils/buildGraph";
import MindmapCanvas from "./components/MindmapCanvas";
import Sidebar from "./components/Sidebar";

const graph = buildGraph(mindmapData);

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex-1">
        <MindmapCanvas nodes={graph.nodes} edges={graph.edges} />
      </div>
      <div className="w-96 border-l border-gray-700">
        <Sidebar />
      </div>
    </div>
  );
}
