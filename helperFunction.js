

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

// This function to generate ID
function generateID() {
  count  = 0;
  return function() {
    return count += 1;
  }
}

function randInt(n) {
	return Math.floor(Math.random() * n);
}

function timer(){
  var timer = {};
  timer.time = 30;
  timer.decreseTime = decreseTime;
  return timer;
}

var decreseTime = function(){
   this.time -= 1;
   return this.time;
}

