const addPizza = document.getElementById("add-pizza")
const addBurger = document.getElementById("add-burger")
const addBeer = document.getElementById("add-beer")
const checkoutSection = document.getElementById("checkout")
const checkoutLine = document.getElementById("checkout-line")
const completeOrderBtn = document.getElementById("complete-order-btn")
const creditCardForm = document.getElementById("credit-card-form")
const totalPrice = document.getElementById("total-price")
const totalPriceH5 = document.getElementById("total-price-h5")
let count = 0

totalPrice.innerHTML = `Total Price:`
addPizza.addEventListener("click", function(){
    if(checkoutSection.classList.contains("hidden")){
    checkoutSection.classList.toggle("hidden")
    }
    checkoutLine.innerHTML += `
    <div class="checkout-flex">
        <h3>Pizza</h3>
        <span>remove</span>
        <h3 class="price-align">$14</h3>
    </div>
    `
    count +=14;
    totalPriceH5.innerHTML = `$${count}`
})

addBurger.addEventListener("click", function() {
    if(checkoutSection.classList.contains("hidden")){
    checkoutSection.classList.toggle("hidden")
    }
    checkoutLine.innerHTML += `
    <div class="checkout-flex">    
        <h3>Burger</h3>
        <span>remove</span>
        <h3 class="price-align">$12</h3>
    </div>
    `
    count +=12;
    totalPriceH5.innerHTML = `$${count}`
})

addBeer.addEventListener("click", function() {
    if(checkoutSection.classList.contains("hidden")){
    checkoutSection.classList.toggle("hidden")
    }
    checkoutLine.innerHTML += `
    <div class="checkout-flex">    
        <h3>Beer</h3>
        <span>remove</span>
        <h3 class="price-align">$12</h3>
    </div>
    `
    count +=12;
    totalPriceH5.innerHTML = `$${count}`    
})

completeOrderBtn.addEventListener("click", function(){
    if(creditCardForm.classList.contains("hidden")){
        creditCardForm.classList.toggle("hidden")
    }
})

document.getElementById("pay-btn").addEventListener("click", function(event){
    event.preventDefault()
    creditCardForm.classList.toggle("hidden")
    checkoutSection.innerHTML = `<h3 id="checkout-h3">Thanks, James! Your order is on its way!</h3>`
})