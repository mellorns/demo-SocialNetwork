import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "758fd0a7-fe3b-4343-9b2a-14a1b142fc64"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `, {
            withCredentials: true
        }).then(response => response.data)
    },

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    },
    login(email, password, rememberMe = false,captcha= null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId, {})
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const followAPI = {
    followApi(id) {
        return instance.post(`follow/` + id, {
            withCredentials: true
        }).then(response => response.data)
    }
}
export const unfollowAPI = {
    unfollowApi(id) {
        return instance.delete(`follow/` + id, {
            withCredentials: true
        }).then(response => response.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}