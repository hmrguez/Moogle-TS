export class Trie {
    Children: Trie[]
    Reps: number;
    TfIdf: number;

    constructor() {
        this.Children = [];
        this.Reps = 0;
        this.TfIdf = 0;
    }

    insert(word: string): void {
        this.hInsert(word, 0)
    }

    private hInsert(word: string, pos: number): void {
        if (pos == word.length) {
            this.Reps++;
            return;
        }

        let next: number = word.charCodeAt(pos) - 'A'.charCodeAt(0);
        if (!this.Children[next]) this.Children[next] = new Trie()

        this.Children[next].hInsert(word, pos + 1)
    }
}

export function search(trie: Trie, word: string, pos: number) : Trie | null{
    if (pos == word.length) {
        if(trie.Reps > 0) return trie;
        return null;
    }

    let next: number = word.charCodeAt(pos) - 'A'.charCodeAt(0);
    if (!trie.Children[next]) return null;

    return search(trie.Children[next], word, pos + 1)
}