import React from "react";
import Image from 'next/image'
import styles from "./Header.module.css";
import {TonConnectButton} from "@tonconnect/ui-react";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={'/'}>
                <Image src={`/logo.png`} alt={'logo'} width="32" height="32" />
            </Link>
            <TonConnectButton />
        </div>
    );
};

export default Header;
