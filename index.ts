function map<Input, Output>(arr: Input, func: (arr: Input) => Output) {
  func(arr);
};
function printConsole(s: string) {
  console.log(s);
};
interface CallOrConstruct {
  new(s: string): Date;
  (n?: number): number
};
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  fn("Naruto");
};
greeter((d) => {
  console.log(d);
});
const s = (["a", 2])