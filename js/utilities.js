function getRandomInt(lower, upper) {
  var mult = upper - (lower - 1);
  var rand = parseInt(Math.random() * mult) + lower;

  return rand;
}

function avg(values) {
  var total = 0;

  for (var i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total / values.length;
}

function median(values) {
  values.sort();

  // (works only if values.length > 1)
  //checks if the number of values is an even number
  //if this condition is met, then the median will be equal to the average of the last term in the first partition and the first term in the second partition
  //otherwise, if the number of values is an odd number, then the median will be set to the middle number


  if ((values.length % 2) == 0) {
    median = (values[(values.length / 2) - 1] + values[values.length / 2]) / 2;
  } else {
    median = values[(values.length + 1) / 2];
  }
  return median;
}

function mode() {
  if (numof1s > numof2s && numof1s > numof3s && numof1s > numof4s && numof1s > numof5s && numof1s > numof6s)
    return 1;
  if (numof2s > numof1s && numof2s > numof3s && numof2s > numof4s && numof2s > numof5s && numof2s > numof6s)
    return 2;
  if (numof3s > numof1s && numof3s > numof2s && numof3s > numof4s && numof3s > numof5s && numof3s > numof6s)
    return 3;
  if (numof4s > numof1s && numof4s > numof2s && numof4s > numof3s && numof4s > numof5s && numof4s > numof6s)
    return 4;
  if (numof5s > numof1s && numof5s > numof2s && numof5s > numof3s && numof5s > numof4s && numof5s > numof6s)
    return 5;
  if (numof6s > numof1s && numof6s > numof2s && numof6s > numof3s && numof6s > numof4s && numof6s > numof5s)
    return 6;
  return "No Mode";
}