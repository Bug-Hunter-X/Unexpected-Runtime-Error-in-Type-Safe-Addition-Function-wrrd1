# Unexpected Runtime Error in Type-Safe Addition Function

This repository demonstrates a subtle bug in TypeScript where a seemingly type-safe addition function can produce unexpected runtime errors due to implicit type coercion.

The `add` function is designed to only accept numbers, however, due to JavaScript's dynamic typing, a string can be added to a number. TypeScript doesn't prevent this at compile time.  The runtime error arises because the function's type annotation is not fully enforced.

## Bug
The `bug.ts` file contains the erroneous code.  It showcases how a type error occurs at runtime when strings and numbers are used in the add function.

## Solution
The `bugSolution.ts` file provides a corrected version. It uses stricter type guards to prevent the runtime error.