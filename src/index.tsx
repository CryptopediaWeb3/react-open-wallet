import React, { useState, useContext } from 'react'

import { WalletContext, WalletContextProps } from './context'
import { checkWallet, requestAccount } from './tools'
import { useListener } from './hooks'

// COMPONENT
const WalletProvider: React.FC = ({ children }) => {
  // WALLET STATE
  const [account, setAccount] = useState<string>('')

  // REQUEST ACCOUNTS
  const getAccount = () => requestAccount(setAccount)

  // HOOKS
  useListener(setAccount)

  return (
    <WalletContext.Provider
      value={{ account, checkWallet, requestAccount: getAccount }}
    >
      {children}
    </WalletContext.Provider>
  )
}

// OPEN WALLET BUTTON
export const OpenWallet: React.FC = () => {
  const { requestAccount } = useWallet()

  return (
    <button
      style={{
        appearance: 'none',
        outline: 'none',
        backgroundImage:
          'linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
        borderRadius: '10px',
        borderStyle: 'none',
        boxSizing: 'border-box',
        color: '#FFFFFF',
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '15px ',
        textAlign: 'center'
      }}
      onClick={requestAccount}
    >
      Connect Wallet
    </button>
  )
}

// SETTING ETH GLOBAL OBJECT
declare global {
  interface Window {
    ethereum: unknown
  }
}

// CONTEXT HOOK
export const useWallet = () => {
  const walletCtx: WalletContextProps = useContext(WalletContext)
  return walletCtx
}

export default WalletProvider
