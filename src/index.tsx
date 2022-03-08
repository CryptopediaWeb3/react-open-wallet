import React, { createContext, useEffect, useState, useContext } from 'react'

export const walletContext = createContext({ account: '' })
const ReactOpenWallet: React.FC = ({ children }) => {
  // ESTADO DE WALLET
  const [account, setAccount] = useState<string>('')

  // VERIFICAR QUE TENGA METAMASK
  const checkWallet = () => {
    if (!window.ethereum) {
      console.error('Install MetaMask')
    }
  }

  // SOLICITAR CUENTAS
  const getAccounts = async () => {
    if (window.ethereum) {
      // @ts-ignore
      const metaAccounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount(metaAccounts[0])
    }
  }

  // VERIFICAR UNA VEZ
  useEffect(() => {
    checkWallet()
  }, [])

  return (
    <walletContext.Provider value={{ account }}>
      <button onClick={getAccounts}>Connect Wallet</button>
      {children}
    </walletContext.Provider>
  )
}

// CONFIGURACION PARA TYPESCRIPT
declare global {
  interface Window {
    ethereum: unknown
  }
}

// HOOK DE CONTEXTO
export const useWallet = () => {
  const walletCtx = useContext(walletContext)
  return walletCtx
}

export default ReactOpenWallet
