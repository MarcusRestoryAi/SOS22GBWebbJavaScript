//Anropa function för att säga hej
sayHey();

//Skriv ut värden till konsolen med rätt syntax
console.log( returnType("Marcus") );
console.log( returnType(30) );

//Summera 2 tal
console.log( addNumbers() );
console.log( addNumbers(5) );
console.log( addNumbers(5, 7) );

//Skapa en For Loop för att skriva ut en paragraf 10 ggr.
for (let i = 0; i < 10; i++) {
    document.getElementById("forLoopOutput").innerHTML += `<div>${i + 1}. Detta är en paragraf!</div>`;
}

//Skapa en Array och skriv ut via en For Loop
let animals = ["Cat", "Dog", "Fish", "Rabbit", "Beaver"];
for (let i = 0; i < animals.length; i++) {
    document.getElementById("forAnimalsOutput").innerHTML += `<div>${animals[i]}</div>`;
}

let arrStuff = ["Marcus", 34, 45.6, true, null, {"lastName":"Henriksson"}];

//Skapa en ForEach loop
//Parameter är i följnade ordning: Objekt, index, array
arrStuff.forEach( (obj, index, arr) => {
    document.getElementById("forEachAnimalsOutput").innerHTML +=
    `<div>Saken ${obj} har indexvärdet ${index}.</div>
    <div>Den är av datatyp: ${typeof(obj)}</div>`
} );