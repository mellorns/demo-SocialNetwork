import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div> {props.login}  - <button onClick={props.logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
}

export default Header;