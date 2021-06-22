import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "758fd0a7-fe3b-4343-9b2a-14a1b142fc64"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}


export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string |null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}