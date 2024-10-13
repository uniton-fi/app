import React from "react";
import styles from "./Swap.module.css";
import Image from "next/image";

const Swap = () => {
    return (
        <div className={styles.swapContainer}>
            <p className={styles.swapTitle}>Swap</p>
            <div className={styles.swapWidgetContainer}>
                <SwapInput
                    title={'You send'}
                    balance={'70.42'}
                    tokenIcon={'/ton.png'}
                    tokenName={'TON'}
                />
                <SwapInput
                    title={'You get'}
                    balance={'70.42'}
                    tokenIcon={'/usdt.png'}
                    tokenName={'USDT'}
                    readonly={'readonly'}
                />
                <div className={styles.exchangeIcon}>
                    <Image src={'/filter-exchange.svg'} alt={'change'} width="24" height="24" />
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.markContainer}>
                    <Image src={'/marked.svg'} alt={'change'} width="9" height="9" />
                </div>
                <span className={styles.detailsText}>1 TON = 1.4455 STON($3.34)</span>
                <div className={styles.detailsExpand}>
                <Image src={'/expand.svg'} alt={'change'} width="20" height="20" />
                </div>
            </div>
            <button className={styles.swapButton}>Swap</button>
        </div>
    );
};

const SwapInput = ({title, balance, tokenIcon, tokenName, readonly}) => {
    return (
        <div className={styles.swapInputContainer}>
            <p className={styles.swapInputTitle}>{title}</p>
            <div className={styles.swapInputLine}>
                <Image src={tokenIcon} alt={tokenName} width="40" height="40" />
                <span className={styles.swapTokenTitle}>{tokenName}</span>
                <input type="text" className={styles.swapInputField} readOnly={readonly} />
            </div>
            <div className={styles.swapBalance}>
                <span>Balance:</span>
                <span>{balance}</span>
            </div>
        </div>
    )
}

export default Swap;
