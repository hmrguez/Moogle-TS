import {SearchResult} from "../Data/SearchResult";

export interface ISearchService{
    loadDb(): void;
    loadDbCached() : void
    search(query: string) : SearchResult
}