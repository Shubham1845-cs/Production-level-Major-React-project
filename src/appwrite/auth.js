import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";
export class AuthService{
  client =new Client();
  account;
  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
        const userAccount= await this.account.create(ID.unique(), email, password, name);
      if (userAccount)
      {
        // go for the login
        return this.login({email,password});
      }
      else{
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email,password})
  {
    try {
        
        return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error;
    }
  }
  async getCurrentUser()
  {
   try {
     const current=  await this.account.get();
     if(current)
     {
        return current;
     }
     else{
        return null;
     }
   } catch (error) {
       console.log("appwrite service:: error",error);
   }
   
  }
  async logout()
  {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        throw error;
    }
  }
}
const authService=new AuthService();

export default authService;