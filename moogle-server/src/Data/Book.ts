import {Trie} from "../Helper/Trie";

export class Book {
    Name: string
    TrieContent: Trie
    TextContent: string
    WordCount: number


    constructor(name: string, trie: Trie, text: string, count: number) {
        this.Name = name;
        this.TrieContent = trie;
        this.TextContent = text;
        this.WordCount = count;
    }
}