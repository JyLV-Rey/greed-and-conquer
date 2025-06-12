function Djikstra(matrix, start) {
  const n = matrix.length;
  const visited = Array(n).fill(false);
  const distances = Array(n).fill(Infinity);
  const previous = Array(n).fill(null);

  let arrayIterations = 0;

  distances[start] = 0;
  arrayIterations++; // writing to distances[start]

  for (let i = 0; i < n; i++) {
    let u = -1;
    let minDist = Infinity;

    for (let j = 0; j < n; j++) {
      arrayIterations++; // read visited[j]
      arrayIterations++; // read distances[j]
      if (!visited[j] && distances[j] < minDist) {
        minDist = distances[j];
        u = j;
      }
    }

    if (u === -1) break;

    visited[u] = true;
    arrayIterations++; // writing to visited[u]

    for (let v = 0; v < n; v++) {
      arrayIterations++; // read matrix[u][v]
      const weight = matrix[u][v];
      if (weight > 0) {
        arrayIterations++; // read distances[u]
        arrayIterations++; // read distances[v]
        if (distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
          previous[v] = u;
          arrayIterations += 2; // writing distances[v], previous[v]
        }
      }
    }
  }

  return { distances, previous, arrayIterations };
}


export default function DjikstraAll(matrix, startNode) {
  const n = matrix.length;
  const { distances, previous, arrayIterations } = Djikstra(matrix, startNode);

  const pathInfo = {};

  for (let end = 0; end < n; end++) {
    if (startNode === end) continue;

    const path = [];
    const distanceEach = [];
    let current = end;

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
      pathInfo[end] = {
        total_distance: Infinity,
        path: [],
        distance_each: []
      };
    }
  }

  return {
    node: startNode,
    path_info: pathInfo,
    arrayIterations: arrayIterations
  };
}
