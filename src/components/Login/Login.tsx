import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../Common/formsControls/formsControls.module.css"
import {login} from "../../Redux/auth-reducer";
import React from "react";
import {AppStateType} from "../../Redux/redux-store";

type  LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', "email", Input, [required])}
            {createField<LoginFormValuesTypeKeys>('Password', "password", Input, [required], {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", Input, [], {type: 'checkbox'}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", Input, [required], {},)}

            <div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type LoginFormValuesType = {
    email: string
    password: number
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


type MapDispatchPropsType = {
    login: (email: string,
            password: number,
            rememberMe: boolean,
            captcha: string
    ) => void
}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <h1>

            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={props.captchaUrl}/>
        </h1>
    )
}

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)



