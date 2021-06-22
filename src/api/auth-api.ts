import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";


type MeResponseType = {
        id: number
        email: string
        login: string
}
type LoginResponseType = {
        userId: number
}


export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`,).then(res => res.data)
    },
    login(email: string, password: number, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data)
    }
}