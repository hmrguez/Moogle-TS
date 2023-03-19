import express, {Application, NextFunction, Request, Response} from 'express';
import {ISearchService} from "./Interfaces/ISearchService";
import {TrieSearchService} from "./Services/Search/TrieSearchService";
import {SearchResult} from "./Data/SearchResult";
const cors = require('cors')


const app: Application = express();

app.use(cors())

const searchService : ISearchService = new TrieSearchService();
searchService.loadDbCached();

app.get('/search', (req: Request, res: Response) => {
    const query = req.query.query as string;
    const mySearch : SearchResult = searchService.search(query);
    res.json(mySearch);
})

app.listen(5000, () => console.log("Server running on 5000"))