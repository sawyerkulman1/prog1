/**
 *   @author Kulman, Sawyer,(kulmams@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 1 || created: 03.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber,garageSize, bathroomCount, bedroomCount , homePrice;

const BASE_PRICE = 50000;
const GARAGE_PRICE = 6000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;


function main() {
    setLotNumber();
    setBedroomNum();
    setBathroomNum();
    setGarageSize();
    calculateHomePrice();
    printResults();
}

main();

function setBathroomNum() {
    bathroomCount = Number(PROMPT.question(`\nthe number of bathrooms you would like: `));
}
function setLotNumber() {
    lotNumber = PROMPT.question (`\nwhat lot number you would like: `);
}

function setBedroomNum() {
    bedroomCount = Number (PROMPT.question (`\nhow many bedrooms do you would like: `));
}

function setGarageSize() {
    garageSize = Number(PROMPT.question (`\nthe number of garages you would like: `));
}

function calculateHomePrice() {
    homePrice = BASE_PRICE + BEDROOM_PRICE * bedroomCount + BATHROOM_PRICE * bathroomCount + GARAGE_PRICE * garageSize
}

function printResults() {
    console.log("\nThe total cost of the home will be \$" + homePrice);
}
