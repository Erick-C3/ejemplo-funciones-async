
let n = 0;

const idInterval =  setInterval(() => {
    console.log("hola mundo!");
    n++;
    if (n === 3) {
        clearInterval(idInterval);
    }
}, 2000);



/* console.log("primer mensaje");

setTimeout(() => {
    console.log("Hola mundo! 1 ");
    console.log("Hola mundo! 2 ");
}, 3000);


console.log("segundo mensaje");
 */