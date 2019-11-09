$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    let pizzaBasePrice = 10;
    let meatPrice = 2;
    let vegPrice =1;
    let meatArray = [];
    let vegArray = [];

    function Pizza(meatArray, vegArray) {
      this.meatArray = meatArray
    }

    Pizza.prototype.getPrice = function(){
      let pizzaPrice = pizzaBasePrice + (meatArray.length * meatPrice) + (vegArray.length * vegPrice);
      return pizzaPrice;
    }



    $("#toppingsSelected").show();

    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      meatArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });

    $("input:checkbox[name=veg-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      vegArray.push(pizzaToppingsSelected);

      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");
    });


    let myPizza = new Pizza (meatArray, vegArray);
    let price = myPizza.getPrice().toFixed(2);

    $("#yourPrice").text(price);
    $("#showPrice").show();

  console.log(price);
  });
});
