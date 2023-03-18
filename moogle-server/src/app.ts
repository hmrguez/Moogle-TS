import express, {Application, Request, Response} from 'express';
import {ISearchService} from "./Interfaces/ISearchService";
import {TrieSearchService} from "./Services/Search/TrieSearchService";

const app: Application = express();

const searchService : ISearchService = new TrieSearchService();
searchService.loadDbCached();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
})

app.listen(5000, () => console.log("Server running on 5000"))