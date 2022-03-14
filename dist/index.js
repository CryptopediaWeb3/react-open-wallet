function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var WalletContext = React.createContext({
  account: '',
  checkWallet: function checkWallet() {},
  requestAccount: function requestAccount() {}
});

var checkWallet = function checkWallet() {
  if (!window.ethereum) {
    console.error('Install MetaMask');
  }

  return window.ethereum !== undefined || window.ethereum !== null;
};
var requestAccount = function requestAccount(setAccount) {
  try {
    var _temp2 = function () {
      if (window.ethereum) {
        return Promise.resolve(window.ethereum.request({
          method: 'eth_requestAccounts'
        })).then(function (metaAccounts) {
          setAccount(metaAccounts[0]);
        });
      }
    }();

    return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
};

var useListener = function useListener(setAccount) {
  React.useEffect(function () {
    checkWallet();

    var updateWallet = function updateWallet(metaAccounts) {
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

    return function () {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', updateWallet);
      }
    };
  }, [setAccount]);
};

var WalletProvider = function WalletProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(''),
      account = _useState[0],
      setAccount = _useState[1];

  var getAccount = function getAccount() {
    return requestAccount(setAccount);
  };

  useListener(setAccount);
  return React__default.createElement(WalletContext.Provider, {
    value: {
      account: account,
      checkWallet: checkWallet,
      requestAccount: getAccount
    }
  }, children);
};

var OpenWallet = function OpenWallet() {
  var _useWallet = useWallet(),
      requestAccount = _useWallet.requestAccount;

  return React__default.createElement("button", {
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
var useWallet = function useWallet() {
  var walletCtx = React.useContext(WalletContext);
  return walletCtx;
};

exports.OpenWallet = OpenWallet;
exports.default = WalletProvider;
exports.useWallet = useWallet;
//# sourceMappingURL=index.js.map
