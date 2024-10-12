import React from "react";
import styles from "./MobileNav.module.css";
import Link from 'next/link'
import Image from "next/image";

const MobileNav = () => {
    return (
        <div className={styles.mobileNav}>
            <MobileNavItem iconName={'/icon_home.png'} name={'Swap'} path={'/'}/>
            <MobileNavItem iconName={'/icon_pools.png'} name={'Pools'} path={'/pools'}/>
            <MobileNavItem iconName={'/icon_portfolio.png'} name={'Portfolio'} path={'/portfolio'}/>
        </div>
    );
};

const MobileNavItem = ({iconName, name, path}) => {
    return (
        <div>
            <Link href={path}>
                <Image src={iconName} alt={name} width="20" height="20" />
                <span>{name}</span>
            </Link>
        </div>
    )
}

export default MobileNav;
