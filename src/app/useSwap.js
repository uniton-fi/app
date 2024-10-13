import { Factory, MAINNET_FACTORY_ADDR, Asset, PoolType, VaultNative, Vault } from '@dedust/sdk';
import { Address, TonClient4, beginCell } from "@ton/ton";
import { toNano } from '@ton/core';
import {useTonConnectUI, useTonAddress} from "@tonconnect/ui-react";


export const useSwap = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const walletAddress = useTonAddress();

    const confirmSwap = async (amount, limit=0) => {
        const poolAddress = Address.parse('EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r');
        const cell = beginCell()
            .storeUint(VaultNative.SWAP, 32)
            .storeUint(0, 64)
            .storeCoins(toNano(amount))
            .storeAddress(poolAddress)
            .storeUint(0, 1)
            .storeCoins(limit ?? 0)
            .storeMaybeRef(null)
            .storeRef(Vault.packSwapParams({
                deadline: Math.floor(Date.now() / 1000) + 60,
                recipientAddress: Address.parse(walletAddress)
            }))
            .endCell()
        const boc = cell.toBoc().toString('base64');

        const sendAmount = toNano(amount) + toNano('0.2');
        const myTransaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: 'EQDa4VOnTYlLvDJ0gZjNYm5PXfSmmtL6Vs6A_CZEtXCNICq_',
                    amount: sendAmount.toString(),
                    payload: boc
                }
            ]
        }

        await tonConnectUI.sendTransaction(myTransaction);
    }

    return {
        confirmSwap
    };
};
