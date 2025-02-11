

import { afterAll, afterEach, beforeAll, expect, it, jest } from "@jest/globals";
import supertest from 'supertest';
import server from '../../server'

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
        })
    })

})