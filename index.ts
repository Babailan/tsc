function map<S, T>(arr: S[], func: (arg: S) => T) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
};


map([1, 2, 3, 4], (p) => {
})
