// 全局控制修改session
export const getSession = (key = "SessionName") => sessionStorage.getItem(key);
export const setSession = (key = "SessionName", name: string) => sessionStorage.setItem(key, name)
export const removeSession = (key = "SessionName") => sessionStorage.removeItem(key)
export const clearSession = () => sessionStorage.clear()