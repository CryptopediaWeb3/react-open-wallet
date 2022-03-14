import { useEffect } from 'react'
import { checkWallet } from '../tools'

/**
 * Hook for window eth events
 * @param {React.Dispatch<React.SetStateAction<string>>} setAccount
 * @returns {Promise<void>}
 */
export const useListener = (
  setAccount: React.Dispatch<React.SetStateAction<string>>
) => {
  // VERIFY ONE TIME
  useEffect(() => {
    checkWallet()

    // UPDATE STATE
    const updateWallet = (metaAccounts: string[]) => {
      if (metaAccounts.length) {
        setAccount(metaAccounts[0])
      } else {
        setAccount('')
      }
    }

    // CONNECT
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum.on('accountsChanged', updateWallet)

      // @ts-ignore
      window.ethereum
        .request({
          method: 'eth_accounts'
        })
        .then(updateWallet)
    }

    // REMOVE LISTENER
    return () => {
      if (window.ethereum) {
        // @ts-ignore
        window.ethereum.removeListener('accountsChanged', updateWallet)
      }
    }
  }, [setAccount])
}
