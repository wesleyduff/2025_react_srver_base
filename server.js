
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

function init() {

    return new Promise((resolve, reject) => {


        let serverInstance ;

        app.get('/', (req, res) => {
            return res.json({
                data: 'NEEDS IMPLEMENTATION'
            })
        })

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