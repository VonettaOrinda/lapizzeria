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

        var number = $("#pizza-number").val();
        var sizeCost; //set different prices for the different pizza flavors depending on their size
        if (flavor === "Bbq Beef" || flavor === "Bbq Chicken" || flavor === "Hawaiian" || flavor === "Pulled Pork") {
            if (size === "Small") {
                sizeCost = 400;
            } else if (size === "Medium") {
                sizeCost = 650;
            } else if (size === "Large") {
                sizeCost = 900;
            }
        } else if (flavor === "Bbq Pork" || flavor === "Grilled Pork" || flavor === "Margharita" || flavor === "Marinara" || flavor === "Pepperoni") {
            if (size === "Small") {
                sizeCost = 450;
            } else if (size === "Medium") {
                sizeCost = 700;
            } else if (size === "Large") {
                sizeCost = 950;
            }
        } else if (flavor === "Chicken Tikka" || flavor === "Gamberi" || flavor === "Mushroom" || flavor === "Oyster" || flavor === "Spicy Veggie" || flavor === "Original Veggie") {
            if (size === "Small") {
                sizeCost = 500;
            } else if (size === "Medium") {
                sizeCost = 750;
            } else if (size === "Large") {
                sizeCost = 1100;
            }
        }
        var crustCost; //set prices for different crust types
        if (crust === "Gluten Free") {
            crustCost = 230;
        } else if (crust === "Hand Tossed") {
            crustCost = 200;
        } else if (crust === "Original") {
            crustCost = 150;
        } else if (crust === "Pan") {
            crustCost = 180;
        } else if (crust === "Stuffed") {
            crustCost = 250;
        } else if (crust === "Thin") {
            crustCost = 100;
        }
