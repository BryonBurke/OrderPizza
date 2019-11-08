$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    function Pizza(toppingsArray) {
      this.toppingsArray = toppingsArray,
    }

    Pizza.prototype.getPrice = function();









    let toppingsArray = [];

    $("#toppingsSelected").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      toppingsArray.push(pizzaToppingsSelected);
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");

    });
    console.log(toppingArray);

  });
});

let myPizza = new Pizza (toppingsArray)
let price = myPizza.getPrice
