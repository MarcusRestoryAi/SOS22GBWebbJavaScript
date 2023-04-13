//Variabel deklaration
let tal1 = 5, tal2 = 7;

//SKriv ut Hello World till DIV tag
document.getElementById("output").innerText = `Summan är ${(tal1 + tal2)}`;

document.getElementById("textOut").innerHTML = "<p>Paragraf</p>";

//Set up EventListener för button
document.getElementById("btnAlert").addEventListener("click", () => {
    alert("Hello World")
});

//Set up EventListener för btnSum samt funktion
document.getElementById("btnSum").addEventListener("click", function () {
    //Hämta värden från input fält
    let tal1 = parseInt( document.getElementById("tal1").value );
    let tal2 = parseInt( document.getElementById("tal2").value );

    //Summera värden
    let summa = tal1 + tal2;

    //If sats
    if (tal1 == tal2) {
        alert("Båda talen är identiska");
    } else {
        alert("Talen är olika");
    }

    //If sats med .isNaN()
    if (isNaN(summa)) {
        alert("Uträkning misslyckads; Reusltatet är en text");
    }

    //Skriva ut resultat
    document.getElementById("sumOutput").innerText = `Summan av ${tal1} och ${tal2} är ${summa}`;
});