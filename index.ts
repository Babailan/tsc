interface Types {
  number: [number];
}

const test: Types = {
  number: [1],
};

const yawa: string | number = 2;

function bigint(bigInt: any) {
  console.log(bigInt);
  bigInt += 1;
  return bigint(bigInt);
}
const harorot = bigint(1);
console.log(harorot);
