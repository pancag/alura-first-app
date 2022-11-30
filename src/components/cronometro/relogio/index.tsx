import React from "react";
import style from './relogio.module.scss'

export default function Relogio() {
    return (
        <>
            <span className={style.RelogioNumero}>0</span>
            <span className={style.RelogioNumero}>0</span>
            <span className={style.RelogioDivisão}>:</span>
            <span className={style.RelogioNumero}>0</span>
            <span className={style.RelogioNumero}>0</span>
        </>
    )
}