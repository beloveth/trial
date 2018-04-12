var qty = 0;
    var price = 0; 
    var totalPrice = 0;
    var increaseQty = 0;
     
    function getProductPrice (ui) {
      var itemText = $(ui.draggable).children()[2].innerHTML;
      var idPosition = itemText.indexOf("id");
      var startTrim = idPosition + 4;
      var price = itemText.substring(startTrim,startTrim+4);
      return price;
    }

    $(document).ready(function(){

        $(".container .panel").draggable();
          $("#cart").droppable({
            drop: function(event,ui) {
              price = getProductPrice(ui);
              totalPrice = totalPrice + parseInt(price);
              $("#price-button").text( "price: N" + totalPrice);
              increaseQty = qty + 1;
              qty = increaseQty;
              $("#btn-qty > button").html("Qty: " + increaseQty);    
              $("#btn-display").css("background-color","green");
              // $("#btn-display").css("color","white");
              $("#btn-display").text("You made the right choice");
            },
            out: function(event,ui) {
              $("#btn-display").css("background-color","red");
              // $("#btn-display").css("color","white");
              $("#btn-display").html("Why dont you wanna buy me anymore!");
              price = getProductPrice(ui);
              totalPrice = totalPrice - parseInt(price);
              $("#price-button").text( "price: N" + totalPrice);
              var reduceQty = parseInt(qty) - 1;
              qty = reduceQty;
              $("#btn-qty > button").text("Qty: " + qty);  
            }
          });
    });