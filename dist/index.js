function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var walletContext = React.createContext({
  account: ''
});

var ReactOpenWallet = function ReactOpenWallet(_ref) {
  var children = _ref.children;

  var _useState = React.useState(''),
      account = _useState[0],
      setAccount = _useState[1];

  var checkWallet = function checkWallet() {
    if (!window.ethereum) {
      console.error('Install MetaMask');
    }
  };

  var getAccounts = function getAccounts() {
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

  React.useEffect(function () {
    checkWallet();
  }, []);
  return React__default.createElement(walletContext.Provider, {
    value: {
      account: account
    }
  }, React__default.createElement("button", {
    onClick: getAccounts
  }, "Connect Wallet"), children);
};

var useWallet = function useWallet() {
  var walletCtx = React.useContext(walletContext);
  return walletCtx;
};

exports.default = ReactOpenWallet;
exports.useWallet = useWallet;
exports.walletContext = walletContext;
//# sourceMappingURL=index.js.map
