
export default class Director {
    static _instance;
    nodeCache;

    constructor(){
        if(this._instance){
            return this._instance;
        }

        this._instance = this;
    }

    fetchOrCall(query){
        if(query === '/characters'){
            return false
        }
    }
}