const fs = require('fs')

const ts = ['structural','behavioral','creational']
ts.forEach(t => {
  const ps = fs.readdirSync(`./${t}`)

  console.log(`* ❌ [${t}](https://github.com/iamsergo/dp_ts/tree/main/${t})`)
  ps.forEach(p => {
    console.log(`  * ❌ [${p}](https://github.com/iamsergo/dp_ts/tree/main/${t}/${p})`)
  })
})