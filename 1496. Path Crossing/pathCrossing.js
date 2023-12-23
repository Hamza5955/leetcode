// Source : https://leetcode.com/problems/path-crossing/description/?envType=daily-question&envId=2023-12-23

/*********************************************************************
 * 
 * 
 *  Given a string path, where path[i] = 'N', 'S', 'E' or 'W',
 *  each representing moving one unit north, south, east, or west, respectively. 
 *  You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
 *  Return true if the path crosses itself at any point, that is, 
 *  if at any time you are on a location you have previously visited. Return false otherwise.
 * 
 *  Input: path = "NES"
 *  Output: false 
 *  Explanation: Notice that the path doesn't cross any point more than once.
 * 
 *  Input: path = "NESWW"
 *  Output: true
 *  Explanation: Notice that the path visits the origin twice.
 * 
 *********************************************************************/

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {

    const set = new Set();

    let j = 0;

    let x = 0;

    for (const char of path) {
        
        if (char == 'N') {

            j++

        } else if (char == 'S') {

            j--;

        } else if (char == 'W' ) {

            x++;

        } else if (char == 'E') {

            x--

        }

        if (x == 0 && j == 0) {

            return true

        }
        const point = `${x}-${j}`;

        if (set.has(point)) {

            return true

        }

        set.add(point)

    }

    return false;

};