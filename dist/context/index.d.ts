/// <reference types="react" />
export interface WalletContextProps {
    account: string;
    checkWallet: () => unknown;
    requestAccount: () => unknown;
}
export declare const WalletContext: import("react").Context<WalletContextProps>;
