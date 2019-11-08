$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event){
    event.preventDefault();

    $("#toppingsSelected").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppingsSelected = $(this).val();
      let toppingArray = [];
      toppingArray.push
      $('#toppingsSelected').append(pizzaToppingsSelected + "<br>");

      console.log(pizzaToppingsSelected);
    });

  });
});
