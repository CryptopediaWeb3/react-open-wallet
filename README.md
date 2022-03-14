# react-open-wallet

[![NPM](https://img.shields.io/npm/v/react-open-wallet.svg)](https://www.npmjs.com/package/react-open-wallet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-open-wallet
```

## Normal usage

ReactOpenWallet generate a styled button at the top of your component within a provider (at this time just works with MetaMask)

```tsx
import React, { Component } from 'react'

import ReactOpenWallet, { OpenWallet } from 'react-open-wallet'

class App extends Component {
  render() {
    return (
      <ReactOpenWallet>
        <OpenWallet />
      </ReactOpenWallet>
    )
  }
}
```

## Advanced usage

If you want to control the flow of the wallet just set hideButton to true and use the context hook

```
app.tsx
```

```tsx
import React, { Component } from 'react'

import ReactOpenWallet from 'react-open-wallet'

class App extends Component {
  render() {
    return (
      <ReactOpenWallet hideButton>
        <Home />
      </ReactOpenWallet>
    )
  }
}
```

```
home.tsx
```

```tsx
import React, { Component } from 'react'

import { useWallet } from 'react-open-wallet'

class Home extends Component {
  const { requestAccount } = useWallet()

  render() {
    return (
      <button onClick={requestAccount}>Connect wallet</button>
    )
  }
}
```

### Context props

| Name           | Type          | Default | Description                          |
| -------------- | ------------- | ------- | ------------------------------------ |
| account        | string        | ''      | Your current wallet address          |
| checkWallet    | () => boolean | void    | Check if you have MetaMask installed |
| requestAccount | () => void    | void    | Open MetaMask connect button         |

## License

MIT © [CryptopediaWeb3](https://github.com/CryptopediaWeb3)
