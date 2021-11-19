import {compose, pipe} from 'lodash/fp'
import {Map} from 'immutable'
import {produce} from 'immer'

let book = { 
    title: "Harry Potter",
    isPublished: false 
}

function publish(book) { 
    return produce(book, draftBook => {
        draftBook.isPublished = true
    })
}

let updated = publish(book)

console.log(book)
console.log(updated)