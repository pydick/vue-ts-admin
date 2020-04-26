import request from "@/utils/request";

/**
 * 登录
 * @param {string} userName
 * @param {string} passWord
 * @return {AxiosPromise}
 */
export const login = (userName: string, passWord: string) =>
    request({
        url: "/api/login",
        method: "post",
        data: {
            username: userName,
            password: passWord
        }
    });