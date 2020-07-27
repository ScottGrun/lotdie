# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @scottgrun/lotide`

**Require it:**

`const _ = require('@scottgrun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(...)`: returns the array given minus the first element
* `middle(...)`: returns the middle of an array 
* `map(...)`: takes an array and applies a callback to each element in the array and returns a new array with the results
* `assertArraysEqual(...)`: logs weather a given array matches the expected array
* `assertEqual(...)`: logs wether the given value matches the passed expected value
* `assertObjects(...)`: logs weather the given object matches the expected object
* `countLetters(...)`: when passed a string returns a object counting the occurences of each letter in the string
* `countOnly(...)`: counts number of occurences of specified elements 
* `eqArrays(...)`: checks if two arrays are equal and returns true or false
* `eqObjects(...)`: checks if two given objects are equal and returns true or false
* `findKeyByValue(...)`: searches an object returns the first key has a value that matches the given value
* `findKeys(...)`: finds a key that matches a given value
* `flatten(...)`: flattens a nested array into a 1 dimensional one
* `head(...)`: returns the first element in the array
* `letterPositions(...)`: returns a object containing the index of each letter in the string
* `takeUntil(...)`: will push elements into a new array until a given value or element is found
* `without(...)`: returns a new array missing the passed elements to exclude
