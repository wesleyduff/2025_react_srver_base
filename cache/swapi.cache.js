
import NodeCache from "node-cache";
export const cache = new NodeCache({stdTTL: 60 * 60});
export const getCharactersCache = (req, res, next) => {
    try{
        if(cache.has("swapi-characters")){
            return res.send(cache.get("swapi-characters")).status(200)
        }
        return next();
    } catch(err){
        console.log(err);
        throw err;
    }
}