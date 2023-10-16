// const add = require("./add")
// console.log("hello lakshmikant i have started learning node-Js");
// const sum = add(5,4);
// const sum2 = add(8,3);
// console.log(sum);
// console.log(sum2);
// require("./batman");
// require("./spiderman");
const SuperHero = require ("./super-hero");
console.log(SuperHero.getName());
SuperHero.setName("Spidey");
console.log(SuperHero.getName());
// lets create new instance
const newSuper = require ("./super-hero");
console.log(newSuper.getName());
newSuper.setName("Iron-Man");
console.log(newSuper.getName());