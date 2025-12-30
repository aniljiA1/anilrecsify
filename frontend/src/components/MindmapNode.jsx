import { Handle, Position } from "reactflow";
import { useMindmapStore } from "../store/mindmapStore";

export default function MindmapNode({ data }) {
  const setSelectedNode = useMindmapStore((s) => s.setSelectedNode);

  return (
    <div
      className="bg-blue-400 text-black px-6 py-4 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedNode(data)}
      title={data.summary}
    >
      <Handle type="target" position={Position.Left} />
      <div className="font-semibold text-center">{data.title}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
