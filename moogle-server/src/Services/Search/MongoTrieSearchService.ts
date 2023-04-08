import {ISearchService} from "../../Interfaces/ISearchService";
import {SearchResult} from "../../Data/SearchResult";
import {MongoClient} from "mongodb";
import {processText} from "../../Helper/TrieSearchService/StringManipulation";
import {Trie} from "../../Helper/MongoTrieSearchService/Trie";
import {SearchItem} from "../../Data/SearchItem";
import {search} from "../../Helper/MongoTrieSearchService/Trie";
import {tfIdfNodeTraverse} from "../../Helper/MongoTrieSearchService/TF-IDF";

export class MongoTrieSearchService implements ISearchService{

    mongoClient : MongoClient;
    db: string = "moogle-database";
    collections: string[] = ['docs']

    constructor(client: MongoClient) {
        this.mongoClient = client
    }

    async addDocument(docName: string, docContent: string): Promise<void> {
        const split : string[] = processText(docContent);
        const curTrie = new Trie()

        for (let i = 0; i < split.length; i++)
            curTrie.insert(split[i]);

        const toInsert = {
            title: docName,
            trie: curTrie,
        }

        try{
            await this.mongoClient.db(this.db).collection(this.collections[0]).insertOne(toInsert)
            const docCorpus = await this.mongoClient.db(this.db).collection(this.collections[0]).find().toArray();

            const corpus = []
            for (const docCorpusKey in docCorpus) {
                const tempBook = {
                    _id: docCorpus[docCorpusKey]._id,
                    title: docCorpus[docCorpusKey].title,
                    trie: docCorpus[docCorpusKey].trie,
                }

                corpus.push(tempBook)
            }

            const allTries = corpus.map(x => x.trie)


            for(const book in corpus) {
                tfIdfNodeTraverse(corpus[book].trie, allTries, "", corpus[book].trie.head)
                await this.mongoClient.db(this.db).collection(this.collections[0]).replaceOne({_id: corpus[book]._id}, corpus[book])
            }

            console.log(`Inserted ${docName} successfully`)
        }
        catch (e){
            throw e
            console.log(`Error with insertion`)
        }
    }

    async search(query: string): Promise<SearchResult> {

        const split : string[] = processText(query);
        const books = await this.mongoClient.db(this.db).collection(this.collections[0]).find().toArray();

        let searchItemResult : SearchItem[] = []

        for (const booksKey in books) {
            let total = 0
            for (const splitKey in split) {
                const trie = books[booksKey].trie;
                const response = search(trie, split[splitKey]);
                if(response && response[0] > 0) {
                    total += response[0];
                }
            }
            if(total > 0) searchItemResult.push(new SearchItem(books[booksKey].title, total, ""))
        }

        return new SearchResult(searchItemResult, "lorem suggestion")
    }
}