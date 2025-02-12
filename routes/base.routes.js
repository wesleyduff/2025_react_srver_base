import { getCharactersCache } from "../cache/swapi.cache";
import swapiService from "../services/Swapi.service";

export default (app) => {

    app.get('/', (req, res) => {
        res.json({
            data: 'NEEDS IMPLEMENTATION'
        })
    })

    app.get('/characters', getCharactersCache, (req, res) => {
        try{
            const response = swapiService.getCharacters();
            res.json(response).status(200)
        } catch(err) {
            res.json({
                error: 'swapi-error-001',
                mesage: 'Failed to get characters from SWAPI API'
            })
        }
    })
   
    return app;
}