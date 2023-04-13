let myTimeInterval = null;

let innerObj = {
    data : [1, 2, 3, 4, 5],
    datum : "Today"
}

//Skapar ett JavaScript objekt
let myObj = {
    firstName : "Marcus", 
    lastName : "Henriksson", 
    age : 34, 
    content : innerObj
};
console.log(myObj);

//JSON Stringifiera JSObjekt
let myJsonString = JSON.stringify(myObj);
console.log(myJsonString);

//Konovertera JSON string tillbaka till JS objekt
let newObj = JSON.parse(myJsonString);
console.log(newObj);

//ClickEvent för btnLocalJson
document.getElementById("btnLocalJson").addEventListener("click", getLocalJson);

async function getLocalJson() {
    //Hämta JSON string från lokal fil
    let jsonString = await fetch("../data/data.json");

    //Konvertera JSON till JS
    let localDataObj = await jsonString.json();
    console.log(localDataObj);

    //Skriva ut data från JS objekt till div-tag
    document.getElementById("localJsonOutput").innerText = `Mitt namn är ${localDataObj.FirstName} ${localDataObj.LastName}`;
}

//ClickEvent för btnIss
document.getElementById("btnIssJson").addEventListener("click", fetchFromIss);

async function fetchFromIss() {
    //Hämta JSON string från lokal fil
    let jsonString = await fetch("https://api.wheretheiss.at/v1/satellites/25544");

    //Konvertera JSON till JS
    let localDataObj = await jsonString.json();
    console.log(localDataObj);

    //Skriva ut data från JS objekt till div-tag
    let arrDesiredAttr = ["longitude", "latitude", "altitude", "velocity"];
    document.getElementById("issJsonOutput").innerHTML = "";
    arrDesiredAttr.forEach(x => {
        document.getElementById("issJsonOutput").innerHTML += `<div>${x}: ${localDataObj[x]}</div>`;
    });

    //Starta ett TidsInterval

    if (myTimeInterval == null) myTimeInterval = setInterval(fetchFromIss, 1500);
}

//ClickEvent för atts toppa Tidsintervall
document.getElementById("btnStopFetch").addEventListener("click", () => {
    //Stoppa myTimeInterval
    if (myTimeInterval == null) return;

    clearInterval(myTimeInterval);
    myTimeInterval = null;
});