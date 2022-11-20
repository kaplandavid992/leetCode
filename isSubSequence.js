var isSubsequence = function (s, t) {
  const arrS = Array.from(s.split(""));
  const arrT = Array.from(t.split(""));
  let firstMarker = 0;
  let secondMarker = 0;
  let result = true;

  while( firstMarker < arrS.length && secondMarker < arrT.length ) {
    
      if(arrS[firstMarker] === arrT[secondMarker]){
        firstMarker++; secondMarker++;
      } else {
        secondMarker++;
      }
  
  }

  const res = firstMarker === arrS.length;
  return res;
};

