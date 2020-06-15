const environment = process.env.NODE_ENV; // production else development

export const ip = environment === "production" ? location.hostname : "10.138.146.62";
export const port = environment === "production" ? location.port : "80"
export const baseApi = `http://${ip}:${port}`;
// 有tab切换的页面,存储选中页面的名称
export enum Sessions {
  userName = "user_name", // 用户名
  token = "token", //  token
}
