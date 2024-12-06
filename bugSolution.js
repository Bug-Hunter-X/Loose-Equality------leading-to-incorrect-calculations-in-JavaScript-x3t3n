function foo(x) {
  if (x === null || x === undefined) {
    return 0; //Explicitly check for null and undefined.
  }
  return x + 1; 
}

//Test cases 
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); // Output: 6