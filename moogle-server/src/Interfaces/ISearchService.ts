import {SearchResult} from "../Data/SearchResult";

export interface ISearchService{
    search(query: string, userEmail: string) : Promise<SearchResult>;
    addDocument(docName: string, docContent: string, userEmail: string) : void;
}