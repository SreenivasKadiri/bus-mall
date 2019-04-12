'use strict';

// array to hold all of the items
Item.allItems = [];

//Total number of clicks
var clkCount = 0;

// variable to store current displayed pics
var firstPic = 0;
var secondPic = 0;
var thirdPic = 0;

//create objects for shopping items
function Item(name, filepath){
  this.name=name;
  this.filepath=filepath;
  this.clickcount = 0;
  this.prevdisplay = false;
  Item.allItems.push(this);
  localStorage.setItem('itemList',Item.allItems)
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


function random(){
  var num = Math.floor(Math.random()*Item.allItems.length);
  return num;
}

function randomNum(){
  var num = random();
  while (num === firstPic || num === secondPic || num === thirdPic ||Item.allItems[num].prevdisplay=== true){
    console.log('Duplicate picture returned so call again random number');
    num = randomNum();
  }
  return num;
}

//display random shop itmes
function randomItem1(){
  console.log('localstorage', localStorage.getItem('totalClickCount'));
  if (localStorage.getItem('totalClickCount') === null){
    console.log('localstorage value is null ');
  }
  var first = randomNum();
  var second = randomNum();
  var third = randomNum();
  if (second === first || third === first || second === third){
    randomItem1();
  }else {
    if (clkCount < 25){
      displayItem(first,second,third);
      clkCount = clkCount + 1;
      Item.allItems[firstPic].clickcount = Item.allItems[firstPic].clickcount + 1;
      firstPic=first;
      secondPic=second;
      thirdPic=third;
      //storing all the required values in local storage
      localStorage.setItem('displayedFirstPic',firstPic );
      localStorage.setItem('displayedSecondPic',secondPic );
      localStorage.setItem('displayedThreePic',thirdPic );
      localStorage.setItem('totalClickCount',clkCount );
    }else if (clkCount > 24 && clkCount ===25){
      updateArray();
      displayResult();
    }
  }
  
}

function randomItem2(){
  var first = randomNum();
  var second = randomNum();
  var third = randomNum();
  if (second === first || third === first || second === third){
    randomItem1();
  }else {
    if (clkCount < 25){
      displayItem(first,second,third);
      clkCount = clkCount + 1;
      Item.allItems[firstPic].clickcount = Item.allItems[firstPic].clickcount + 1;
      firstPic=first;
      secondPic=second;
      thirdPic=third;
      //storing all the required values in local storage
      localStorage.setItem('displayedFirstPic',firstPic );
      localStorage.setItem('displayedSecondPic',secondPic );
      localStorage.setItem('displayedThreePic',thirdPic );
      localStorage.setItem('totalClickCount',clkCount );
    }else if (clkCount > 24 && clkCount ===25){
      updateArray();
      displayResult();
    }
  }
}

function randomItem3(){
  var first = randomNum();
  var second = randomNum();
  var third = randomNum();
  if (second === first || third === first || second === third){
    randomItem1();
  }else {
    if (clkCount < 25){
      displayItem(first,second,third);
      clkCount = clkCount + 1;
      Item.allItems[firstPic].clickcount = Item.allItems[firstPic].clickcount + 1;
      firstPic=first;
      secondPic=second;
      thirdPic=third;
      //storing all the required values in local storage
      localStorage.setItem('displayedFirstPic',firstPic );
      localStorage.setItem('displayedSecondPic',secondPic );
      localStorage.setItem('displayedThreePic',thirdPic );
      localStorage.setItem('totalClickCount',clkCount );
    }else if (clkCount > 24 && clkCount ===25){
      updateArray();
      displayResult();
    }
  }
}


function displayItem(first, second, third){

  itmContainerFirst.src = Item.allItems[first].filepath;  
  itmContainerSecond.src = Item.allItems[second].filepath;
  itmContainerThird.src = Item.allItems[third].filepath;
  //Item.allItems[first].clickcount = Item.allItems[first].clickcount + 1;
  //Item.allItems[second].clickcount = Item.allItems[second].clickcount + 1;
  //Item.allItems[third].clickcount = Item.allItems[third].clickcount + 1;
  //set all the items to false except 3 displayed
  for (var i =0; i< Item.allItems.length; i++){
    Item.allItems[i].prevdisplay = false;
  }
  Item.allItems[first].prevdisplay = true;
  Item.allItems[second].prevdisplay = true;
  Item.allItems[third].prevdisplay = true;
  console.log('first,second,third:',first, second, third);
}
randomItem1();
//randomItem2();
//randomItem3();

// Global variable to hold the array of lables and data
var labelsArray = [];
var data = [];
var bkGrdColor = [];

function updateArray(){
  for(var j=0; j<Item.allItems.length; j++){
    labelsArray[j] = Item.allItems[j].name;
    data[j] = Item.allItems[j].clickcount;
    bkGrdColor[j]= '#000000';    
  }
  //storing all the required values in local storage
  localStorage.setItem('labelsArray',labelsArray );
  localStorage.setItem('data',data );
  localStorage.setItem('bkGrdColor',bkGrdColor );
}
//Display the results
function displayResult(){
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelsArray,
      datasets: [{
        label: 'Votes for items',
        data: data,
        backgroundColor: bkGrdColor
      }]
    },
    options: {}
  });
}
//test
//updateArray();
//displayResult();

