/*
Datatyper
Oppgaver
1. Lag variabel name, age, isLearningJs, putt inn forskjellige datatyper om deg selv
2. Console.log hver variabel
3. Bruk console log for å finne datatypen til en variabel
4. Lag en array av forskjellige ingredienser til en bakeoppskrift

Funksjon
Oppgaver

1. lag en funksjon som console.log 'Hello World'
2. Lag en funksjon som legger sammen 2 tall
3. Lag en funksjon med en variabel som har en array og console.log arrayet

*/
//(Text alltid i '...' )

const medlemEn = 'Claudia'
const medlemTo = 'Sonja'

let age = 40;

console.log('dette er min alder:'+ ' ' + age)


//DATATYPER//

//Number

//ulike variabler VS =var.  HS= data  - Let= var.som endres ex alder - const = var.som ikke endres for ex navn

let number = 23;

//String (Text alltid i '...' )

let name = 'Anders';

//Boleoon/

let isTeaching = true;

let firstName;

//Errordata

/**
 
UndeFined
Null
Nan
 */

// Array

let shoppingList = ['såpe', 'Mel', 'Fjorland'];

let numberList = [0, 3, 5];

//Object

let firstObject = { firstName: 'Anders', age: 20, city: 'Bergen'};

firstName = 'Marie';

console.log(firstName);
console.log(medlemEn);
console.log(medlemTo);


function addNr() {
        let Cupcake = ['smør', 'egg', 'sukker.']
        console.log('Hello World Here is my Cupcake recipe:'+ ' ' + Cupcake + 'Mix dette godt sammen');
}

addNr();


function kalkulator() {
    let tall1 = 23
    let tall2 = 27
    
    let sum = tall1+tall2;
    console.log('Hello World I am this young:' + ' ' + sum + ' ' + 'years young!');
    }

kalkulator();