
//Simple Way:

function Sum(a=10,b=20){

	return a+b;
}

console.log(Sum());

//arro function

var Arro = (x,y) => x+y;

console.log(Arro(40,50));

//Annonymous Function

var Anno = function (t,d){

	return t-d;
}

console.log(Anno(40,80));

//Anno to arro convert

let multiply = (s,m) => s/m;

console.log(multiply(10,2));

// without Default Value
let def = m => m*2;
console.log(def(2));

//return object from function

function CreateStudent(roll,name){

	return {

		roll:roll,
		name:name
	}
}

console.log(CreateStudent(2,'suranjit'));

//return object with Annonymous function

var Data =(section,group)=>({section:section,group:group}); //({})

console.log(Data("A","Scince"));

//IIFE = Immediately Invoked Function Expression

(function(){

console.log("Bangladesh");

})()