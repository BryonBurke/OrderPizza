$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    let pizzaBasePrice = 10;

    function Pizza(toppingsArray) {
      this.toppingsArray = toppingsArray
    }

    Pizza.prototype.getPrice = function(){
      price = pizzaBasePrice + (this.toppingsArray.length * 1.5);
      return price;
    }










    let toppingsArray = [];

    $("#toppingsSelected").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      toppingsArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");

    });


    let myPizza = new Pizza (toppingsArray);
    let price = Pizza.getPrice;

console.log(price);
  });
});
