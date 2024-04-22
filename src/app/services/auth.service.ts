import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { usuarios } from '../shared/user.interfase';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afauth:AngularFireAuth,private asf:AngularFirestore) { }



  // async register(email:string,password:string):Promise<user>{
  //   try{
  //     const {user} = await this.afauth.createUserWithEmailAndPassword(email,password);
  //     return user;
  //   }catch(err){
  //     console.log("error en login",err);

  //   }
  // }

  login(email:string,password:string){
    return this.afauth.signInWithEmailAndPassword(email,password);
  }

  logOut(){
    return this.afauth.signOut();
  }

  register(email:string,password:string){
    return this.afauth.createUserWithEmailAndPassword(email,password);
  }

  async getUid(){
    const user = await  this.afauth.currentUser;
    if (user === null){
      return null;
    } else {
        return user.uid;
    }
  }



  // async login(email:string,password:string):Promise<user>{
  //   try{
  //     const {user} = await this.afauth.signInWithEmailAndPassword(email,password);
  //     return user;
  //   }catch(err){
  //     console.log("error en login",err);
  //   }
  // }

  // async logaut():Promise<void>{
  //   try{
  //     await this.afauth.signOut();
  //   }catch (err){
  //     console.log('error',err);
  //   }
  // }


  // async resetpassword(email:string):Promise<void>{
  //   try{
  //     return this.afauth.sendPasswordResetEmail(email);
  //   }catch(err){
  //     console.log("error en login",err);
  //   }
  // }



}
