import {search, Trie} from "./Trie";
import {Book} from "../Data/Book";

const tfIdfSingle = (book: Book, corpus: Book[], word: string, node: Trie): number => {
    let tf = node.Reps / book.WordCount;
    if (tf == 0) return 0;
    let booksWhereAppear: number = corpus.filter(x => search(x.TrieContent, word, 0)).length;
    if (booksWhereAppear == 0) return 0;
    let idf = Math.log(corpus.length / booksWhereAppear);
    return tf * idf;
}

export const tfIdfNodeTraverse = (book: Book, corpus: Book[], formed: string, node: Trie) => {
    if(node.Reps>0){
        node.TfIdf = tfIdfSingle(book, corpus, formed, node);
    }

    if (node.Children) {
        node.Children.forEach((child, index) => {
            if(child)
                tfIdfNodeTraverse(book, corpus, formed + convertCharToInt(index), child)
        });
    }
}

function convertCharToInt(index: number) {
    let start = 'A'.charCodeAt(0);
    return String.fromCharCode(index + start);
}