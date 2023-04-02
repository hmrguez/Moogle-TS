import {Book} from "../../Data/Book";
import {KMPSearch} from "./KMP";

const snippet = (book: Book, word: string): string => {
    let answer: string = ""
    let kmp: number = KMPSearch(word, book.TextContent).next().value;
    let newPos: number = kmp - 51;
    for (let i = -50; i < 50; i++) {
        newPos += 1;
        if (newPos >= 0 && newPos < book.TextContent.length) {
            answer += book.TextContent[newPos];
        }
    }
    return answer;
}

export const jointSnippet = (book: Book, query: string[]): string => {
    return query.map(x=>snippet(book,x)).join(" ... ");
}

