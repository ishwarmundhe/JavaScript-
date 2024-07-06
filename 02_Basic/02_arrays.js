const marvel_heros = ['ironman', 'thor', 'captian']
const dc_heros = ['batman', 'superman', 'flash']

const dc_heros2 = ['bat', 'supn', 'sh']
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const all = marvel_heros.concat(dc_heros);
console.log(all);


const all_new_heros = [...marvel_heros, ...dc_heros,...dc_heros2];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));