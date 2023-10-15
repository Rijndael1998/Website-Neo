export const AStarContent = 
`
A* (pronounced "A-star") is a popular and influential pathfinding algorithm in computer science. It was introduced by Peter Hart, Nils Nilsson, and Bertram Raphael in 1968. A* forms the basis of many pathfinding algorithms used in video games and web-based maps.

A* is commonly used because it is both complete and optimal, meaning it always finds a path if one exists and it always finds the least costly path (assuming the cost function is monotonic).

The algorithm calculates a heuristic value for each node, typically the estimated distance to the target, and prefers to explore nodes with the lowest total cost plus this heuristic. The cumulative cost and the estimated remaining cost gives an approximate cost to reach the target from the current node, which allows A* to make informed decisions on the likely best path before it has been fully explored. 

This approach combines the advantages of Dijkstra's algorithm (which is best at finding the shortest path) and Greedy Best-First-Search (which is best at quickly exploring in the right general direction), making A* a very efficient and accurate pathfinding algorithm.
`.split("\n\n");