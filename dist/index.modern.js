import React, { createContext, useState, useEffect, useContext } from 'react';

const walletContext = createContext({
  account: ''
});

const ReactOpenWallet = ({
  children
}) => {
  const [account, setAccount] = useState('');

  const checkWallet = () => {
    if (!window.ethereum) {
      console.error('Install MetaMask');
    }
  };

  const getAccounts = async () => {
    if (window.ethereum) {
      const metaAccounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(metaAccounts[0]);
    }
  };

  useEffect(() => {
    checkWallet();
  }, []);
  return React.createElement(walletContext.Provider, {
    value: {
      account
    }
  }, React.createElement("button", {
    onClick: getAccounts
  }, "Connect Wallet"), children);
};

const useWallet = () => {
  const walletCtx = useContext(walletContext);
  return walletCtx;
};

export default ReactOpenWallet;
export { useWallet, walletContext };
//# sourceMappingURL=index.modern.js.map
