const info = {
  [Symbol("a")]: "b",
};

console.log(info);       //{ [Symbol(a)]: 'b' }
console.log(Object.keys(info));   //[]

const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);   //{}  []

console.log(`${((x) => x)("I love")} to program`);   //I love to program