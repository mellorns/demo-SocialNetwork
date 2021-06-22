import s from "./Message.module.css";
import React from "react";

type PropsType = {
    massage:string
}

const Massage: React.FC<PropsType> = ({massage}) => {
    return  <div className={s.message}>
        {massage}
    </div>
}

export default Massage;