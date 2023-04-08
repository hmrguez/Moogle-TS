import express, {Application, Request, Response} from 'express';
import {MongoClient} from "mongodb";
import {ISearchService} from "./Interfaces/ISearchService";
import {MongoTrieSearchService} from "./Services/Search/MongoTrieSearchService";
const cors = require('cors')

const app: Application = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const uri = 'mongodb+srv://zealotalgo:dc6t9DquFUhMU6S7@moogledbcluster.hlw8s6l.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

const mongoService: ISearchService = new MongoTrieSearchService(client)
// const searchService: ISearchService = new TrieSearchService();

app.get('/search', async (req: Request, res: Response) => {
    console.log(req.query.query)
    await client.connect();
    console.log(req.query.query + "  success")
    const query = req.query.query as string
    const result = await mongoService.search(query)

    res.json(result)
})

app.post('/add', async (req: Request, res: Response) => {
    console.log("Started posting!")
    await client.connect();
    const title = req.body.title;
    const content = req.body.content;
    await mongoService.addDocument(title, content)
    console.log("Finished posting!")
})


app.listen(5000, () => console.log("Server running on 5000"))