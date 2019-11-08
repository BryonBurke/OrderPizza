$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    let pizzaBasePrice = 10;
    let meatPrice = 2;
    let vegPrice =1;
    let toppingsArray = [];

    function Pizza(toppingsArray) {
      this.toppingsArray = toppingsArray
    }

    Pizza.prototype.getPrice = function(){
      let pizzaPrice = pizzaBasePrice + (toppingsArray.length * 1.50);
      return pizzaPrice;
    }



    $("#toppingsSelected").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      toppingsArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");

    });


    let myPizza = new Pizza (toppingsArray);
    let price = myPizza.getPrice();

    $('#outputPrice').append(price);

  console.log(price);
  });
});
