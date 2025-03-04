function knightMoves(start, destination){
  let queue = [[...start, [start]]];
  let visited = [];
  while(queue.length > 0){
    let [x, y, path] = queue.shift()
    for (let edge of edges){
      let current = [x + edge[0], y + edge[1]]
      if(!visited.some(node => node[0] === current[0] && node[1] === current[1]) && 
        current.every(i => i >= 0 && i < 8)
      ){
        if (current[0] === destination[0] && current[1] === destination[1]) {
          console.log(`You made it in ${path.length} moves!  Here's your path:`)
          path.concat([current]).forEach(element => {
            console.log(element)
          });
          return;
        }
        queue.push([...current, path.concat([current])]);
        visited.push(current)
      }
    }
  }
  console.log("the knight fell out of the board and we never saw him again")

};
const edges = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2]
];
knightMoves([0,0], [1,2]);  // Should be 1 move
knightMoves([0,0], [3,3]);  // Should be 2 moves
knightMoves([3,3], [4,3]);  // Should be 3 moves
knightMoves([0,0], [7,7]);  // A real test, should be 6 moves
knightMoves([0,0], [8,8]);  // Should NOT work (out of bounds)