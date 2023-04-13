function showMessage() {
    alert("Hello world!");
}

//Hämta samtliga paragraf taggar
let paragrafs = document.getElementsByTagName("p");

paragrafs[0].innerText = "Detta är det första Paragraf Elementet";
paragrafs[1].innerText = "Detta är det andra Paragraf Elementet. Jag är klickbar";
paragrafs[2].innerText = "Sista";

for (let i = 0; i < paragrafs.length; i++) {
    paragrafs[i].style.borderStyle = "solid";

    //Skapa Events MouseOver och MousrOut för alla 3 paragrafer
    paragrafs[i].addEventListener("mouseover", () => {
        paragrafs[i].style.textShadow = "5px 5px 1px #888888";
    });

    paragrafs[i].addEventListener("mouseout", () => {
        paragrafs[i].style.textShadow = "0px 0px 0px #888888";
    });
}
/*
paragrafs.forEach(x => {
    document.x.style.borderStyle = "solid";
});
*/

//Skriv till ett ID attrbiut till en tag
paragrafs[0].setAttribute("id", "para1");

//Gör den andra paragrafen klickbar
paragrafs[1].addEventListener("click", showMessage);

//Skapa ett Change event till input fält inNumb
document.getElementById("inNumb").addEventListener("change",() => {
    let inpNumb = document.getElementById("inNumb");
    let value = inpNumb.value;

    if (value == "10") inpNumb.style.backgroundColor = "LightGreen";
    else               inpNumb.style.backgroundColor = "Red";
});

//Skapa ett CLickEvent till btnConfirm som innehåller en Confirm-Popup
document.getElementById("btnConfirm").addEventListener("click", () => {
    if ( confirm("Är du en robot?") ) alert("Du är en Robot!");
    else                              alert("Du är en människa!");
})

//Skapa en EventListener som låter användaren skriva in nummer
document.getElementById("btnNumber").addEventListener("click", () => {
    //Skapa variabel summa
    let summa = 0;

    //Starta en DoWhile Loop
    do {
        //Hämta ett nummer från användaren
        let input = prompt("Skriv in ett nummer", "1");

        //Validering
        if (input == "" || input == null || isNaN(input)) {
            alert("Du har matat in ett felaktigt värde");
            continue;
        }

        //Addera input till summa
        summa += parseInt(input);
    } while ( confirm("Vill du mata in flera nummer?") );

    //Skriva ut resultatet
    document.getElementById("numberOutput").innerText = `Summan av alla talen är ${summa}`;
});