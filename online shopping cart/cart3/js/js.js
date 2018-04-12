/*$(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });*/
      var data = {"total":0,"rows":[]};
      var totalCost = 0;
      
      $(function(){
$('#cartcontent').datagrid({
              singleSelect:true
          });
          $('.panel').draggable({
              revert:true,
              proxy:'clone',
              onStartDrag:function(){
                  $(this).draggable('options').cursor = 'not-allowed';
                  $(this).draggable('proxy').css('z-index',10);
              },
              onStopDrag:function(){
                  $(this).draggable('options').cursor='move';
              }
          });
          $('.cart').droppable({
              onDragEnter:function(e,source){
                  $(source).draggable('options').cursor='auto';
              
      },
              onDragLeave:function(e,source){
                  $(source).draggable('options').cursor='not-allowed';
              },
              onDrop:function(e,source){
                  var name = $(source).find('panel-heading').html();
                  var price = $(source).find('panel-footer').html();
                  addProduct(name, parseFloat(price.split('$')[1]));
              }
          });
      //});
      
      function addProduct(name,price){
          function add(){
              for(var i=0; i<data.total; i++){
                  var row = data.rows[i];
                  if (row.name == name){
                      row.quantity += 1;
                      return;
                  }
              }
              data.total += 1;
              data.rows.push({
                  name:name,
                  quantity:1,
                  price:price
              });
          }
          add();
          totalCost += price;
          $('#cartcontent').datagrid('loadData', data);
          $('div.cart .total').html('Total: $'+totalCost);
      }
  });