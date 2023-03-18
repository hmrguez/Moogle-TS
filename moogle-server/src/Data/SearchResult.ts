import {SearchItem} from "./SearchItem";

export class SearchResult {
    Result: SearchItem[]
    Suggestion: string

    constructor(result: SearchItem[], suggestion: string) {
        this.Result = result;
        this.Suggestion = suggestion;
    }
}