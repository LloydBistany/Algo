/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

function fastCache(func) {
  // declare a cache to hold results of function calls on arguments
  const cache = {}
  return function cacher(arg) {
    // if result of function called on argument is in cache, return it
    if (cache[arg]) {
      return cache[arg];
    }
    // else, store that value at a new key in the cache
    else {
      return cache[arg] = func(arg);
    }
  }
}

/*
Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
  // declare a cache to hold results of function calls on arguments
  const cache = {};
  return function cacher(...args) {
    // JSON stringify the argument to account for arrays and objects
    let jsonArg = JSON.stringify(args);
    // if result of function called on argument is in cache, return it
    if (cache[jsonArg]) {
      return cache[jsonArg];
    }
    // else, store that value at a new key in the cache
    else {
      return cache[jsonArg] = func(...args)
    }
  }
};

module.exports = { fastCache, fastCacheAdvanced };