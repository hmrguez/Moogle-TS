import express, { Application, NextFunction, Request, Response} from 'express';
import {MongoClient} from "mongodb";
import {ISearchService} from "./Interfaces/ISearchService";
import {TrieSearchService} from "./Services/Search/TrieSearchService";
import {SearchResult} from "./Data/SearchResult";
import {Trie} from "./Helper/MongoTrieSearchService/Trie";
import {MongoTrieSearchService} from "./Services/Search/MongoTrieSearchService";
const cors = require('cors')

const app: Application = express();
app.use(cors())

const uri = 'mongodb+srv://zealotalgo:dc6t9DquFUhMU6S7@moogledbcluster.hlw8s6l.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

const text = "The avid fox should retire. This is a problem for the eagle, who is constantly looking for a prey\n" +
    "The Mets, who lost all season, right now want to win again."
const text2 = "This is a second sample of the first text;\n" +
    "however this is not a final draft (XD). But the mighty eagle looks down on us"
const text3 = "The fox is a very smart animal. It is also very fast. It is a very good hunter."
const text4 = "The eagle is a very smart animal. It is also very fast. It is a very good hunter."
const text5 = "The fox is very smart animal. It is also very fast. It is very good hunter."


const db = "moogle-database"
const collections = ["book"]

const mongoService: ISearchService = new MongoTrieSearchService(client)

// const searchService : ISearchService = new TrieSearchService();
// searchService.loadDbCached();

app.get('/search', async (req: Request, res: Response) => {
    await client.connect();
    mongoService.addDocument("Fifth", text5, "")

    res.send(await mongoService.search("fox", ""))
})

app.listen(5000, () => console.log("Server running on 5000"))