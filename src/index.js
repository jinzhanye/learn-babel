const fn = () => 1;

class Foo {
  getName() {
    return 'name'
  }
}

[1, 2, 3].includes(3)

Object.assign({}, {
  a: 123
})

new Promise((r) => {
  r(1)
});

async function myAsyncFn() {
  console.log(1)
  await new Promise((r) => {
    r(1)
  });
}
