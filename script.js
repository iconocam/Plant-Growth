const PI = 3.1415;
console.log(PI)
const area = ( PI * 5 * 5)
console.log(area)

console.log(`the area of each circle is 78.5 and
each plant requires .8 square meters of space`)

console.log(`if each plant requires .8 meters of space
then i want to see how many plants fit into each circle`)

console.log(`approx 98 plants fit, starting with 20 they double every week`)

// The length of a growing season varies from place to place. Most crops need a growing season of at least 90 days. In tropical regions, where it is warm year-round, the growing season can last the entire year. In some tropical places, however, the growing season is interrupted by a rainy season.

console.log(`if we have 20 plants doubling each week,with one plant finishing within 12 weeks, by the time we get to the 5th week we would have 100 plants overflowing our garden`)





/** While Loop
 *  let count =1; 
 * 
 *  while (count <= 5) {
    console.log(count);
    count++; }   
 */


const initialPlants = 20;
const areaLimit = 78.5;  
const spacePerPlant = 0.8;  
const maxPlants = 98;

let currentPlants = initialPlants;

let currentArea = initialPlants * spacePerPlant;

let week = 1;

// creates an infinite loop, DANGER!! page wouldnt load lol

/**while (currentArea <= areaLimit && currentPlants <= maxPlants) {
    console.log(`Week ${week}: ${currentPlants} plants, Area ${currentArea} square meters`);
}

/**  currentPlants *=2;  doubles the plants for the week /** */