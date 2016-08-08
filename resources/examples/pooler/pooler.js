/**
 * A fizz bang puzzle I solved from HackerRank. getPools takes 
 * a space separated list of data representing a map of land and 
 * water (1's and 0's) and finds the pools of water and tracks 
 * them in the pools array.
 *
 * Test with the following data:
 * 01100 11001 01111
 *
 * 00111110010 10001110000 00001100011 00011100110 00111111000 11110011111 00111100000
 *
 * 111111100000000111111111100000000000000000 000000000011111111111111010000000000000000 000000011111111000111111110001111111110000 000110100000011111111111111100000000000000 000011111111111111111111111111111111100000 111111111111111111100111111111111111111111 000011111111111110000001111111111111111000 000000000000111111111111111111111111110000 000000000000000000000000000000000000000000
 */

var map = [];
var pools = [];

function getPools(input) {
  // Data comes as 2d array, rows seperated by new lines and columns by spaces.

  map = []; // reset the map
  pools = []; // reset the pools
  populateMap(input);

  for (var rowIndex=0; rowIndex<map.length; rowIndex++) {
    for (var colIndex=0; colIndex<map[rowIndex].length; colIndex++) {
      if (map[rowIndex][colIndex] == 0 && !isMapped(rowIndex, colIndex, [])) {
        var newPool = mapPool(rowIndex, colIndex, []);
	console.log("Found New Pool:", newPool);
        pools.push(newPool);
      }
    }
  }
}

function populateMap(mapData) {
  var rows = mapData.split(' ');
  for (var rowIndex=0; rowIndex<rows.length; rowIndex++) {
    map.push(rows[rowIndex].split(''));
  }
}

function isMapped(row, column, poolsToCheck) {
  if (map[row][column] != 0) {
    console.error("map[" + row + "][" + column + "] != 0!");
  }

  var localPools = poolsToCheck.slice(0);
  var coordinate = row + "," + column;
  for (var poolIndex = 0; poolIndex<pools.length; poolIndex++) {
    localPools = localPools.concat(pools[poolIndex]);
  }

  console.log("Checking LocalPools: ", localPools);

  return localPools.indexOf(coordinate) != -1;
}

function mapPool(row, column, pool) {
  pool.push(row + "," + column);

  // Look Up
  if (row > 0) {
    // Straight Up
    if (map[row-1][column]==0 && !isMapped(row-1, column, pool)) {
      console.log("Straight Up");
      mapPool(row-1, column, pool);
    }

    // Up Left
    if (column > 0 && map[row-1][column-1] == 0 && !isMapped(row-1, column-1, pool)) {
        console.log("Up Left");
        mapPool(row-1, column-1, pool);
    }

    // Up Right
    if (column < map[row-1].length-1 && map[row-1][column+1] == 0 && !isMapped(row-1, column+1, pool)) {
        console.log("Up Right");
        mapPool(row-1, column+1, pool);
    }
  } 
 
  // Straight Left
  if (column > 0 && map[row][column-1] == 0 && !isMapped(row, column-1, pool)) {
      console.log("Straight Left");
      mapPool(row, column-1, pool);
  }

  // Straight Right
  if (column < map[row].length-1 && map[row][column+1] == 0 && !isMapped(row, column+1, pool))  {
    console.log("Straight Right");
    mapPool(row, column+1, pool);
  }

  // Down
  if (row < map.length-1) {
    // Down Left
    if (column > 0 && map[row+1][column-1] == 0 && !isMapped(row+1, column-1, pool)) {
      console.log("Down Left");
      mapPool(row+1, column-1, pool);
    }

    // Straight Down
    if (map[row+1][column] == 0 && !isMapped(row+1, column, pool)) {
      console.log("Stright Down");
      mapPool(row+1, column, pool);
    }

    // Down Right
    if (column < map[row+1].length-1 && map[row+1][column+1] == 0 && !isMapped(row+1, column+1, pool)) {
      console.log("Down Right");
      mapPool(row+1, column+1, pool);
    }
  }

  console.log("Created Pool:", pool);
  return pool;
}
