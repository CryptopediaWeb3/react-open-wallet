import React from 'react';
/**
 * Verify if you have MetaMask installed
 * @returns {boolean}
 */
export declare const checkWallet: () => boolean;
/**
 * Get MetaMask accounts
 * @param {React.Dispatch<React.SetStateAction<string>>} setAccount
 * @returns {Promise<void>}
 */
export declare const requestAccount: (setAccount: React.Dispatch<React.SetStateAction<string>>) => Promise<void>;
