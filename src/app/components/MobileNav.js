import React from "react";
import styles from "./MobileNav.module.css";
import Link from 'next/link'
import Image from "next/image";

const MobileNav = () => {
    return (
        <div className={styles.mobileNav}>
            <MobileNavItem iconName={'/SwapIcon.svg'} name={'Swap'} path={'/'} titleClass={styles.mobileTitleActive}/>
            <MobileNavItem iconName={'/PoolsIcon.svg'} name={'Pools'} path={'/pools'} titleClass={styles.mobileTitle} />
            <MobileNavItem iconName={'/PortfolioIcon.svg'} name={'Portfolio'} path={'/portfolio'} titleClass={styles.mobileTitle} />
        </div>
    );
};

const MobileNavItem = ({iconName, name, path, titleClass}) => {
    return (
        <Link href={path}>
            <div className={styles.mobileItem}>
                <Image src={iconName} alt={name} width="21" height="21" />
                <span className={titleClass}>{name}</span>
            </div>
        </Link>
    )
}

export default MobileNav;
