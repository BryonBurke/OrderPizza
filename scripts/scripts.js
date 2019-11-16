// Business logic

function Pizza(basePrice, meatArray, vegArray) {
  // this.basePrice = basePrice
  this.basePrice = basePrice
  this.meatArray = meatArray
  this.vegArray = vegArray

}
Pizza.prototype.getPrice = function(){

  this.price = this.basePrice + (this.meatArray.length * 2) + (this.vegArray.length);
  // this.price = 19;
  return this.price



  // return this.price
}
// User Interface logic
$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizzaSizeSelecter").val();
    var basePrice = (parseInt(pizzaSize));
    var meatArray = [];
    var vegArray = [];


    // collect meat items and push to object meat array
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      meatArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });
    console.log(meatArray);
    // collect veg items and push to veg array
    $("input:checkbox[name=veg-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      vegArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });
    var myPizza = new Pizza (basePrice, meatArray, vegArray);

    var price = myPizza.getPrice();
    $("#toppingsSelected").show();
    $("#myPrice").text(price);
    $("#showPrice").show();
  });
});
