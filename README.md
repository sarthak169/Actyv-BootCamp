## Javascript

The JavaScript is a scripting or dynamic programming language that allows you to implement complex things on web pages. 

JavaScript contains a standard library of objects, such as  `Array`,  `Date`, and  `Math`, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

-   _Client-side JavaScript_  extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
- 
-   _Server-side JavaScript_  extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests from code written in the browser.

### Lets Dive into code

Getting started simple with following steps: 
1. We need a web browser console.
   The Web Console shows you information about the currently loaded Web page, and also includes a command line  that you can use to execute JavaScript expressions in the current page.
2. To open the Web Console (Ctrl+Shift+I on Windows and Linux or Cmd-Option-K on Mac), select "Web Console" from the "Developer" menu, which is under the "Tools" menu in Firefox. It appears at the bottom of the browser window.
3. We need a IDE(Integrated Development Environment) for writing the scripts. The VSCode (Visual Studio Code) is an suggested IDE.

- The JavaScript is written on the top of body tag. 
- Or the javascript can be placed in the script tag.

### Getting Started
JavaScript  borrows most of its syntax from the C and C++l, and also influenced by Awk ,Perl and Python.

- JavaScript is the case-sensitive language and uses the Unicode character set.
- The JavaScript instructions are called statements and are separated by the semicolon ( ; ).

#### Comments
The comments in the JavaScript are done in two types: 
1. Single Line Comments. ( //This is single line comment)
2. Multi-line Comments.
/*
This is 
a multi line
comment
*/


#### Declarations
The declarations are know as what  type of the data is being handled by the variable.
The declarations are of the three types: 
1. var : Declares a variable, optionally initializing it to a value.
2. const : Declares a block-scoped, read-only named constant. It cannot be over-written.
3. let : Declares a block-scoped, local variable, optionally initializing it to a value.

#### Variables
The variables are the symbolic names of the values in our application. The names of variables are also identifiers under certain conditions:

- A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).

#### Variable Declaration
The variable declaration is done in two types: 
1. Global
2. Local

The **var** declaration type can be used for both global and local scope.
The **const** and **let**  syntax  have the local scope .


> #### WARNING!!!
>  You can also simply assign a value to a variable For example, `x = 42`. This form creates an undeclared global variable. It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.

A variable declared using the `var` or `let` statement with no assigned value specified has the value of `undefined`The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.").

An attempt to access an undeclared variable results in a `ReferenceError`The ReferenceError (object represents an error when a non-existent variable is referenced.) exception being thrown:


```js
var a;
console.log('The value of a is ' + a); // The value of a is undefined
```js
let x;
console.log('The value of x is ' + x); // The value of x is undefined

```
#### Constants
You can create a read-only, named constant with the `const`.Constants are block-scoped, much like variables defined using the let statement. The value of a constant can't be changed through reassignment, and it can't be redeclared keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign ($) and can contain alphabetic, numeric, or underscore characters.

```js
const PI = 3.14;
```

#### Data Types

The latest ECMAScript standard defines eight data types:

-   Seven data types that are  primitives : In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol."):
    -   **Boolean**: In computer science, a Boolean is a logical data type that can have only the values true or false.  `true`  and  `false`.
    -   **null**: In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.
     A special keyword denoting a null value. Because JavaScript is case-sensitive,  `null`  is not the same as  `Null`,  `NULL`, or any other variant.
    -   **undefined**: undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments. A top-level property whose value is not defined.
    -   **Number**: In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums. An integer or floating point number. For example:  `42`  or  `3.14159`.
    -   **BigInt**: In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format. In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums. An integer with arbitrary precision.
     For example:  `9007199254740992n`.
    -   **String**: In any computer programming language, a string is a sequence of characters used to represent text. A sequence of characters that represent a text value.
    For example: "Howdy"
    -   **Symbol**: In JavaScript, Symbol is a primitive value,(new in ECMAScript 2015). A data type whose instances are unique and immutable.
     -   **Object**: Object refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.


#### Array Literals
An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (`[]`). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.
```js
var coffees = ['French Roast', 'Colombian', 'Kona'];
```

#### Boolean Literals
The Boolean type has two literal values:  `true`  and  `false`.

Do not confuse the primitive Boolean values  `true`  and  `false`  with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type.


#### Object Literals
An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). Do not use an object literal at the beginning of a statement. This will lead to an error or not behave as you expect, because the { will be interpreted as the beginning of a block.
```js
var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };
```


#### JavaScript Engine
The engine is the part that reads and executes source code. Each major browser vendor has its own engine. For example, Mozilla Firefox has Spidermonkey, Microsoft Edge has Chakra/ChakraCore and Apple Safari names its engine JavaScriptCore. Google Chrome uses V8, which is also the engine of Node.js.

A  **JavaScript engine**  is a computer program that executes  **JavaScript**  (JS) code. The first  **JavaScript engines**  were mere interpreters, but all relevant modern  **engines**  utilize just-in-time compilation for improved performance.JavaScript engines are typically developed by web browser vendors, and every major browser has one.
There are several JavaScript Engines such as : 

### Control Flow And Error Handling
JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application. The Javascript expression is also known as the statement.
The various types of statements are: 
1. Block Statements. 
2. if...else Statements.
3. Conditional Statements. 
4. Switch Statements.
- Exception handling Statements
5. throw statements.
6. try.......catch statement.

### Loops and Iterations
There are diiferent types of the loops, but they all essentially do the same thing, they repeat an action some number of times (and it's actually possible that number could be zero). The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

The diiferent types of the looping statements are:
1. for statement: A for loop repeats until  a specified condition evaluates to false.
```
for ([initialExpression]; [condition]; [incrementExpression])
```
2. do....while statement: The do-while statement repeats until the specified condition evaluates to false.
```
do
  statement
while (condition);
```
3. while statement: A while statement executes its statements as long as a specified condition evaluates to true.
```
while (condition)
  statement
```
4. labeled statements: A label provides a statement with an identifier that lets you refer to it elsewhere in your program.
```
label :
	statement
```
5. break statements: the break statement to terminate a loop, `switch`, or in conjunction with a labeled statement.
```
break [_label_];
```
6. continue statement: The continue  statement can be used to restart a `while`, `do-while`, `for`, or `label` statement.
```
continue [_label_];
```
7. for.....in statements: The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.
```
for (variable in object)
  statement
  ```
8. for......of statements: The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, argumentsobject and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```
for (_variable_ of _object_)
  _statement_
  ```


#### Type Errors
The TypeError object repressents an error when a value is not of expected type.
```
new TypeError([message[, fileName[, lineNumber]]])
```

The type error is thrown when an operand or argument passed to a function is incompatible with the type expected by that operator or function.

- The global TypeError contains no methods of its own, however, it does inherit some methods through the prototype chain.

#### ERROR
The error constructor creates an error object. Instances of `Error` objects are thrown when runtime errors occur. The `Error` object can also be used as a base object for user-defined exceptions.

- Runtime errors result in new ERROR objects being created and thrown.

```
new Error([message[, fileName[, lineNumber]]])
```


### Strict Mode
JavaScript's strict mode is a way to _opt in_ to a restricted variant of JavaScript.Strict mode isn't just a subset: it _intentionally_ has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode.

Strict mode makes several changes to normal JavaScript semantics:

1.  Eliminates some JavaScript silent errors by changing them to throw errors.
2.  Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3.  Prohibits some syntax likely to be defined in future versions of ECMAScript.

Strict mode applies to _entire scripts_ or to _individual functions_. It doesn't apply to block statements enclosed in `{}` braces; attempting to apply it to such contexts does nothing. `eval` code, `Function` code, event handler attributes, strings passed to WindowTimers.setTimeout(), and related functions are entire scripts, and invoking strict mode in them works as expected.

**Syntax**
```js
// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";
```

