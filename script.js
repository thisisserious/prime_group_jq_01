$(document).ready(function () {
    console.log('This works!');

    var cashMoney = 100;
    setInterval(function () {
      calculatePrice();
    }, 15000);

    function Fruit(name, price, inventory, avgPrice) {
      this.name = name;
      this.price = price;
      this.inventory = inventory;
      this.avgPrice = avgPrice;
    }

    var apple = new Fruit('apple', 1, 0, 0);
    var orange = new Fruit('orange', 1, 0, 0);
    var banana = new Fruit('banana', 1, 0, 0);
    var grapes = new Fruit('grapes', 1, 0, 0);

    var fruitArray = [apple, orange, banana, grapes];
    var appleGrandTotal = 0;
    var orangeGrandTotal = 0;
    var bananaGrandTotal = 0;
    var grapesGrandTotal = 0;


    $('#apple').on('click', '.buy', function () {
        cashMoney -= apple.price;
        apple.inventory++;
        appleGrandTotal += apple.price;
        apple.avgPrice = avgPrice(apple, appleGrandTotal);
        console.log(apple.avgPrice);
        console.log(apple);
        console.log('Cash Money', cashMoney);
        // $(this).parent().find('.currentPrice').text();
        $(this).parent().find('.inventory').text(apple.inventory);
        $(this).parent().find('.averagePrice').text(apple.avgPrice.toFixed(2));
        $('#cashMoney').text(cashMoney.toFixed(2));
      });

      $('#orange').on('click', '.buy', function () {
          cashMoney -= orange.price;
          orange.inventory++;
          orangeGrandTotal += orange.price;
          orange.avgPrice = avgPrice(orange, orangeGrandTotal);
          console.log(orange.avgPrice);
          console.log(orange);
          console.log('Cash Money', cashMoney);
          // $(this).parent().find('.currentPrice').text();
          $(this).parent().find('.inventory').text(orange.inventory);
          $(this).parent().find('.averagePrice').text(orange.avgPrice.toFixed(2));
          $('#cashMoney').text(cashMoney.toFixed(2));
        });

        $('#banana').on('click', '.buy', function () {
            cashMoney -= banana.price;
            banana.inventory++;
            bananaGrandTotal += banana.price;
            banana.avgPrice = avgPrice(banana, bananaGrandTotal);
            console.log(banana.avgPrice);
            console.log(banana);
            console.log('Cash Money', cashMoney);
            // $(this).parent().find('.currentPrice').text();
            $(this).parent().find('.inventory').text(banana.inventory);
            $(this).parent().find('.averagePrice').text(banana.avgPrice.toFixed(2));
            $('#cashMoney').text(cashMoney.toFixed(2));
          });

          $('#grapes').on('click', '.buy', function () {
              cashMoney -= grapes.price;
              grapes.inventory++;
              grapesGrandTotal += grapes.price;
              grapes.avgPrice = avgPrice(grapes, grapesGrandTotal);
              console.log(grapes.avgPrice);
              console.log(grapes);
              console.log('Cash Money', cashMoney);
              // $(this).parent().find('.currentPrice').text();
              $(this).parent().find('.inventory').text(grapes.inventory);
              $(this).parent().find('.averagePrice').text(grapes.avgPrice.toFixed(2));
              $('#cashMoney').text(cashMoney.toFixed(2));
            });

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (1 + max - min) + min);
    }

    function avgPrice(obj, grandTotal) {
      console.log('grandTotal', grandTotal);
      console.log('apple.inventory', apple.inventory);
      obj.avgPrice = grandTotal / obj.inventory;
      console.log('appleavgprice', apple.avgPrice);
      return obj.avgPrice;
    }

    function calculatePrice() {
      apple.price += (randomNumber(-50, 50) / 100);
      if (apple.price < .5) {
        apple.price = .5;
      }

      if (apple.price > 9.99) {
        apple.price = 9.99;
      }

      $('#apple').find('.currentPrice').text(apple.price.toFixed(2));

      ////////////////

      orange.price += (randomNumber(-50, 50) / 100);
      if (orange.price < .5) {
        orange.price = .5;
      }

      if (orange.price > 9.99) {
        orange.price = 9.99;
      }
      $('#orange').find('.currentPrice').text(orange.price.toFixed(2));

      ////////////////

      banana.price += (randomNumber(-50, 50) / 100);
      if (banana.price < .5) {
        banana.price = .5;
      }

      if (banana.price > 9.99) {
        banana.price = 9.99;
      }
      $('#banana').find('.currentPrice').text(banana.price.toFixed(2));

      /////////////////

      grapes.price += (randomNumber(-50, 50) / 100);
      if (grapes.price < .5) {
        grapes.price = .5;
      }

      if (grapes.price > 9.99) {
        grapes.price = 9.99;
      }
      $('#grapes').find('.currentPrice').text(grapes.price.toFixed(2));



    }

    calculatePrice();
  });
