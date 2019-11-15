// Business logic

function Pizza(pizzaSize, meatArray, vegArray) {
  this.meatArray = meatArray
  this.vegArray = vegArray
  this.pizzaSize = pizzaSize
  this.price = 10
}
Pizza.prototype.getPrice = function(){
  if (this.pizzaSize === "small"){
    basePrice = 10;
  }
  else if (this.pizzaSize === "medium") {
    basePrice = 15;
  }
  else if (this.pizzaSize === "large") {
    basePrice = 20;
  }
  this.price = basePrice + (meatArray.length * 2) + (vegArray.length);
  return this.price
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
    var myPizza = new Pizza (pizzaSize, meatArray, vegArray);
    var price = myPizza.getPrice();
    $("#toppingsSelected").show();
    $("#myPrice").text(price);
    $("#showPrice").show();
  });
});
