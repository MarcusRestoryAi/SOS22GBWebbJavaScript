class Person {
    //Definiera innehållet

    //Konstruktor
    //Har alltid namnet "constructor", inte klassnamnet
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = "Blue/Green";
        this.age = 34;
        this.legal = true;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    marriage(partner) {
        this.partner = partner;
        partner.partner = this;
    }

    getPartner() {
        //Kolla om partner attributet är initierat. Om så, returnera det.
        if (this.partner) return this.partner;
        else              return "Unmarriaged";
    }

    toString() {
        return `Personen ${this.firstName} ${this.lastName} som är ${this.age} år gammal. Har ${this.eyeColor} ögon.`;
    }

    personalGreeting() {
        alert(`${this.firstName} hälsar`);
    }
}

//Klass Anställd ärver från klassen Person
class Anställd extends Person {
    constructor(firstName, lastName, lön) {
        //Anroppar basklassens construktor
        super(firstName, lastName);
        this.lön = lön;
    }
}