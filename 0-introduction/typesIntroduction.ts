/** 1. String declaration 
 * */ 

let greetings: string = "Hello Keval";
console.log(greetings)

/** 2. Numbers (INT & FLOAT both) declaration 
 * let userId: number = 1001 
 * No need of declaring type for number 
 *  Reason: This is called type inference, TS is smart enough to get all the
 *  values, so need of adding column
 * 
 *  */ 

let userId = 1001;
let price = 15.96;

/** 3. Boolean declaration
 * */

let isLoggedIn: boolean = true;

/** 4. Any declaration
 * It can be either STRING, NUMBER, BOOLEAN, etc 
 * AND is not recommended to use this!!!
 * */

let hero; // Now variable "hero" has 'any' type

function getHero(){
    return "batman";
    return true;
}

hero = getHero();

export {}