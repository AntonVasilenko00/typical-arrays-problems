
exports.min = function min (array) {
  let min = 0;
  if(array === undefined || array.length == 0) return min;
  min = array[0];
  for(i = 1; i < array.length; i++){
    let el = array[i];
    if(el < min){
      min = el;
    }
  }
  return min;
}

exports.max = function max (array) {
  let max = 0;
  if(array === undefined || array.length == 0) return max;
  max = array[0];
  for(i = 1; i < array.length; i++){
    let el = array[i];
    if(el > max){
      max = el;
    }
  }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  if(array === undefined || array.length == 0) return sum;
  for(i = 0; i < array.length; i++){
    sum+=array[i];
  }
  sum /= array.length;
  return sum;
}
