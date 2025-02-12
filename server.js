
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/base.routes';
dotenv.config();

const app = express();

function init() {

    return new Promise((resolve, reject) => {


        let serverInstance ;

        //setup routes
        routes(app)

        serverInstance = app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT : ${process.env.PORT}`)
        })

        resolve({
            app,
            serverInstance
        })

    })
}

export default {
    start: init
}