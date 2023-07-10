let arr = [1, 2, 3, 4, 5, 6, 7, 'str', '13'];
var sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' || (typeof arr[i] === 'string' && !isNaN(parseInt(arr[i])))) {
    sum += parseInt(arr[i]);
  }
}

console.log(sum);


