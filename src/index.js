import {compose, pipe} from 'lodash/fp'

// const str = " Hello yo " 
// const type = "div" 

const trim = str => str.trim()
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()


const transform = pipe(trim, toLowerCase, wrap("div"))
console.log(input)

// const messege = console.log(toLowerCase(trim(wrap(type, str))))
