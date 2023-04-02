import {Trie} from "./Trie";

export class Book{
    constructor(
        public Title: string,
        public TrieContent: Trie,
    ){}
}