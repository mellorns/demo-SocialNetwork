import s from "./Message.module.css";

const Massage = (props) => {
    return  <div className={s.message}>
        {props.massage}
    </div>
}

export default Massage;