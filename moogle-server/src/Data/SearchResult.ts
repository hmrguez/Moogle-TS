import {SearchItem} from "./SearchItem";

export class SearchResult {
    Items: SearchItem[]
    Suggestion: string

    constructor(result: SearchItem[], suggestion: string) {
        this.Items = result;
        this.Suggestion = suggestion;
    }
}