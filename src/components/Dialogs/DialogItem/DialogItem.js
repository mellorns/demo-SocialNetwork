import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return(
        // className={`${s.dialog} ${ s.active}`}
    <div className={s.dialog} >
        <img src={props.avatar} />
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default DialogItem;