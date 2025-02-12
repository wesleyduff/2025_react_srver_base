

import { afterAll, afterEach, beforeAll, expect, it, jest } from "@jest/globals";
import supertest from 'supertest';
import server from '../../server';

import { cache } from "../../cache/swapi.cache";

describe('Testing the STRAP Service', () => {

    let app = null,
    serverInstance = null;

    beforeAll(async () => {
        const init = await server.start();
        serverInstance = init.serverInstance;
        app = init.app;
    })

 

    afterAll(() => {
        serverInstance.close();
    })

    it('Should return true', async () => {
        await supertest(app)
        .get('/')
        .expect(200)
        .then((response) => {
            expect(response.body).toBeTruthy();
            expect(Object.keys(response.body).includes('data')).toBeTruthy();
        })
    })

    it('Should return a cached version of characters and remove the cache and verify', async () => {
        cache.set("swapi-characters",
            {data: [{name: 'solo', mock: true}]},
            1000
        )
        await supertest(app)
        .get('/characters')
        .expect(200)
        .then((response) => {
            cache.del('swapi-characters')
            expect(response.body).toBeTruthy();
            expect(Object.keys(response.body).includes('data')).toBeTruthy();
            expect(response.body.data[0].mock).toBeTruthy();

           supertest(app)
            .get('/characters')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeTruthy();
                expect(response.body.data[0].mock).toBeFalsy();
            })
        })
    })

})