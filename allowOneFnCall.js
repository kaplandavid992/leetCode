function once(fn) {
    let initialized = false; 
    
    return function(...args) {
      if (!initialized) {
        initialized = true;
        return fn(...args); 
      }
      
      return undefined; 
    };
  }