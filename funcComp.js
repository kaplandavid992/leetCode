const compose = function(functions) {
    return function(x) {
      return functions.reduceRight((result, fn) => fn(result), x);
    };
  }; 

  const functions = [x => x + 1, x => x * x, x => 2 * x];
  compose(functions);