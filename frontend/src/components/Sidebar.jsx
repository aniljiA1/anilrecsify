import { useMindmapStore } from "../store/mindmapStore";

export default function Sidebar() {
  const node = useMindmapStore((s) => s.selectedNode);

  if (!node) {
    return <div className="p-4 text-gray-400">Click a node to see details</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{node.title}</h2>
      <p className="text-sm text-gray-300">
        {node.summary || "No description available"}
      </p>
    </div>
  );
}
