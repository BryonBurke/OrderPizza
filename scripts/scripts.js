$(document).ready(function(){
  let pizzaBasePrice = 10;
  let meatPrice = 2;
  let vegPrice =1;
  let meatsArray = [];
  let vegsArray = [];

  function Pizza(meatsArray, vegArray) {
    this.meatsArray = meatsArray
    this.vegArray = vegArray
  }

  Pizza.prototype.getPrice = function(){
    let pizzaPrice = pizzaBasePrice + (meatsArray.length * meatPrice);
    return pizzaPrice;
  }


    $("form#meatToppings").submit(function(event){
      event.preventDefault();
      $("#toppingsSelected").show();
      $("input:checkbox[name=meat-toppings]:checked").each(function(){
        let meatToppingsSelected = $(this).val();
        meatsArray.push(meatToppingsSelected);
        $('#toppingsSelected').append(meatToppingsSelected + "<br>");
      });

    });

    // $("form#vegToppings").submit(function(event){
    //   event.preventDefault();
    //   $("#toppingsSelected").show();
    //   $("input:checkbox[name=veg-toppings]:checked").each(function(){
    //     let vegToppingsSelected = $(this).val();
    //     vegsArray.push(vegToppingsSelected);
    //     $('#toppingsSelected').append(meatToppingsSelected + "<br>");
    //   });
    // });


    let myPizza = new Pizza (meatsArray, vegsArray);
    console.log(meatsArray);
    let price = myPizza.getPrice().toFixed(2);
    $("#yourPrice").text(price);
    $("#showPrice").show();

});
