module.exports = (arr, n) => {
  if (!arr.length) return arr;
  for (let i = 0; i < n; i += 1) {
    arr.unshift(arr.pop());
  }
  return arr;
};
