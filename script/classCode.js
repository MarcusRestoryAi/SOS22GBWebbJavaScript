//Skapa ett objekt av klssen Person
let person1 = new Person("Marcus", "Henriksson");
let person2 = new Person("Cihan", "Yasar");

console.log( person1.fullName() );
console.log( person2.fullName() );

console.log( person1.firstName );

let anställd1 = new Anställd("Niklas", "Cullberg", 30000);

console.log( anställd1.fullName() );

//Skapa en array och placera obejkt i arrayn
let objects = [];
objects.push(person1, person2, anställd1);

objects.forEach((x) => {
    //console.log(x);
    console.log(x.lastName);
});

//Skapa ett nytt attribut för person1
person1.pet = "Cat";

//Anropa alla attribut i ett objekt med en ForIn loop
for (let x in person1) {
    // x => Attribut-namn
    // object[x] => Attribut värde

    console.log(`${x}: ${person1[x]}`);
}

//Kollar person 1 och 2 marraige status
console.log(person1.getPartner());
console.log(person2.getPartner());

// person 1 och person 2 gifter sig
person1.marriage(person2);

//Kollar person 1 och 2 marraige status
console.log(person1.getPartner());
console.log(person2.getPartner());

console.log(`${person1.firstName} är gift med ${person1.partner.firstName}`);