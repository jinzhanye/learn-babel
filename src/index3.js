async function onLoad() {
  const hell = 'ddddd'

  this.setData({
    msg: 'Hello from Home-Page!',
  })

  const res = await new Promise((r)=> {
    r(9)
  })

  console.log('res', res)
}
