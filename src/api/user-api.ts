import {GetItemsType, instance, APIResponseType} from "./api";



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize} `, {
            withCredentials: true
        }).then(response => response.data)
    },
    followApi(id: number) {
        return instance.post<APIResponseType>(`follow/` + id).then(response => response.data)
    },
    unfollowApi(id: number) {
        return instance.delete<APIResponseType>(`follow/` + id, {
            withCredentials: true
        }).then(response => response.data)
    }
}
