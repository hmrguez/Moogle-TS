export class SearchItem {
    Name: string;
    Score: number;
    Snippet: string;

    constructor(name: string, score: number, snippet: string) {
        this.Name = name;
        this.Score = score;
        this.Snippet = snippet
    }
}