module.exports = function reverse (n) {
  let result = '';
  let numbers = Math.abs(n).toString().split('');
  for(let i = numbers.length - 1; i >= 0; i--) {
    result += numbers[i];
  }
  return Number(result);
}
