import React from 'react';
import { WalletContextProps } from './context';
declare const ReactOpenWallet: React.FC<ReactOpenWalletProps>;
declare global {
    interface Window {
        ethereum: unknown;
    }
}
export declare const useWallet: () => WalletContextProps;
export default ReactOpenWallet;
