// GraphVisualizer.jsx
import React, { useState } from "react";
import { graph } from "./graph";
import {dijkstra} from "./dijkstra";

const nodePositions = {
  A: { x: 50, y: 50 },
  B: { x: 200, y: 50 },
  C: { x: 125, y: 150 },
  D: { x: 300, y: 150 },
  E: { x: 200, y: 250 },
  Z: { x: 350, y: 250 },
};

const GraphVisualizer = () => {
  const [path, setPath] = useState([]);
  const [start, setStart] = useState("A");
  const [end, setEnd] = useState("Z");

  const handleRun = () => {
    const result = dijkstra(graph, start, end);
    setPath(result);
  };

  return (
    <div className="p-4">
      <div className="mb-2">
        Start:
        <select value={start} onChange={e => setStart(e.target.value)}>
          {Object.keys(graph).map(n => <option key={n}>{n}</option>)}
        </select>
        End:
        <select value={end} onChange={e => setEnd(e.target.value)}>
          {Object.keys(graph).map(n => <option key={n}>{n}</option>)}
        </select>
        <button onClick={handleRun}>Run Dijkstra</button>
      </div>
      <svg width="400" height="300" style={{ border: "1px solid gray" }}>
        {Object.entries(graph).map(([node, neighbors]) =>
          Object.entries(neighbors).map(([neighbor]) => {
            const from = nodePositions[node];
            const to = nodePositions[neighbor];
            return (
              <line
                key={`${node}-${neighbor}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="gray"
                strokeWidth="1"
              />
            );
          })
        )}
        {Object.entries(nodePositions).map(([node, pos]) => (
          <g key={node}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={20}
              fill={path.includes(node) ? "lightgreen" : "lightblue"}
              stroke="black"
            />
            <text x={pos.x} y={pos.y} textAnchor="middle" dy="0.3em">
              {node}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default GraphVisualizer;
