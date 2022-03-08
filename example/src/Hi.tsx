import React from 'react'
import { useWallet } from 'react-open-wallet'

const Hi: React.FC = () => {
  const { account } = useWallet()
  return <p>My wallet: {account}</p>
}

export default Hi
