//Initiera array för Personer
let persons = [];

document.getElementById("btnCreatePerson").addEventListener("click", () => {
    // Hämta data från input fält
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;

    //Extra: Validering

    // Skapa ett objekt av klassen Person. Pushar in det i Persons array
    persons.push( new Person(firstName, lastName) );

    // Skriv ut objektet i konsol
    console.log( persons[persons.length - 1] );

    //Anropa funk printPersons
    printPersons();

    //Anropa funk printPersonsToTable
    printPersonsToTable();
});

//funktion för att skriva ut persons innehåll
function printPersons() {
    //Skapa en tom string
    let strOutput = "";

    //Skapa en ForEach loop för att gå igenom persons arrayen
    let count = 0;
    persons.forEach(x => {
        //Bygg upp string via loopen
        strOutput += `<div>${x.toString()}<button onclick="personalGreeting(${count})">${x.firstName} hälsar</button></div>`;
        count++;
    });
    
    //Printa ut string till Div tag
    document.getElementById("personsArrOutput").innerHTML = strOutput;
}

function personalGreeting(id) {
    persons[id].personalGreeting();
}

function printPersonsToTable() {
    //Skapa en tom sträng
    let strOuput = "<table><tr>";

    //Skapa första rader, header-read, med namnen på attributen
    for (let x in persons[0]) {
        strOuput += `<th>${x}</th>`;
    }
    strOuput += "<th>Greetings button</th></tr>";

    //Skapa resterade rader, en rad per PersonObjekt
    //Skapa en ForEach loop för att gå igenom alla personer
    let count = 0;
    persons.forEach(person => {
        //Öppna <tr> tag
        strOuput += "<tr>";

        //Skapa en ForIn loop för at gå igenom alla attribut av den nuvarande personen
        for (let attr in person) {
            //Skriv ut attribut värdet till en <td> tag
            strOuput += `<td>${person[attr]}</td>`
        }

        //Skapa en till <td> för GreetingsButton
        strOuput += `<td><button onclick="personalGreeting(${count})">${person.firstName} hälsar</button></td>`;
        count++;

        //Stänga <tr> tag
        strOuput += "</tr>";
    });

    //Printa ut tabell till Div tag
    document.getElementById("tabellOutput").innerHTML = strOuput + "</table>";
}