// Business logic
function Pizza(basePrice, meatArray, vegArray) {
  this.basePrice = basePrice
  this.meatArray = meatArray
  this.vegArray = vegArray
}
Pizza.prototype.getPrice = function(){
  this.price = this.basePrice + (this.meatArray.length * 2) + (this.vegArray.length);
}

// User Interface logic
$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizzaSizeSelecter").val();
    var basePrice = (parseInt(pizzaSize));
    var meatArray = [];
    var vegArray = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      meatArray.push(pizzaToppingsSelected);
    });
    $("input:checkbox[name=veg-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      vegArray.push(pizzaToppingsSelected);
    });
    var myPizza = new Pizza (basePrice, meatArray, vegArray);
    myPizza.getPrice();
    $("#toppingsSelected").show();
    $("#meat").text(myPizza.meatArray);
    $("#veg").text(myPizza.vegArray);
    $("#showPrice").show();
    $("#myPrice").text(myPizza.price);
  });
});
