

import { afterAll, afterEach, beforeAll, expect, it, jest } from "@jest/globals";
import SwapiService from "../../services/Swapi.service";

describe('Testing the STRAP Service', () => {
    const swapiService = new SwapiService();
    

    it('Should return true when strapi service is created', async () => {
       expect(typeof SwapiService).toEqual('function');
    })

    it('Should only return one instance of the strapi service as a singletons ', () => {
        expect(swapiService.constructor.name).toEqual('SwapiService')
        expect(swapiService.prototype).toEqual(swapiService.constructor._instance);
    })

    it('Should have a method to get characters', () => {
        expect(swapiService.getCharacters).toBeDefined();
    })
})