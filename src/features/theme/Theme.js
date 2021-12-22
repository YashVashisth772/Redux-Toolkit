import { useState } from "react"
import { themeReducer } from "./themeSlice";
import { useDispatch ,useSelector } from "react-redux";

export default function Theme(){
    const [color,setColor] = useState('');
    const dispatch = useDispatch();
    // const col = useSelector((state)=> state.theme.color);
    // console.log('col',col);
    return(
        <div>
            <input className="textbox" type="text" onChange={e=> setColor(e.target.value)} />
            <button className="button"
             onClick={()=>dispatch(themeReducer(color))}  
            >Change Text Color</button>
        </div>
    )
}