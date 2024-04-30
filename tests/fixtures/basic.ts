/* eslint-disable @typescript-eslint/no-unused-vars */
function eqeqeq(a: number, b?: number) {
  return a == b;
}

class Foo {
  public a: number;

  constructor() {
    this.a = 1;
    return this.a;
  }
}

function loopFunc() {
  var funcs = [];

  for (var i = 0; i < 10; i++) {
    funcs[i] = function () {
      return i;
    };
  }
}

async function asyncFunc(a: number) {
  if (a === 1) {
    return await Promise.resolve();
  } else if (false) {
  } else {
    return Promise.reject();
  }
}

function oneVar() {
  let a,
    b = 1;
  console.log(a, b);
  alert(a, b);
  throw "oh noes";
}
