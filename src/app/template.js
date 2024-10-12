'use client'
import {TonConnectUIProvider} from '@tonconnect/ui-react';
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

export default function RootTemplate({ children }) {
    return (
        <TonConnectUIProvider manifestUrl={'https://main.d1h490shf3nbdl.amplifyapp.com/tonconnect-manifest.json'}>
            <Header/>
            {children}
            <MobileNav/>
        </TonConnectUIProvider>
    );
}
