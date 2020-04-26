// @/store/modules/user.ts
import store from "@/store"
import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from "vuex-module-decorators";
import { Sessions } from "@/utils/config";
import { setSession } from "@/utils/auth";
import { login} from "@/api/login";

@Module({dynamic: true, store, name: "user"})
export default class UserModule extends VuexModule {
    public token = ""
    public roles: string[] = []
    public userName = ""
    public cameraName = ""
    public cameraType = ""

     // 登录
     @Action({ commit: "SET_TOKEN" })
     public async Login(userInfo: { username: string; password: string }): Promise<string> {
       try {

         const username: string = userInfo.username.trim();
         const password: string = userInfo.password.trim();

         // 调登录接口
         const response: any = await login(username, password);

         if (response.code === 0) {
           const token: string = response.data.access_token;

           setSession(Sessions.userName, String(username))
           setSession(Sessions.token, token);
           return "";
         }
         throw response.msg


       } catch (e) {
         return Promise.reject(e)
       }

     }

    @Mutation
    private SET_TOKEN(token: string) {
      this.token = token;
    }
}