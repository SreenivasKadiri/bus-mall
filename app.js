'use strict';

// array to hold all of the items
Item.allItems = [];

//Total number of clicks
var clkCount = 0;

// variable to store current displayed pics
var firstPic;
var secondPic;
var thirdPic;

//create objects for shopping items
function Item(name, filepath){
  this.name=name;
  this.filepath=filepath;
  this.clickcount = 0;
  this.prevdisplay = false;
  Item.allItems.push(this);
}

new Item('bag','img/bag.jpg');
new Item('banana','img/banana.jpg');
new Item('bathroom','img/bathroom.jpg');
new Item('boots','img/boots.jpg');
new Item('breakfast','img/breakfast.jpg');
new Item('bubblegum','img/bubblegum.jpg');
new Item('chair','img/chair.jpg');
new Item('cthulhu','img/cthulhu.jpg');
new Item('dog-duck','img/dog-duck.jpg');
new Item('dragon','img/dragon.jpg');
new Item('pen','img/pen.jpg');
new Item('pet-sweep','img/pet-sweep.jpg');
new Item('scissors','img/scissors.jpg');
new Item('shark','img/shark.jpg');
new Item('sweep','img/sweep.png');
new Item('tauntaun','img/tauntaun.jpg');
new Item('unicorn','img/unicorn.jpg');
new Item('usb','img/usb.gif');
new Item('water-can','img/water-can.jpg');
new Item('wine-glass','img/wine-glass.jpg');


//need event listener to track the clocked items
var itmContainerFirst = document.getElementById('item-first');
var itmContainerSecond = document.getElementById('item-second');
var itmContainerThird = document.getElementById('item-third');

itmContainerFirst.addEventListener('click',randomItem1);
itmContainerSecond.addEventListener('click',randomItem2);
itmContainerThird.addEventListener('click',randomItem3);

function randomNum(){
  var num = Math.floor(Math.random()*Item.allItems.length); 
  for (var i=0; i<Item.allItems.length; i++){
    console.log('within Loop',Item.allItems[i].prevdisplay);
    if (Item.allItems[i].prevdisplay === false){
      Item.allItems[i].prevdisplay = true;
      console.log('within If', Item.allItems[i].prevdisplay);
      return num;
    }
  }
}

//display random shop itmes
function randomItem1(){
  console.log('First call');
  var first = randomNum();
  console.log('Second call');
  var second = randomNum();
  console.log('Third call');
  var third = randomNum();
  displayItem(first,second,third);
  clkCount = clkCount + 1;
  firstPic=first;
  secondPic=second;
  thirdPic=third;
}

function randomItem2(){
  var first = randomNum();
  var second = randomNum();
  var third = randomNum();
  displayItem(first,second,third);
  clkCount = clkCount + 1;
  firstPic=first;
  secondPic=second;
  thirdPic=third;
}

function randomItem3(){
  var first = randomNum();
  var second = randomNum();
  var third = randomNum();
  displayItem(first,second,third);
  clkCount = clkCount + 1;
  firstPic=first;
  secondPic=second;
  thirdPic=third;
}

function summaryClicks(){
  
}

function displayItem(first, second, third){

  itmContainerFirst.src = Item.allItems[first].filepath;  
  itmContainerSecond.src = Item.allItems[second].filepath;
  itmContainerThird.src = Item.allItems[third].filepath;
  Item.allItems[first].clickcount = Item.allItems[first].clickcount + 1;
  Item.allItems[second].clickcount = Item.allItems[second].clickcount + 1;
  Item.allItems[third].clickcount = Item.allItems[third].clickcount + 1;
  //set all the items to false except 3 displayed
  for (var i =0; i< Item.allItems.length; i++){
    Item.allItems[i].prevdisplay = false;
  }
  Item.allItems[first].prevdisplay = true;
  Item.allItems[second].prevdisplay = true;
  Item.allItems[third].prevdisplay = true;
  console.log('first,second,third:',first, second, third);
  console.log('Click Count:', clkCount);
}
randomItem1();
randomItem2();
randomItem3();
