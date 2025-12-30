import ReactFlow, { Controls, MiniMap, Background } from "reactflow";
import "reactflow/dist/style.css";

import MindmapNode from "./MindmapNode";

const nodeTypes = {
  mindmapNode: MindmapNode,
};

export default function MindmapCanvas({ nodes, edges }) {
  return (
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
