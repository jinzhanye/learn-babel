// import 'core-js'

const fn = () => 1;

(() => {
  console.log('1232')
})()


function bbq() {

}

class Foo {
  getName() {
    return 'name'
  }
}

[1, 2, 3].findIndex((item) => item === 1)

Object.assign({}, {
  a: 123
})

new Promise((r) => {
  r(1)
});

[1, 2, 3].includes(3)

Array.from('1,2,3,4')

async function myAsyncFn() {
  await new Promise((r) => {
    r(1)
  });
}

class Bork {
  //Property initializer syntax
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  };

  //Static class properties
  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  };
}
