'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {TonConnectUIProvider, TonConnectButton} from '@tonconnect/ui-react';
import {Locales, useTonConnectUI} from '@tonconnect/ui-react';


export default function Home() {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    const myTransaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "UQD0wDonlezaxX_N6nD4LB78vsGyVNiiJfQVwu_GeLUMPbVD",
                amount: "1000000000",
                // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            }
        ]
    }

    return (
        <main className={styles.main}>
            <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
                Send transaction
            </button>
        </main>
    );
}
