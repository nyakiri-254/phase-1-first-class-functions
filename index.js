
// function
function receivesAFunction(receives, callback){
    console.log ('receivesAfunction');
    callback();
    //callback function
function callMe() {
    console.log ('received');
}
}
receivesAFunction('received' , callMe);

//returnsAnamedFunction
function SayHello(){
    console.log (`Hi my name is${this.name}.`);
}
const person ={
    name: 'nyakiri',
    SayHello
}
person.SayHello

//returnAnAnonymousFunction

const SayHello = function(){
console.log('anonymous function');
return anonymous;

}
SayHello()