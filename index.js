// const initialMemoryUsage = process.memoryUsage().heapUsed
// const yourName = process.argv[2]
// const environment = process.env.NODE_ENV 
 
// for(let i = 0; i <= 10000; i++) {
// // Proses looping ini akan membuat penggunaan memori naik
// }
 
// const currentMemoryUsage = process.memoryUsage().heapUsed
 
// console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`)
// console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

const Tiger = require('./process-object/Tiger.js')
const Wolf = require('./process-object/Wolf.js')
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);
