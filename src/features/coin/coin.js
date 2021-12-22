import React from "react"
import { useSelector } from "react-redux"

export default function Coin(){
    const count = useSelector((state)=> state.counter.count);
    const themeTextColor = useSelector((state) => state.theme.color);
    return(
        <div>
            <span style={{color: themeTextColor }}>Coint: {count}</span>
        </div>
    )
}