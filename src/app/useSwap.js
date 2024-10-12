import { Factory, MAINNET_FACTORY_ADDR, Asset, PoolType } from '@dedust/sdk';
import { Address, TonClient4, beginCell } from "@ton/ton";
import { toNano } from '@ton/core';
import {useTonConnectUI} from "@tonconnect/ui-react";


export const useSwap = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    const confirmSwap = async () => {
        const tonClient = new TonClient4({ endpoint: "https://mainnet-v4.tonhubapi.com" });
        const factory = tonClient.open(Factory.createFromAddress(MAINNET_FACTORY_ADDR));
        const tonVault = tonClient.open(await factory.getNativeVault());

        const TOKEN_ADDRESS = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
        const TOKEN1 = Asset.native();
        const TOKEN2 = Asset.jetton(TOKEN_ADDRESS);

        const pool = tonClient.open(await factory.getPool(PoolType.VOLATILE, [TOKEN1, TOKEN2]));
        const amountIn = toNano('5');
        await tonVault.sendSwap(tonClient, {
            poolAddress: pool.address,
            amount: amountIn,
            gasAmount: toNano("0.25"),
        });

        console.log(pool)

        // const myTransaction = {
        //     validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        //     messages: [
        //         {
        //             address: "UQD0wDonlezaxX_N6nD4LB78vsGyVNiiJfQVwu_GeLUMPbVD",
        //             amount: "1000000000",
        //             // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
        //         }
        //     ]
        // }
        //
        // await tonConnectUI.sendTransaction(myTransaction);
    }

    return {
        confirmSwap
    };
};
