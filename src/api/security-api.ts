import {instance} from "./api";



type SecurityApiResponseType = {
    url: string
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<SecurityApiResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}