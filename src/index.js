/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  if (preferences.length < 3)
    return 0;

  const l = [];
  
  for (let i=0; i<preferences.length; i++) {
    let lover1 = preferences[i];
    let lover2 = preferences[lover1-1];
    let lover3 = preferences[lover2-1];
    if (lover3-1 == i && lover1 != lover2 && lover2 != lover3) {
      const triangle = [lover1,lover2,lover3].sort().toString();
      if (l.indexOf(triangle) < 0) 
        l.push(triangle);
    }
  }
  
  return l.length;
};
