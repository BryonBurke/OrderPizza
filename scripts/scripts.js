
// Business logic
    function Pizza(meatArray, vegArray) {
      this.meatArray = meatArray
      this.vegArray = vegArray
    }
    Pizza.prototype.getPrice = function(){
      let pizzaPrice = pizzaBasePrice + (meatArray.length * meatPrice) + (vegArray.length * vegPrice);
      return pizzaPrice;
    }
    $("#toppingsSelected").show();
    // collect meat items and push to object meat array
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      meatArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });
    // collect veg items and push to veg array
    $("input:checkbox[name=veg-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      vegArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });



// User Interface logic

$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    let pizzaBasePrice = 10;
    let meatPrice = 2;
    let vegPrice =1;
    let meatArray = [];
    let vegArray = [];

    let myPizza = new Pizza (meatArray, vegArray);
    let price = myPizza.getPrice().toFixed(2);
    $("#yourPrice").text(price);
    $("#showPrice").show();

  });
});
