import {search, Trie, TrieNode} from "./Trie";

const tfIdfSingle = (trie: Trie, corpus: Trie[], word: string, node: TrieNode): number => {
    let tf = node.reps / trie.wordCount
    if (tf == 0) return 0;
    let booksWhereAppear: number = corpus.filter(x => search(x, word)[1] > 0).length;
    if (booksWhereAppear == 0) return 0;
    let idf = Math.log(corpus.length / booksWhereAppear);
    return tf * idf;
}

export const tfIdfNodeTraverse = (book: Trie, corpus: Trie[], formed: string, node: TrieNode) => {
    node.score = tfIdfSingle(book, corpus, formed, node);
    for (const childrenKey in node.children)
        tfIdfNodeTraverse(book, corpus, formed + childrenKey, node.children[childrenKey])
}