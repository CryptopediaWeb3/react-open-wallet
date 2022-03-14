import { createContext } from 'react'

export interface WalletContextProps {
  account: string
  checkWallet: () => unknown
  requestAccount: () => unknown
}

export const WalletContext = createContext<WalletContextProps>({
  account: '',
  checkWallet: () => {},
  requestAccount: () => {}
})
