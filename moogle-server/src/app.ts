import express, {Application, json, NextFunction, Request, Response} from 'express';
import {MongoClient} from "mongodb";
import {ISearchService} from "./Interfaces/ISearchService";
import {MongoTrieSearchService} from "./Services/Search/MongoTrieSearchService";
const cors = require('cors')

const app: Application = express();
app.use(cors())

const uri = 'mongodb+srv://zealotalgo:dc6t9DquFUhMU6S7@moogledbcluster.hlw8s6l.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

const mongoService: ISearchService = new MongoTrieSearchService(client)

app.get('/search', async (req: Request, res: Response) => {
    console.log(req.query.query)
    await client.connect();
    console.log(req.query.query + "  success")
    const query = req.query.query as string
    const result = await mongoService.search(query, "")

    res.json(result)
})

app.listen(5000, () => console.log("Server running on 5000"))