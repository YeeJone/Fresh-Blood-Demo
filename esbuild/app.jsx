import * as React from 'react'
import * as Server from 'react-dom/server'

import Hello from './Hello'

let Greet = () => {
  return <div>esbuild test <Hello /></div>
}

console.log(Server.renderToString(<Greet />))