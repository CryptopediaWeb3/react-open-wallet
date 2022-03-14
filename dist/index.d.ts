import React from 'react';
import { WalletContextProps } from './context';
declare const WalletProvider: React.FC;
export declare const OpenWallet: React.FC;
declare global {
    interface Window {
        ethereum: unknown;
    }
}
export declare const useWallet: () => WalletContextProps;
export default WalletProvider;
