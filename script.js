$(document).ready(function () {
  console.log('This works!');

var cashMoney = 100;

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

$('#apple').on('click', '.buy', function () {
  var price = $(this).parent().find('.currentPrice').text();
  var inventory = $(this).parent().find('.inventory').text();
  cashMoney -= price;
  apple.inventory++;
  appleGrandTotal += price;
  apple.avgPrice = avgPrice(apple, appleGrandTotal);
  console.log(apple.avgPrice);
  console.log(apple);
});

// $('.fruit').on('click', '.buy', function () {
//   var price = $(this).parent().find('.currentPrice').text();
//   var inventory = $(this).parent().find('.inventory').text();
//   inventory += 1;
//   cashMoney -= price;
//   console.log('this.price', this.price);
//   console.log('inventory', inventory);
//   console.log('cashMoney', cashMoney);
//   console.log('price', price);
// });

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function avgPrice(obj, grandTotal) {
  obj.avgPrice = grandTotal / obj.inventory;
}

function calculatePrice() {

  randomNumber(-.5, .5);
}
});
