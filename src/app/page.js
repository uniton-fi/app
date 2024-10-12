'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {Locales, useTonConnectUI} from '@tonconnect/ui-react';
import {useSwap} from "./useSwap";
import Swap from "./Swap";

export default function Home() {
    const {confirmSwap} = useSwap();

    return (
        <main className={styles.main}>
            <Swap/>
        </main>
    );
}
