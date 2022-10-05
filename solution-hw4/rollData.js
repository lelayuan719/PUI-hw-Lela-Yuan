//database for rolls
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "products/strawberry-cinnamon-roll.jpg"
    }    
}

//creating const for element fetching
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const productTitle = document.querySelector('.subtitles');
const productImage = document.querySelector('#product-thumbnail');
const btnAdd = document.querySelector(".add");

//updating product page
productTitle.innerText = rollType + " Cinnamon Roll";
productImage.src = rolls[rollType]['imageFile'];

//setting global variables for prices
let cart = [];
let priceDisplay = document.querySelector('.price-text');
let basePrice = rolls[rollType]["basePrice"]; 
let currentPrice = rolls[rollType]["basePrice"]; 
let baseSize = 1;
let packSize = 1;
let rollGlazing = "keep original";
priceDisplay.innerText = currentPrice;

//creating glazing dropdown menu
let selectElement = document.querySelector('#glazingOptions');
var option1 = document.createElement('option');
var option2 = document.createElement('option');
var option3 = document.createElement('option');
var option4 = document.createElement('option');

//creating glazing option
option1.text = 'Keep original';
option1.value = "0";
selectElement.add(option1);
option2.text = 'Sugar milk';
option2.value = "0";
selectElement.add(option2);
option3.text = 'Vanilla milk';
option3.value = "0.5";
selectElement.add(option3);
option4.text = 'Double chocolate';
option4.value = "1.5";
selectElement.add(option4);

//pirce computation
function glazingChange(element) {

    let priceIndex = parseFloat(element.value);

    currentPrice = parseFloat(basePrice) + priceIndex;

    totalPrice = currentPrice * packSize;

    totalPrice = (Math.round(totalPrice*100))/100;

    priceDisplay.innerText = totalPrice;

    rollGlazing = element.options[element.selectedIndex].text;

}

//creating pack dropdown menu
let selectElement1 = document.querySelector('#choice');
var option5 = document.createElement('option');
var option6 = document.createElement('option');
var option7 = document.createElement('option');
var option8 = document.createElement('option');

//creating pack option
option5.text = '1';
option5.value = "1";
selectElement1.add(option5);
option6.text = '3';
option6.value = "3";
selectElement1.add(option6);
option7.text = '6';
option7.value = "5";
selectElement1.add(option7);
option8.text = '12';
option8.value = "10";
selectElement1.add(option8);

//pirce computation
function packChange(element) {

    let packIndex = parseFloat(element.value);

    baseSize = packIndex;

    totalPrice = packIndex * currentPrice;

    totalPrice = (Math.round(totalPrice*100))/100;

    packSize = element.options[element.selectedIndex].text;

    priceDisplay.innerText = totalPrice;

}

//creating new class for new objects
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {

        this.type = rollType;

        this.glazing =  rollGlazing;

        this.size = packSize;

        this.basePrice = basePrice;   
    }
    
}

btnAdd.onclick = this.AddToCart;

function AddToCart() {

    const productSelection = new Roll(rollType, rollGlazing, packSize, basePrice);

    cart = [];

    cart.push(productSelection);
    
    console.log(cart);
}






