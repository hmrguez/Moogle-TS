import {SearchResult} from "../Data/SearchResult";

export interface ISearchService{
    search(query: string) : Promise<SearchResult>;
    addDocument(docName: string, docContent: string) : void;
}