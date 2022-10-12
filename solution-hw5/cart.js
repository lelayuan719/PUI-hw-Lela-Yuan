//creating const and values
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

const cartSet = new Set();

const glazingMap = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
    
    }
    
const packSizeMap = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}

let PriceSum = [];
const TotalPriceText = document.querySelector('.total-price-text');
const productSet = new Set();
let sum = 0;


//creating rolls
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {

        this.type = rollType;

        this.glazing =  rollGlazing;

        this.size = packSize;

        this.basePrice = basePrice;   

        this.element = null;

        this.calculatedPrice = calculatePrice(this);

    }

    updateElement(){
        console.log(this.element);
        const cartImageElement = this.element.querySelector('.cart-images');
        const cartTypeElement = this.element.querySelector('#type');
        const cartGlazingElement = this.element.querySelector('#glazing');
        const cartSizeElement = this.element.querySelector('#size');
        const cartPriceElement = this.element.querySelector('#price');
    

        cartImageElement.src = rolls[this.type]['imageFile'];
        cartTypeElement.innerText = this.type + " Cinnamon Roll";
        cartGlazingElement.innerText = "Glazing: " + this.glazing;
        cartSizeElement.innerText= "Pack Size: " + this.size;
        cartPriceElement.innerText= "$ " + this.calculatedPrice;

        PriceSum.push(this.calculatedPrice);
        calculateSum(sum);
        

    }
    
}

function createElement(roll) {
  const template = document.querySelector('#cart-product-template');
  console.log(template);
  const clone = template.content.cloneNode(true);
  
  roll.element = clone.querySelector('.cart-row');
  const btnRemove = roll.element.querySelector('.remove');
  btnRemove.addEventListener('click', () => {
    deleteProduct(roll);
});
  const container = document.querySelector('.cart-main-content');
  container.appendChild(roll.element);

  roll.updateElement();
}

function addNewProduct(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cartSet.add(roll);
  productSet.add(roll);
  createElement(roll);
}


//calculate sum price after deletion
function recalculate(sum)
{
    sum = 0;

    for (let i = 0; i < PriceSum.length; i++)
    {
        sum += PriceSum[i];
    }
    sum = (Math.round(sum*100))/100
    TotalPriceText.innerText = "$ "+ sum;

}


//delete function
function deleteProduct(roll){
    roll.element.remove();
    cartSet.delete(roll);
    PriceSum.push(-(roll.calculatedPrice));
    recalculate(sum);
    console.log(PriceSum);
}

//input values for roll creation 
const cartOne = addNewProduct(
    "Original", 
    "Sugar Milk", 
    "1", 
    2.49
    );

const cartTwo = addNewProduct(
    "Walnut", 
    "Vanilla Milk", 
    "12", 
    3.49
    );

const cartThree = addNewProduct(
    "Raisin", 
    "Sugar Milk", 
    "3", 
    2.99
    );

const cartFour = addNewProduct(
    "Apple", 
    "Keep Original", 
    "3", 
    3.49
    );

//calculate individual price
function calculatePrice(roll){
    price = (roll.basePrice + glazingMap[roll.glazing]) * packSizeMap[roll.size];
    return ((Math.round(price*100))/100);
}

//calculate initial sum price
function calculateSum(sum){
    sum = 0; 

    for (let i = 0; i < PriceSum.length; i++)
    {
        sum += PriceSum[i];
    }
    TotalPriceText.innerText = "$ "+ sum;
}

   



