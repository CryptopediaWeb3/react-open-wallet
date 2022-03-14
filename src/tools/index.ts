import React from 'react'

/**
 * Verify if you have MetaMask installed
 * @returns {boolean}
 */
export const checkWallet = (): boolean => {
  if (!window.ethereum) {
    console.error('Install MetaMask')
  }

  return window.ethereum !== undefined || window.ethereum !== null
}

/**
 * Get MetaMask accounts
 * @param {React.Dispatch<React.SetStateAction<string>>} setAccount
 * @returns {Promise<void>}
 */
export const requestAccount = async (
  setAccount: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  if (window.ethereum) {
    // @ts-ignore
    const metaAccounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    setAccount(metaAccounts[0])
  }
}
