var isIsomorphic = function (s, t) {
  const arrS = Array.from(s.split(""));
  const arrT = Array.from(t.split(""));
  const mapObj = {};
  let res = true;

  arrS.map((char, index) => {
    if (mapObj[char]) {
      if (mapObj[char] !== arrT[index]) {
        res = false;
        return;
      }
    } else {
      if (Object.values(mapObj).includes(arrT[index])) {
        res = false;
        return;
      } else {
        mapObj[char] = arrT[index];
      }
    }

    return mapObj;
  });

  return res;
};
