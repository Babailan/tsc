function map<S, T>(arr: S[], func: (arg: S) => T) {
  return arr.map(func);
};



[1, 2, 3, 4].map((s) => {
  console.log(s);
});