export let ip!: string
export let port!: string | number

if (process.env.NODE_ENV === "production") {
  ip = location.hostname // IP地址
  port = location.port // 端口号
} else if (process.env.NODE_ENV === "development") {
  ip = "10.138.146.62" // IP地址 何天宝10.138.146.44 彭勇10.138.146.62 伟伟 10.138.146.59 锋训 10.138.146.52
  port = 80 // 端口号
}
export const baseApi = `http://${ip}:${port}` // configs for production and development
// 有tab切换的页面,存储选中页面的名称
export enum Sessions {
  userName = "user_name", // 用户名
  token = "token", //  token
}