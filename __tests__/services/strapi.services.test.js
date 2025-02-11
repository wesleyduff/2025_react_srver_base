

import { afterAll, afterEach, beforeAll, expect, it, jest } from "@jest/globals";
import StrapiService from "../../services/StrapiService";

describe('Testing the STRAP Service', () => {
    const strapiService = new StrapiService();
    

    it('Should return true when strapi service is created', async () => {
       expect(typeof StrapiService).toEqual('function');
    })

    it('Should only return one instance of the strapi service as a singletons ', () => {
        expect(strapiService.constructor.name).toEqual('StrapiService')
        expect(StrapiService.prototype).toEqual(strapiService.constructor._instance);
    })

    it('Should have a method to get characters', () => {
        expect(strapiService.getCharacters).toBeDefined();
    })
})