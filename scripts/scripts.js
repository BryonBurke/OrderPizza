// Business logic

function Pizza(pizzaSize, meatArray, vegArray) {
  this.meatArray = meatArray
  this.vegArray = vegArray
  this.pizzaSize = pizzaSize
  this.price = 10

}

Pizza.prototype.getPrice = function(pizza){

  if (pizzaSize === "small"){
    basePrice = 10;
  }
  else if (pizzaSize === "medium") {
    basePrice = 15;
  }
  else if (pizzaSize === "large") {
    basePrice = 20;
  }
  this.price = basePrice + (meatArray.length * 2) + (vegArray.length);

}

// User Interface logic

$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    var meatArray = [];
    var vegArray = [];
    var pizzaSize = $("#pizzaSizeSelecter").val();

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


    var pizza = new Pizza (pizzaSize, meatArray, vegArray);
    pizza.getPrice(myPizza);



    $("#toppingsSelected").show();
    $("#myPrice").text(myPizza.price);
    $("#showPrice").show();

  });
});
