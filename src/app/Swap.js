import React, {useState} from "react";
import styles from "./Swap.module.css";
import Image from "next/image";
import {useSwap} from "./useSwap";
import classNames from "classnames";
import {useTonAddress} from "@tonconnect/ui-react";

const rate = 5.3

const Swap = () => {
    const {confirmSwap} = useSwap();
    const walletAddress = useTonAddress();
    const [amount, setAmount] = useState('0');
    const [receive, setReceive] = useState('0');

    function isFloat(val) {
        return /^[0-9]+(\.)?[0-9]*$/.test(val)
    }

    const round = (num) => {
        return Math.round(num * 100) / 100
    }

    const onAmountChange = (e) => {
        var newAmount = e.target.value;
        if(newAmount === "") {
            newAmount = "0";
        } else if(!isFloat(newAmount)) {
            return;
        }
        setAmount(parseFloat(newAmount));
        setReceive(round(parseFloat(newAmount) * rate))
    }

    return (
        <div className={styles.swapContainer}>
            <p className={styles.swapTitle}>Swap</p>
            <div className={styles.swapWidgetContainer}>
                <SwapInput
                    title={'You send'}
                    balance={'70.42'}
                    tokenIcon={'/ton.png'}
                    tokenName={'TON'}
                    value={amount}
                    onChange={onAmountChange}
                />
                <SwapInput
                    title={'You get'}
                    balance={'5.20'}
                    tokenIcon={'/usdt.png'}
                    tokenName={'USDT'}
                    readonly={'readonly'}
                    value={receive}
                />
                <div className={styles.exchangeIcon}>
                    <Image src={'/filter-exchange.svg'} alt={'change'} width="24" height="24" />
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.markContainer}>
                    <Image src={'/marked.svg'} alt={'change'} width="9" height="9" />
                </div>
                <span className={styles.detailsText}>1 TON = {rate} USDT(${rate})</span>
                <div className={styles.detailsExpand}>
                <Image src={'/expand.svg'} alt={'change'} width="20" height="20" />
                </div>
            </div>
            <button className={classNames({
                [styles.swapButton]: true,
                [styles.swapButtonActive]: walletAddress !== "",
            })} onClick={walletAddress !== "" ? () => confirmSwap(amount) : null}>Swap</button>
        </div>
    );
};

const SwapInput = ({title, balance, tokenIcon, tokenName, readonly, value, onChange}) => {
    return (
        <div className={styles.swapInputContainer}>
            <p className={styles.swapInputTitle}>{title}</p>
            <div className={styles.swapInputLine}>
                <Image src={tokenIcon} alt={tokenName} width="40" height="40" />
                <span className={styles.swapTokenTitle}>{tokenName}</span>
                <input type="text" className={styles.swapInputField} readOnly={readonly} value={value} onChange={onChange} />
            </div>
            <div className={styles.swapBalance}>
                <span>Balance:</span>
                <span>{balance}</span>
            </div>
        </div>
    )
}

export default Swap;
