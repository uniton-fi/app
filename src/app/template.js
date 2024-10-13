'use client'
import {TonConnectUIProvider} from '@tonconnect/ui-react';
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import WebApp from '@twa-dev/sdk'
import {useEffect} from "react";

export default function RootTemplate({ children }) {
    useEffect(() => {
        WebApp.expand();
    }, []);
    return (
        <TonConnectUIProvider manifestUrl={'https://main.d1h490shf3nbdl.amplifyapp.com/tonconnect-manifest.json'}>
            <Header/>
            {children}
            <MobileNav/>
        </TonConnectUIProvider>
    );
}
