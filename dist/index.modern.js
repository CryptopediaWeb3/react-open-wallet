import React, { createContext, useEffect, useState, useContext } from 'react';

const WalletContext = createContext({
  account: '',
  checkWallet: () => {},
  requestAccount: () => {}
});

const checkWallet = () => {
  if (!window.ethereum) {
    console.error('Install MetaMask');
  }

  return window.ethereum !== undefined || window.ethereum !== null;
};
const requestAccount = async setAccount => {
  if (window.ethereum) {
    const metaAccounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    setAccount(metaAccounts[0]);
  }
};

const useListener = setAccount => {
  useEffect(() => {
    checkWallet();

    const updateWallet = metaAccounts => {
      if (metaAccounts.length) {
        setAccount(metaAccounts[0]);
      } else {
        setAccount('');
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', updateWallet);
      window.ethereum.request({
        method: 'eth_accounts'
      }).then(updateWallet);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', updateWallet);
      }
    };
  }, [setAccount]);
};

const WalletProvider = ({
  children
}) => {
  const [account, setAccount] = useState('');

  const getAccount = () => requestAccount(setAccount);

  useListener(setAccount);
  return React.createElement(WalletContext.Provider, {
    value: {
      account,
      checkWallet,
      requestAccount: getAccount
    }
  }, children);
};

const OpenWallet = () => {
  const {
    requestAccount
  } = useWallet();
  return React.createElement("button", {
    style: {
      appearance: 'none',
      outline: 'none',
      backgroundImage: 'linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
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
    },
    onClick: requestAccount
  }, "Connect Wallet");
};
const useWallet = () => {
  const walletCtx = useContext(WalletContext);
  return walletCtx;
};

export default WalletProvider;
export { OpenWallet, useWallet };
//# sourceMappingURL=index.modern.js.map
