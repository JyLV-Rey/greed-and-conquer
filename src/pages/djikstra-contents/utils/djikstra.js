function Djikstra(matrix, start) {
  const n = matrix.length;
  const visited = Array(n).fill(false);
  const distances = Array(n).fill(Infinity);
  const previous = Array(n).fill(null);

  distances[start] = 0;

  for (let i = 0; i < n; i++) {
    let u = -1;
    let minDist = Infinity;

    // Find unvisited node with smallest distance
    for (let j = 0; j < n; j++) {
      if (!visited[j] && distances[j] < minDist) {
        minDist = distances[j];
        u = j;
      }
    }

    if (u === -1) break; // All reachable nodes processed

    visited[u] = true;

    for (let v = 0; v < n; v++) {
      const weight = matrix[u][v];
      if (weight > 0 && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
        previous[v] = u;
      }
    }
  }

  return { distances, previous };
}

export default function DjikstraAll(matrix, startNode) {
  const n = matrix.length;
  const { distances, previous } = Djikstra(matrix, startNode);

  const pathInfo = {};

  for (let end = 0; end < n; end++) {
    if (startNode === end) continue;

    const path = [];
    const distanceEach = [];
    let current = end;

    // Backtrack path
    while (previous[current] !== null) {
      path.unshift(current);
      distanceEach.unshift(matrix[previous[current]][current]);
      current = previous[current];
    }

    if (current === startNode) {
      path.unshift(startNode);
      pathInfo[end] = {
        total_distance: distances[end],
        path: path,
        distance_each: distanceEach
      };
    } else {
      // No path
      pathInfo[end] = {
        total_distance: Infinity,
        path: [],
        distance_each: []
      };
    }
  }

  return {
    node: startNode,
    path_info: pathInfo
  };
}
