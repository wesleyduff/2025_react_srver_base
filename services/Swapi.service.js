import dotEnv from 'dotenv'
dotEnv.config();

export default new class SwapiService {

    constructor(){
        
    }

    getCharacters(){
        return [{
            name: 'solo'
        }]
    }
}