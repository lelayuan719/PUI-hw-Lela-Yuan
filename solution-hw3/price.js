//setting global variables for prices
let priceDisplay = document.querySelector('.price-text');
let currentPrice = 2.49; 
let currentPack= 1;

//creating glazing dropdown menu
let selectElement = document.querySelector('#glazingOptions');
var option1 = document.createElement('option');
var option2 = document.createElement('option');
var option3 = document.createElement('option');
var option4 = document.createElement('option');

//creating glazing option
option1.text = 'Keep original';
option1.value = "2.49";
selectElement.add(option1);
option2.text = 'Sugar milk';
option2.value = "2.49";
selectElement.add(option2);
option3.text = 'Vanilla milk';
option3.value = "2.99";
selectElement.add(option3);
option4.text = 'Double chocolate';
option4.value = "3.99";
selectElement.add(option4);

//pirce computation
function glazingChange(element) {

    let priceIndex = parseFloat(element.value);

    currentPrice = priceIndex;

    totalPrice = priceIndex * currentPack;

    totalPrice = (Math.round(totalPrice*100))/100;

    priceDisplay.innerText = totalPrice;

 
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

    currentPack = packIndex;

    totalPrice = packIndex * currentPrice;

    totalPrice = (Math.round(totalPrice*100))/100;

    priceDisplay.innerText = totalPrice;

 
}




  