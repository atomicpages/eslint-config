module.exports = {
  add: function (a) {
    return function (b) {
      return a + b;
    };
  },
  noConstantCondition: function () {
    if (true) {
      return true;
    }
    return false;
  },
  noReturnAwait: async function () {
    return await Promise.resolve("Hello");
  },
  noBadFormatting() {
    const o = {
      a: 1,
      b: 2,
    };
    console.warn(o);
  },
  noVar() {
    var a = 1;
    return a;
  },
  noLonelyIf() {
    const age = 18;

    if (age > 18) {
      return "Adult";
    } else {
      if (age > 14 && age < 18) {
        return "Teenager";
      }

      return "Child";
    }
  },
  noNestedTernary() {
    const a = 10;
    return a === 10 ? a < 10 : a > 10 ? a > 10 : a === 10;
  },
  preferConst() {
    let o = [1, 2, 3];
    return o;
  },
  unsafeRegExp() {
    let emailExpression =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return emailExpression.test("user@foo.com");
  },
  unicorn() {
    const arr = Array(10);
  },
};
