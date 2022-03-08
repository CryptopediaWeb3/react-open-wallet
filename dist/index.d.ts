import React from 'react';
export declare const walletContext: React.Context<{
    account: string;
}>;
declare const ReactOpenWallet: React.FC;
declare global {
    interface Window {
        ethereum: unknown;
    }
}
export declare const useWallet: () => {
    account: string;
};
export default ReactOpenWallet;
