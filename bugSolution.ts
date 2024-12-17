function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

const result1 = add(10, 5); // Correct usage
console.log(result1); // Output: 15

try {
  const result2 = add("hello", 5); // Type checking prevents this error at runtime
  console.log(result2);
} catch (e) {
  console.error(e.message); // Output: Both parameters must be numbers
}

const result3 = add(10, "5"); // Type checking prevents this error at runtime
console.log(result3); // Output: Error