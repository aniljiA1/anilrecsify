export function buildGraph(data, parentId = null, x = 0, y = 0) {
  let nodes = [];
  let edges = [];

  nodes.push({
    id: data.id,
    type: "mindmapNode",
    position: { x, y },
    data: {
      title: data.title,
      summary: data.summary || "",
    },
  });

  if (parentId) {
    edges.push({
      id: `${parentId}-${data.id}`,
      source: parentId,
      target: data.id,
    });
  }

  if (data.children) {
    data.children.forEach((child, index) => {
      const childX = x + 250;
      const childY = y + index * 120 - data.children.length * 60;

      const result = buildGraph(child, data.id, childX, childY);
      nodes = nodes.concat(result.nodes);
      edges = edges.concat(result.edges);
    });
  }

  return { nodes, edges };
}
