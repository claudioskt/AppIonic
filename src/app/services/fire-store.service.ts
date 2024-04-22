import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FireStoreService {
  constructor(public database:AngularFirestore) { }
  
  crearDoc(data: any, path:string,id:string){
    const coleccion = this.database.collection(path);
    return coleccion.doc(id).set(data);
  }

  getDoc<tipo>(path:string,id:string){
    const coleccion =this.database.collection<tipo>(path);
    return coleccion.doc(id).valueChanges();
  }
  getId(){
    return this.database.createId();
  }

  getCollection<tipo>(path:string){
    const coleccion =this.database.collection<tipo>(path);
    return coleccion.valueChanges();
  }

}

