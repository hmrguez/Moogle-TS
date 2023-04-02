export class Trie{
    head: TrieNode = new TrieNode()
    wordCount: number = 0;


    insert(word: string): void{
        let current: TrieNode = this.head

        for (let i = 0; i < word.length; i++) {
            if(current.children[`${word[i]}`] === undefined){
                current.children[`${word[i]}`] = new TrieNode()
            }

            current = current.children[`${word[i]}`]
        }

        current.reps += 1
        this.wordCount += 1
    }
}


export class TrieNode{
    children: {[char: string]: TrieNode } = {}
    score: number = 0;
    reps: number = 0;
}

export function search(trie: Trie, word: string): number[]{
    let current: TrieNode = trie.head

    for (let i = 0; i < word.length; i++) {
        if(current.children[`${word[i]}`] === undefined){
            return [0,0];
        }

        current = current.children[`${word[i]}`]
    }

    return [current.score, current.reps];
}