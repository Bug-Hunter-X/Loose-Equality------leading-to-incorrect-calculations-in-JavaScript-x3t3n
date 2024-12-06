# Loose Equality Bug in JavaScript

This repository demonstrates a common error in JavaScript related to loose equality (==).  The loose equality operator does type coercion, leading to unexpected behavior when comparing values such as null or undefined to numbers.  This can cause subtle bugs that are difficult to track down. 

The `bug.js` file shows the problematic code, while `bugSolution.js` offers a corrected version using strict equality (===).