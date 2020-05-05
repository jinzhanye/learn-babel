(() => {
  console.log('hello world')
})()

class Foo {
  getName() {
    return 'name'
  }
}

[1, 2, 3].findIndex((item) => item === 1)

new Promise((r) => {
  r(1)
});

async function myAsyncFn() {
  await new Promise((r) => {
    r(1)
  });
}

export default {
  Foo,
}
