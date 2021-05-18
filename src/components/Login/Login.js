import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "../Common/formsControls/formsControls.Module.css"
import {login} from "../../Redux/auth-reducer";

const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', "email", Input, [required])}
            {createField('Password', "password", Input, [required], {type: 'password'})}
            {createField(null, "rememberMe", Input, [], {type: 'checkbox'}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField("Symbols from image", "captcha", Input, [required], {}, )}

            <div>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>
                }
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    debugger
    return (

        <h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}  />
        </h1>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)



