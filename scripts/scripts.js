// Business logic
    let pizzaBasePrice = 10;
    let meatPrice = 2;
    let vegPrice =1;
    let meatArray = [];
    let vegArray = [];
    function Pizza(meatArray, vegArray) {
      this.meatArray = meatArray
      this.vegArray = vegArray
    }
    Pizza.prototype.getPrice = function(){
      let pizzaPrice = pizzaBasePrice + (meatArray.length * meatPrice) + (vegArray.length * vegPrice);
      return pizzaPrice;
    }

    // User Interface logic

    $(document).ready(function(){
      $("form#pizzaToppings").submit(function(event){
        event.preventDefault();
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
      $("#toppingsSelected").show();
    });

    let myPizza = new Pizza (meatArray, vegArray);
    let price = myPizza.getPrice().toFixed(2);
    $("#yourPrice").text(price);
    $("#showPrice").show();

  });
});
