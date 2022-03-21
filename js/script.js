function capitalize_inputs(str) { //function to capitalize inputs
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function placeOrder() { //function for placing an order
    //get inputs from form
    var name = capitalize_inputs($("input#name").val());
    var flavor = $("#pizza-flavor").val();
    var size = $("#pizza-size").val();
    var crust = $("#pizza-crust").val();
    var toppings = [];
    $.each($('input[name="toppings"]:checked'),
        function() {
            toppings.push($(this).val());
        });
        