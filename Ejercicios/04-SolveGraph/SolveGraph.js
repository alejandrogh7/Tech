function SolveGraph(graph, start, end, visited = {}) {
  // Your code here:
  //si ya pasé por acá
  if (visited[start]) return false;
  //creao la propiedad dentro de visited
  visited[start] = true;

  for (const node of graph[start]) {
    if (end === node) return true;
    if (SolveGraph(graph, node, end, visited)) return true;
  }
  return false;
}

// function SolveGraph(graph, start, end, visited = []) {
//   // Your code here:
//   //si ya pasé por acá
//   if (visited.includes(start)) return false;
//   //push donde estoy
//   visited.push(start);

//   for (const node of graph[start]) {
//     if (end === node) return true;
//     if (SolveGraph(graph, node, end, visited) === true) return true;
//   }
//   return false;
// }

module.exports = SolveGraph;

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "c")); //true

console.log(SolveGraph(graph, "a", "r")); //true

console.log(SolveGraph(graph, "a", "d")); //true

console.log(SolveGraph(graph, "s", "b")); //false
