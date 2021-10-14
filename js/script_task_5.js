const arr = [1, 2, 3, 4, 5];
let result = 0;


for (let i = 0; i < arr.length; i++) {
  
  let degree = Math.pow(arr[i],2);
  result += degree;
}
console.log(result);