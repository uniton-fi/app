'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {TonConnectUIProvider, TonConnectButton} from '@tonconnect/ui-react';
import { Locales, useTonConnectUI } from '@tonconnect/ui-react';

export default function Home() {
    return (
        <TonConnectUIProvider manifestUrl={'https://main.d1h490shf3nbdl.amplifyapp.com/tonconnect-manifest.json'}>
            <div className={styles.page}>
                <main className={styles.main}>
                    <TonConnectButton />
                </main>
            </div>
        </TonConnectUIProvider>
    );
}
