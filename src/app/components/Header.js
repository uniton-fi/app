import React from "react";
import Image from 'next/image'
import styles from "./Header.module.css";
import {TonConnectButton} from "@tonconnect/ui-react";

const Header = () => {
    return (
        <div className={styles.header}>
            <Image src={`/logo_app.png`} alt={'logo'} width="64" height="64" />
            <TonConnectButton />
        </div>
    );
};

export default Header;
