import {readFileSync, readdirSync, writeFile} from "fs";
import path from "path";
import {Book} from "../../Data/Book";

export const readAllFiles = (pathToDirectory: string) : string[][] => {
    return readdirSync(pathToDirectory, {withFileTypes: true})
        .map(item => [item.name, readFileSync(path.join(pathToDirectory, item.name),'utf8')])
}

export const writeBooksToJson = (books: Book[]) : void => {
    let data = JSON.stringify(books)

    writeFile(path.join('src','Json','books.json'), data, err => {
        if (err) {
            throw err
        }
        console.log('JSON data is saved.')
    })
}

export const readBooksFromJson = () : Book[] => {
    let json: string = readFileSync(path.join('src', 'Json', 'books.json'), 'utf-8')
    return JSON.parse(json)
}