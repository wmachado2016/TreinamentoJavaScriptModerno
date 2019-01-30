/*
let numero= 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
*/

/*
//var usado no loop
for (var index = 0; index < 10; index++) {
    console.log(index)    
}

console.log('index = ',index)    

//usando let em loop
for (let index = 0; index < 10; index++) {
    console.log(index)    
}
console.log('index = ',index)    
*/

/*
var funcs= []
for (var index = 0; index < 10; index++) {
    funcs.push(function(){
        console.log(index)
    })   
}
funcs[2]()
funcs[6]()
*/

const funcs= []
for (let index = 0; index < 10; index++) {
    funcs.push(function(){
        console.log(index)
    })   
}
funcs[2]()
funcs[6]()