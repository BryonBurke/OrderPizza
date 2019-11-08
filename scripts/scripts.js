$(document).ready(function(){
  $("form#meatToppings").submit(function(event){
    event.preventDefault();

    let pizzaBasePrice = 10;
    let meatPrice = 2;
    let vegPrice =1;
    let meatsArray = [];

    function Pizza(meatsArray) {
      this.meatsArray = meatsArray
    }

    Pizza.prototype.getPrice = function(){
      let pizzaPrice = pizzaBasePrice + (meatsArray.length * 1.50);
      return pizzaPrice;
    }



    $("#toppingsSelected").show();
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppingsSelected = $(this).val();
      meatsArray.push(meatToppingsSelected);
      $('#toppingsSelected').append(meatToppingsSelected + "<br>");

    });


    let myPizza = new Pizza (meatsArray);
    let price = myPizza.getPrice().toFixed(2);

    $("#yourPrice").text(price);
    $("#showPrice").show();

  console.log(price);
  });
});
