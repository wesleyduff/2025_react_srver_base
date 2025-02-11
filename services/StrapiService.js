import dotEnv from 'dotenv'
dotEnv.config();

export default class StrapiService {

    static _instance;

    constructor(){

        if(StrapiService._instance){
            return _instance;
        } 

        StrapiService._instance = this;
        
    }

    getCharacters(){
        console.log(process.env.STRAPI_API_SERVER_URI);
    }
}