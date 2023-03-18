import {ISearchService} from "../../Interfaces/ISearchService";
import {SearchResult} from "../../Data/SearchResult";
import {Book} from "../../Data/Book";
import {readAllFiles, readBooksFromJson, writeBooksToJson} from "../../Helper/FileManipulation";
import path from "path";
import {search, Trie} from "../../Helper/Trie";
import {processText} from "../../Helper/StringManipulation";
import {SearchItem} from "../../Data/SearchItem";
import {tfIdfNodeTraverse} from "../../Helper/TF-IDF";
import {jointSnippet} from "../../Helper/Snippet";

export class TrieSearchService implements ISearchService{
     _dataset : Book[] = []

    loadDb(): void {
        let thisPath = path.join(__dirname,"..","..","Content");
        let files = readAllFiles(thisPath)
        files.forEach(item => {
            let trie = new Trie();
            let words = processText(item[1])
            words.forEach(word => {
                trie.insert(word)
            })
            let newBook = new Book(item[0],trie, item[1], words.length)
            this._dataset.push(newBook)
        })

        this._dataset.forEach(item => tfIdfNodeTraverse(item, this._dataset, "", item.TrieContent))

        writeBooksToJson(this._dataset)
    }

    loadDbCached(): void {
        this._dataset = readBooksFromJson();
    }

    search(query: string): SearchResult {
        return new SearchResult(this.searchForItems(query), "lorem suggestion")
    }

    private searchForItems(query: string): SearchItem[]{
        let result : SearchItem[] = []
        this._dataset.forEach(item => {
            let splitQuery = query.split(' ');
            let toSearch : string[] = []

            let total = 0;
            splitQuery.forEach(word => {
                let response = search(item.TrieContent, word, 0);
                if(response && response.TfIdf > 0) {
                    total += response.TfIdf;
                    toSearch.push(word)
                }
            });

            if(total > 0) result.push(new SearchItem(item.Name, total, jointSnippet(item, toSearch)));
        });
        return result;
    }
}