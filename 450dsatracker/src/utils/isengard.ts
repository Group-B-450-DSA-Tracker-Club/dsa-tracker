// @ts-ignore
import LocalBase from 'localbase'



// Object to Store, will be imported from separate file here for simplicity
interface objectToStore{
    name?: string;
    info?: string;
}
// Todo Refactor to have minimal calling to collection, have collection handlers, have db handlers, and have document handlers
// Can all be made into promises, to error handle or become Async
const isengard = {
    isengardDB: generateDB(),
    addDocument: function (document:objectToStore, collectionName:string, key:string){
        this.isengardDB.collection(collectionName).add(document,key)
    },
    deleteDocument: function (collectionName:string, key:string){
        this.isengardDB.collection(collectionName).doc(key).delete()
    },
    updateDocument: function(collectionName:string,key:string,infoUpdate:any){
        this.isengardDB.collection(collectionName).doc(key).update(infoUpdate)
    },
    getCollection: function(collectionName:string){
        return this.isengardDB.collection(collectionName).get()
    },
    getOrderedAscendingCollection: function(collectionName:string,orderBy:string){
        return this.isengardDB.collection(collectionName).orderBy(orderBy).get()
    },
    getOrderedADescendingCollection: function(collectionName:string,orderBy:string){
        return this.isengardDB.collection(collectionName).orderBy(orderBy,'desc').get()
    },
    getKeyedCollection: function(collectionName:string){
        return this.isengardDB.collection(collectionName).get({keys:true})
    }
}

// Allows for configuration, verbose logs when debug set to true
function generateDB(){
    var db = new LocalBase('db');
    db.config.debug = true;
    return db;
}

export default isengard;

